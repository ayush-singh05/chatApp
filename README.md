# Full-Stack Chat App

A real-time chat application built with Express, WebSocket, MongoDB, and Mongoose for the backend, and JavaScript, HTML, and CSS for the frontend.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)


## Features

- Real-time messaging
- User authentication
- Message history stored in MongoDB
- Responsive design
- Easy-to-use interface

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Clone the Repository

```bash
git clone https://github.com/ayush-singh05/chatApp.git
cd <file name>
```
### Install Dependencies

```bash
npm install
```
### Set Up Environment Variables
* Create a .env file in the root of your project and add the following:

.env.local
```bash

PORT=8000
MONGODB_URI=mongodb+srv://ayushsingh2442:ayush2442@cluster0.v0kssb9.mongodb.net
CORS_ORIGIN=*
DB_NAME="chatApp"
REFRESH_TOKEN_SECRET=5456876i76g67657657u65hugf5656575xdfe45
REFRESH_TOKEN_EXPIRY=10d
ACCESS_TOKEN_SECRET=7566y5yhhtsdegdgd5454543543dfyhr564yrhft74etrhft6e
ACCESS_TOKEN_EXPIRY=1d
CORS_ORIGIN=*

```
### Start the Server
```bash
npm start
```
The server will start on http://localhost:8000.

### Usage
* Open Your Browser Navigate to http://localhost:8000 to start using the chat application.

### Register and Login
- Register a new account or log in with existing credentials.
- Start chatting in real-time with other registered users.

## Technologies Used
### Backend
- Express
- WebSocket
- MongoDB
- Mongoose
### Frontend
- JavaScript
- HTML
- CSS
