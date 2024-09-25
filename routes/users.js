const express = require('express');
const User = require('../models/user');
const Post = require('../models/post');
const Comment = require('../models/comment');
const Like = require('../models/like');
const View = require('../models/view');

const router = express.Router();

router.get('/aggregatedData', async (req, res) => {
  try {
    const result = await User.aggregate([
      {
        $lookup: {
          from: 'posts',
          localField: '_id',
          foreignField: 'authorId',
          as: 'posts'
        }
      },
      {
        $lookup: {
          from: 'comments',
          localField: '_id',
          foreignField: 'userId',
          as: 'comments'
        }
      },
      {
        $lookup: {
          from: 'likes',
          localField: '_id',
          foreignField: 'userId',
          as: 'likes'
        }
      },
      {
        $lookup: {
          from: 'views',
          localField: '_id',
          foreignField: 'userId',
          as: 'views'
        }
      },
      {
        $project: {
          ageGroup: {
            $switch: {
              branches: [
                { case: { $lt: ["$age", 25] }, then: "18-24" },
                { case: { $lt: ["$age", 35] }, then: "25-34" },
                { case: { $lt: ["$age", 45] }, then: "35-44" }
              ],
              default: "45+"
            }
          },
          totalPosts: { $size: "$posts" },
          totalComments: { $size: "$comments" },
          totalLikes: { $size: "$likes" },
          totalViews: { $size: "$views" }
        }
      },
      {
        $group: {
          _id: "$ageGroup",
          posts: { $sum: "$totalPosts" },
          comments: { $sum: "$totalComments" },
          likes: { $sum: "$totalLikes" },
          views: { $sum: "$totalViews" }
        }
      }
    ]);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
