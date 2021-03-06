import mongoose from 'mongoose';
import _ from 'lodash/fp';

import { ArticleModel } from '../models/article';
import { noImagePath, rootPath } from '../../utils/constants';
import { unlinkIfExist } from '../../utils/fs';

export const ArticleController = {};

ArticleController.articleGetList = async (req, res, next) => {
  try {
    const { user } = req;
    const articles = await ArticleModel
      .find()
      .populate('author')
      .exec();

    const allowedArticles = _.filter(article =>
      article.isPublic || _.isEqual(article.author._id, _.property('_id', user))
    )(articles);

    res.status(200).json({ articles: allowedArticles });
  } catch (err) {
    next(err);
  }
};

ArticleController.articleCreate = async (req, res, next) => {
  try {
    const { title, text, isPublic } = req.body;
    const image = req.file && req.file.path;
    const { user } = req;

    const article = new ArticleModel({
      _id: mongoose.Types.ObjectId(),
      title,
      text,
      isPublic,
      image: _.defaultTo(noImagePath, image),
      author: user
    });

    await article.save();

    res.status(201).json({
      message: 'Article was created',
      article
    });
  } catch (err) {
    next(err);
  }
};

ArticleController.articleGet = async (req, res, next) => {
  try {
    const { articleId } = req.params;
    const { user } = req;

    const article = await ArticleModel
      .findById(articleId)
      .populate('author')
      .exec();

    if (_.isNil(article)) {
      return res.status(404).json({
        message: 'Article was not found'
      });
    }

    if (!article.isPublic && !_.isEqual(article.author._id, _.property('_id', user))) {
      return res.status(403).json({
        message: 'You are not allowed to view this article'
      });
    }

    res.status(200).json({ article });
  } catch (err) {
    next(err);
  }
};

ArticleController.articleUpdate = async (req, res, next) => {
  try {
    const { articleId } = req.params;
    const { title, text, isPublic } = req.body;
    const image = req.file && req.file.path;
    const user = req.user;

    const article = await ArticleModel
      .findById(articleId)
      .exec();

    if (_.isNil(article)) {
      unlinkIfExist(`${rootPath}/${image}`);

      return res.status(404).json({
        message: 'Article was not found'
      });
    }

    if (!_.isEqual(article.author, user._id)) {
      return res.status(403).json({
        message: 'You are not allowed to edit this article'
      });
    }

    const updatedArticle = await ArticleModel
      .findOneAndUpdate({ _id: articleId }, {
        title,
        text,
        isPublic,
        image: _.defaultTo(noImagePath, image),
        updatedAt: Date.now()
      }, { 'new': true })
      .populate('author')
      .exec();

    res.status(200).json({
      message: 'Article was updated',
      article: updatedArticle
    });
  } catch (err) {
    next(err);
  }
};

ArticleController.articleDelete = async (req, res, next) => {
  try {
    const { articleId } = req.params;
    const { user } = req;

    const article = await ArticleModel
      .findById(articleId)
      .exec();

    if (_.isNil(article)) {
      return res.status(404).json({
        message: 'Article was not found'
      });
    }

    if (!_.isEqual(article.author, user._id)) {
      return res.status(403).json({
        message: 'You are not allowed to delete this article'
      });
    }

    await ArticleModel
      .deleteOne({ _id: articleId })
      .exec();

    unlinkIfExist(`${rootPath}/${article.image}`);

    res.status(200).json({
      message: 'Article was deleted'
    });
  } catch (err) {
    next(err);
  }
};
