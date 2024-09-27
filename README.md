# Node.js OS Info Logger with Promises and Async/Await

This project demonstrates how to use Node.js built-in modules (`os`, `path`, `fs`) and the `dotenv` package to read operating system information and write it to a file. The file path and file name are defined through environment variables stored in a `.env` file. The project also includes a simple example of how to manage asynchronous JavaScript code using Promises and `async/await` to produce specific output order in console logging.

## Features
- **Read OS Information**: Gathers details like OS type, platform, architecture, hostname, free memory, CPUs, etc.
- **Write to a File**: The OS information is written to a file whose path and name are stored in environment variables.
- **Environment Configuration**: Uses a `.env` file for configuring the file path and extension for saving the OS information.
- **Asynchronous Execution**: Demonstrates usage of Promises and `async/await` to manage asynchronous tasks and delay execution.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed on your system.
- **npm**: Node Package Manager should be available to install dependencies.

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME

### Install Dependencies:
npm install

### Run Program:
node index.js

### Customization:
1. Replace `YOUR_USERNAME/YOUR_REPO_NAME` with your GitHub username and repository name.
2. Ensure the `.env` configuration matches your project structure.
3. Add additional environment variables or features if you extend the project functionality. 

This `README.md` will guide users through the installation, setup, and usage of your Node.js project.
