# RecipeAI

RecipeAI is a web application that generates unique recipes based on user input ingredients. The application utilizes the OpenAI API to create these recipes and allows users to save their favorite creations to a "My Recipes" page. Built using Node.js, React, MongoDB, Express, Material-UI, CSS/HTML, and Webpack, this app is both visually appealing and user-friendly.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- Generate unique recipes based on user input ingredients using OpenAI API
- Save generated recipes to "My Recipes" page
- Search and filter saved recipes
- Intuitive user interface built with Material-UI
- Responsive design for mobile and desktop

## Getting Started

Follow these steps to set up and run the RecipeAI application on your local machine.

### Prerequisites

Before you get started, you'll need the following tools installed on your system:

- Node.js (v14 or higher)
- npm (v7 or higher)
- MongoDB (v4.4 or higher)

### Installation

1. Clone the repository:
### git clone https://github.com/yourusername/RecipeAI.git
2. Change the current directory to the project root:
### cd RecipeAI
3. Install the required dependencies:
 ### npm install
 Set up your environment variables by creating a `.env` file in the root directory. Replace `<YOUR_OPENAI_API_KEY>` with your OpenAI API key:
### OPENAI_API_KEY=<YOUR_OPENAI_API_KEY>
MONGO_URI=mongodb://localhost:27017/recipeai
PORT=3000
5. Build the React app using Webpack:
### npm run build

### Running the App

1. Start the server by running the following command in the project root directory:
### npm start
2. Open your browser and navigate to `http://localhost:3000`.

Now you can use RecipeAI to generate and save unique recipes!

## Tech Stack

- [Node.js](https://nodejs.org/)
- [React](https://reactjs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
- [Material-UI](https://mui.com/)
- [OpenAI API](https://beta.openai.com/)
- [Webpack](https://webpack.js.org/)

## Contributing

We welcome contributions to the project! To get started, follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


