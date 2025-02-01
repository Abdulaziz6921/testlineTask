Project Overview
This project is a web-based quiz application built using React.js with Vite as the build tool and Tailwind CSS for styling. The application fetches quiz data from a provided API endpoint and displays it in an interactive and engaging user interface. If the API fails, the application gracefully falls back to mock data to ensure a seamless user experience.

Key Features:
Start Quiz: Users can begin the quiz with a single click.

Multiple-Choice Questions: Displays questions with multiple-choice answers.

Results Summary: Shows a summary of the user's performance, including total points scored.

Technologies Used
React.js: A JavaScript library for building user interfaces.

Vite: A fast build tool for modern web development.

Tailwind CSS: A utility-first CSS framework for rapid UI development.

Axios: For making HTTP requests to fetch quiz data.

API Integration
The quiz data is fetched from the following API endpoint:
https://api.jsonserve.com/Uw5CrX

Error Handling:
If the API fails to fetch data, the application automatically switches to mock data to ensure uninterrupted functionality.

Installation and Setup
Follow these steps to set up and run the project locally:

Clone the Repository:
git clone https://github.com/Abdulaziz6921/testlineTask.git
cd testlineTask

Install Dependencies:
npm install

Run the Development Server:
npm run dev

Project Structure
Project/
├── src/
│ ├── components/ # Reusable UI components
│ ├── App.jsx # Main application component
│ ├── main.jsx # Entry point
├── tailwind.config.js # Tailwind CSS configuration
├── vite.config.js # Vite configuration
├── README.md # Project documentation

Video Walkthrough:
https://youtu.be/RKshQ9fZSpw
