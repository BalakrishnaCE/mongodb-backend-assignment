MongoDB Backend Assignment
Table of Contents
Introduction
Project Setup
Environment Variables
API Endpoints
Usage
Technologies Used
Folder Structure
License
Introduction
This project is a backend service built using Node.js, Express, and MongoDB. It handles operations for a social media-like platform with users, posts, comments, likes, and more. The project showcases the use of MongoDB's aggregation framework to fetch complex data for analytics and reporting.

Project Setup
1. Clone the Repository:

<code>git clone https://github.com/BalakrishnaCE/mongodb-backend-assignment.git
cd mongodb-backend-assignment</code>

2. git clone https://github.com/BalakrishnaCE/mongodb-backend-assignment.git
cd mongodb-backend-assignment:
<code>npm install</code>

3. Configure Environment Variables:
Create a .env file in the root directory and configure the environment variables as specified below.

4.Start the Server:
<code>npm start</code>

The server will be running at http://localhost:5000.

Environment Variables
The following environment variables need to be configured in the .env file:

<code>MONGO_URI=mongodb://localhost:27017/your-database-namePORT=5000</code>

MONGO_URI: The MongoDB connection URI.
PORT: The port number where the server will be running.


API Endpoints
Users
GET /users: Fetch all users.
POST /users: Create a new user.
GET /users/
: Get user details by ID.
PUT /users/
: Update user details by ID.
DELETE /users/
: Delete user by ID.
Posts
GET /posts: Fetch all posts.
POST /posts: Create a new post.
GET /posts/
: Get post details by ID.
PUT /posts/
: Update post details by ID.
DELETE /posts/
: Delete post by ID.
Comments
GET /comments: Fetch all comments.
POST /comments: Create a new comment.
GET /comments/
: Get comment details by ID.
PUT /comments/
: Update comment details by ID.
DELETE /comments/
: Delete comment by ID.
Likes
POST /likes: Like a post.
DELETE /likes/
: Remove a like from a post.
Followers
POST /followers: Follow a user.
DELETE /followers/
: Unfollow a user.
Usage
Running the Server
To start the server, use the following command:

<code>npm start</code>

This will start the server on http://localhost:5000.

Making Requests
You can use tools like Postman or Insomnia to test the API endpoints.

Technologies Used
Node.js: JavaScript runtime for building the backend.
Express.js: Web framework for Node.js.
MongoDB: NoSQL database for storing data.
Mongoose: ODM library for MongoDB and Node.js.
dotenv: For managing environment variables.


Folder Structure
mongodb-backend-assignment/
│
├── controllers/      # Request handlers
├── models/           # Database schemas/models
├── routes/           # API routes
├── .env              # Environment variables
├── .gitignore        # Git ignore file
├── server.js         # Server entry point
├── package.json      # Project metadata and scripts
└── README.md         # Project documentation
