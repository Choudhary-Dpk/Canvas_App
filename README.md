# **Canvas_App**

## Overview
This project is a web-based drawing application that allows users to create, modify, and store drawings with various shapes and annotations. The application is built using Node.js on the server-side, React.js on the client-side, and PostgreSQL as the database.

## Features
Drawing tools for lines and rectangles.
Select tool for moving and resizing.

## Tech Stack
#### Server-side: 
Node.js with Express.js
#### Client-side: 
React.js
#### Database: 
PostgreSQL

## Setup Instructions

### Prerequisites
Node.js and npm installed
PostgreSQL database configuration

### Server Setup

1.Clone the repository:

    git clone <repository-url>
    cd Canvas_App

2.Install server dependencies:

    cd server-side
    npm install

3.Configure the database:

Create a PostgreSQL database.
Update the database configuration in server/config/database.js.

4.Start the server:

    npm start

### Client Setup
1.Install client dependencies:

    cd client-side
    npm install

2.Start the React development server:

    npm start

### Usage

Open your browser and navigate to http://localhost:3000.
