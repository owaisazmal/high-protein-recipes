# High Protein Food Finder

**High Protein Food Finder** is a web application that helps users discover high-protein recipes. The app uses [API Ninjas' Recipe API](https://api-ninjas.com/api/recipe) to fetch recipes based on randomly selected high-protein foods, providing a new recipe every time the user clicks the button. The user interface is enhanced with animations powered by [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/).

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Demo
Check out a live demo [here](https://owaisazmal.github.io/high-protein-recipes/).

## Features
- Fetches and displays a random high-protein recipe each time the button is clicked.
- Uses **API Ninjas' Recipe API** to dynamically retrieve recipes based on high-protein ingredients.
- Animated interface using **GSAP** for smooth and engaging user interactions:
  - Button animation on load and hover.
  - Typewriter effect for the header title.
- Colorful animated gradient background created with CSS for visual appeal.

## Technologies Used
- **HTML**: For the basic structure of the web app.
- **CSS**: For styling and creating the animated gradient background.
- **JavaScript**: For fetching recipes from the API and controlling GSAP animations.
- **GSAP (GreenSock Animation Platform)**: For interactive animations on the button and header.
- **API Ninjas**: Provides recipe data through their Recipe API.

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/owaisazmal/high-protein-recipes.git
    cd high-protein-recipes
    ```
2. Open `index.html` in your browser to view the app.

## Usage
1. Click the **"Get a High-Protein Food"** button to fetch a random recipe.
2. The app will display the recipe title, ingredients, and instructions.
3. Each click provides a different recipe from a random high-protein ingredient.

## Code Overview
- **API Integration**: The JavaScript function `getHighProteinFood()` selects a random ingredient from a predefined list of high-protein foods and queries the API for recipes based on that ingredient.
- **GSAP Animations**:
  - **Button**: Scales in with a bounce on page load, and scales slightly on hover.
  - **Header**: Uses GSAP's TextPlugin for a typewriter effect and color transition.

### Example Code Snippets
- **Random Query Selection**:
    ```javascript
    const highProteinQueries = ["chicken", "eggs", "tofu", "salmon", "lentils", "beef"];
    const randomQuery = highProteinQueries[Math.floor(Math.random() * highProteinQueries.length)];
    ```
- **GSAP Button Animation**:
    ```javascript
    gsap.from("button", { duration: 1, scale: 0.8, ease: "elastic.out(1, 0.3)" });
    ```

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
