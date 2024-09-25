MongoDB Backend Assignment
<br>
This project demonstrates a simple backend setup using MongoDB and Mongoose to handle various collections such as users, posts, comments, likes, and others. The goal is to populate a MongoDB database with sample data and perform aggregation queries as described in the assignment.


Table of Contents
1. Prerequisites
2. Project Setup
3. Database Setup
4. Sample Data Insertion
5. Configure Environment Variables:
6. Start the Server
7. API Endpoints
8. Project Structure


1. Prerequisites
Node.js (version 12 or later)
MongoDB (version 4.0 or later)
NPM (Node Package Manager)


2. Project Setup
 Clone the Repository:

    <code>git clone https://github.com/BalakrishnaCE/mongodb-backend-assignment.git
    cd mongodb-backend-assignment</code>
    <code>npm install</code>

3. Database Setup
    a. Ensure MongoDB is installed and running on your local machine or in your preferred environment.

    b. Create a new MongoDB database named yourDatabaseName (replace with your desired name):
    <code>use yourDatabaseName</code>

    c. Check the MongoDB connection in the insert.js and server.js files and update the connection string if necessary:
    <code>mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    </code>


4. Sample Data Insertion
    a. To populate the database with sample data, run the insert.js script:
    <code>node insert.js</code>
    b.This script will insert sample users, posts, comments, likes, followers, tags, post tags, and views data into the database.

    c. Ensure that the sample data has been inserted successfully. The console will display messages confirming the successful insertion of each collection.

5. Configure Environment Variables:
    Create a .env file in the root directory and configure the environment variables as specified below.
    Environment Variables
    The following environment variables need to be configured in the .env file:

    <code>MONGO_URI=mongodb://localhost:27017/your-database-namePORT=5000</code>

    MONGO_URI: The MongoDB connection URI.
    PORT: The port number where the server will be running.


6. Start the Server:
    <code>node server.js</code>
    The server will be running at http://localhost:5000.


7. API Endpoints
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

    Making Requests
    You can use tools like Postman or Insomnia to test the API endpoints.

    Technologies Used
    Node.js: JavaScript runtime for building the backend.
    Express.js: Web framework for Node.js.
    MongoDB: NoSQL database for storing data.
    Mongoose: ODM library for MongoDB and Node.js.
    dotenv: For managing environment variables.


8. Project Structure
    mongodb-backend-assignment/
    │
    ├── models/
    │   ├── user.js
    │   ├── post.js
    │   ├── comment.js
    │   ├── like.js
    │   ├── follower.js
    │   ├── tag.js
    │   ├── postTag.js
    │   └── view.js
    │
    ├── insert.js
    ├── server.js
    ├── package.json
    └── README.md


    models/: Contains Mongoose schemas for different collections in the database.
    insert.js: Script to populate the database with sample data.
    server.js: Main server file to handle API requests.