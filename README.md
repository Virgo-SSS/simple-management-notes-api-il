# Notes Management API

A simple API for managing notes, built with Express.js.

## Features

- Create, read, update, and delete notes
- Lightweight and easy to set up
- RESTful API design

---

## Requirements

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Virgo-SSS/simple-management-notes-api-il.git
   cd simple-management-notes-api-il
   ```

2. Install the dependencies:

   ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

3. Create a MySQL database and run the SQL script in the `db.sql` file to create the `notes` table.

4. Create a `.env` file in the root directory of the project and add the following environment variables:

   ```env
    APP_PORT=your_app_port
    HOST=your_db_host
    USER=your_db_username
    PASSWORD=your_db_password
    DATABASE=your_database_name
   ```


5. Start the server:

   ```bash
   npm start
   ```
   or
   ```bash
    yarn start
   ```
    The server will start at `http://localhost:your_app_port`.
---



