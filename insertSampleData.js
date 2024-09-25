const mongoose = require('mongoose');
const User = require('./models/user'); // Adjust the path as necessary
const Post = require('./models/post'); // Assuming you have a Post model
const Comment = require('./models/comment'); // Assuming you have a Comment model
const Like = require('./models/like'); // Assuming you have a Like model
const Follower = require('./models/follower'); // Assuming you have a Follower model
const Tag = require('./models/tag'); // Assuming you have a Tag model
const PostTag = require('./models/postTag'); // Assuming you have a PostTag model
const View = require('./models/view'); // Assuming you have a View model

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    console.log('MongoDB connected...');

    // Sample data for Users
    const users = [
        {
            username: "John Doe",
            email: "johndoe@example.com",
            age: 30,
            createdAt: new Date()
        },
        {
            username: "Jane Smith",
            email: "janesmith@example.com",
            age: 25,
            createdAt: new Date()
        },
        {
            username: "Mark Johnson",
            email: "markjohnson@example.com",
            age: 35,
            createdAt: new Date()
        },
        {
            username: "Susan Lee",
            email: "susanlee@example.com",
            age: 45,
            createdAt: new Date()
        }
    ];

    // Sample data for Posts
    const posts = [
        {
            title: "First Post",
            content: "This is the content of the first post.",
            authorId: null, // Will be assigned after inserting users
            createdAt: new Date()
        },
        {
            title: "Second Post",
            content: "This is the content of the second post.",
            authorId: null,
            createdAt: new Date()
        }
    ];

    // Insert sample data into the database
    try {
        const insertedUsers = await User.insertMany(users);
        console.log('Users inserted!');

        // Assign authorId based on inserted users
        posts[0].authorId = insertedUsers[0]._id; // John Doe
        posts[1].authorId = insertedUsers[1]._id; // Jane Smith

        const insertedPosts = await Post.insertMany(posts);
        console.log('Posts inserted!');

        // Sample data for Comments
        const comments = [
            {
                text: "Great post!",
                postId: insertedPosts[0]._id,
                userId: insertedUsers[0]._id,
                createdAt: new Date()
            },
            {
                text: "Thanks for sharing!",
                postId: insertedPosts[1]._id,
                userId: insertedUsers[1]._id,
                createdAt: new Date()
            }
        ];

        const insertedComments = await Comment.insertMany(comments);
        console.log('Comments inserted!');

        // Sample data for Likes
        const likes = [
            {
                postId: insertedPosts[0]._id,
                userId: insertedUsers[0]._id,
                createdAt: new Date()
            },
            {
                postId: insertedPosts[1]._id,
                userId: insertedUsers[1]._id,
                createdAt: new Date()
            }
        ];

        const insertedLikes = await Like.insertMany(likes);
        console.log('Likes inserted!');

        // Sample data for Followers
        const followers = [
            {
                followerId: insertedUsers[0]._id,
                followeeId: insertedUsers[1]._id,
                createdAt: new Date()
            },
            {
                followerId: insertedUsers[1]._id,
                followeeId: insertedUsers[2]._id,
                createdAt: new Date()
            }
        ];

        const insertedFollowers = await Follower.insertMany(followers);
        console.log('Followers inserted!');

        // Sample data for Tags
        const tags = [
            { name: "MongoDB" },
            { name: "JavaScript" },
            { name: "Web Development" }
        ];

        const insertedTags = await Tag.insertMany(tags);
        console.log('Tags inserted!');

        // Sample data for PostTags
        const postTags = [
            {
                postId: insertedPosts[0]._id,
                tagId: insertedTags[0]._id,
                createdAt: new Date()
            },
            {
                postId: insertedPosts[1]._id,
                tagId: insertedTags[1]._id,
                createdAt: new Date()
            }
        ];

        const insertedPostTags = await PostTag.insertMany(postTags);
        console.log('PostTags inserted!');

        // Sample data for Views
        const views = [
            {
                postId: insertedPosts[0]._id,
                userId: insertedUsers[0]._id,
                timestamp: new Date()
            },
            {
                postId: insertedPosts[1]._id,
                userId: insertedUsers[1]._id,
                timestamp: new Date()
            }
        ];

        const insertedViews = await View.insertMany(views);
        console.log('Views inserted!');

    } catch (err) {
        console.error('Error inserting sample data:', err);
    } finally {
        mongoose.connection.close(); // Close the connection
    }
}).catch(err => {
    console.error('MongoDB connection error:', err);
});
