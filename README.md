# Cloud Project - i210879 & i210783

This is a full-stack cloud-based project featuring a frontend and backend, with integration to AWS services like S3 for file uploads, and a database (RDS or DynamoDB). This project is designed to demonstrate modern web application architecture and cloud-based deployment.

## Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [File Structure](#file-structure)
- [License](#license)

## Project Overview

The project consists of two main parts:
- **Frontend**: A React application where users can interact with the application, view data, and perform CRUD operations.
- **Backend**: A Node.js (Express) backend that handles API requests, user authentication, and integrates with AWS services like S3 for file storage and RDS/DynamoDB for database management.

## Tech Stack

- **Frontend**: React, Axios, React Router
- **Backend**: Node.js, Express, JWT Authentication
- **Database**: PostgreSQL (RDS) or DynamoDB
- **Cloud Storage**: AWS S3 for file uploads
- **Version Control**: Git, GitHub

## Setup Instructions

Follow the steps below to get this project up and running locally.

### Prerequisites
- Install **Node.js** and **npm** (Node Package Manager).
- Install **PostgreSQL** (if using RDS locally) or configure DynamoDB for the backend.
- Ensure you have an **AWS account** and access to **S3** and **RDS/DynamoDB**.

### 1. Clone the repository

### 2. Run

- backend: node server.js
- frontend: npm start

```bash
git clone https://github.com/alishban18/cloud-project.git
cd cloud-project
