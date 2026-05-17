# Week 3 Assignments

This repository contains the assignments for Week 3 of the training program.

## 🎯 Learning Objectives
The primary focus of this week is on building robust backend services. By completing these tasks, you will:
- Understand how to initialize and configure a Node.js project using npm.
- Build RESTful APIs using the Express.js framework.
- Handle HTTP requests and responses appropriately.
- Structure backend code by separating server logic from API route handlers.
- Test API endpoints using HTTP request files.



### Specific Assignments Breakdown:
- **`productserver.js`**: The main entry point for the server application. Responsible for bootstrapping the Express app and starting the server on a specified port.
- **`productAPI.js`**: Contains the route definitions and controller logic (GET, POST, PUT, DELETE) for managing product resources.
- **`product.http`**: An HTTP request configuration file used to manually test and verify the API endpoints (e.g., using the VS Code REST Client extension).
- **`package.json` & `package-lock.json`**: Dependency management files containing project scripts and required modules like `express`.

## 🚀 How to Run
1. Navigate to the `week-3` directory in your terminal.
2. Install the required Node.js dependencies:
   ```bash
   npm install
   ```
3. Start the Express server:
   ```bash
   node productserver.js
   ```
4. Use the `product.http` file or a tool like Postman to test the running API.
