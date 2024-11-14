async function getHighProteinFood() {
    const resultElement = document.getElementById('result');
    resultElement.textContent = "Searching for high-protein food...";
    // List of high-protein foods as possible search queries for variety
    const highProteinQueries = ["chicken", "eggs", "tofu", "salmon", "lentils", "beef"];
    const randomQuery = highProteinQueries[Math.floor(Math.random() * highProteinQueries.length)]; // Pick a random food item from the list to use as the search term
    try {
        // Used api-ninjas.com recipe API with an API key for authentication and sends a request with the selected ingredient as a query.
        const apiKey = 'htuolvzS1nrPStYFSg1RQg==xU496tJxbGDGq1Ww';
        const apiUrl = `https://api.api-ninjas.com/v1/recipe?query=${encodeURIComponent(randomQuery)}`;

        const response = await fetch(apiUrl, {
            headers: { 'X-Api-Key': apiKey }
        });
        // If the API request fails, it throws an error with the response status and displays "Error fetching data" in the result div.
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

         // If no recipes were found, let the user know and stop further execution
        if (data.length === 0) {
            resultElement.textContent = "No high-protein food found.";
            return;
        }

        // Store the first recipe in the data array to display
        //https://stackoverflow.com/questions/59922251/how-to-add-an-object-to-an-array-using-data-from-user-input
        const recipe = data[0];
        const ingredients = Array.isArray(recipe.ingredients) 
            ? recipe.ingredients.join(', ') 
            : recipe.ingredients || "Ingredients not listed";
        // Create the HTML structure for displaying the recipe title, ingredients, and instructions
        //https://dev.to/pinjarirehan/how-to-create-a-recipe-book-using-html-css-javascript-2bap
        resultElement.innerHTML = `
            <h2>${recipe.title}</h2>
            <p><strong>Ingredients:</strong> ${ingredients}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
        `;
    } catch (error) {

        // Display an error message if the API request fails
        resultElement.textContent = "Error fetching teh data. Please try again later.";
        console.error("Error:", error); // Log the error to the console for debugging purposes
    }
}
window.onload = () => {
    // Initial animation for the button to scale it up slightly when the page loads
    //https://gsap.com/docs/v3/GSAP/Tween/vars/#duration
    gsap.from("button", {
        duration: 1,
        scale: 0.8,
        ease: "elastic.out(1, 0.3)" // Elastic easing to make it bounce
    });

    const button = document.querySelector("button");
    // Scale up the button slightly on hover
    button.addEventListener("mouseenter", () => {
        gsap.to(button, { scale: 1.05, duration: 0.2 });
    });

    button.addEventListener("mouseleave", () => {
        gsap.to(button, { scale: 1, duration: 0.2 });
    });

    // New typewriter and color fade-in animation for "High Protein Food Finder"
    const titleText = document.querySelector("h1");
    const text = titleText.innerText; // To Store the original text

    titleText.innerText = ""; // Clear text for typewriter effect
    

    // Used GSAP's TextPlugin to animate each character as if typing it out
    gsap.to(titleText, {
        text: text,
        duration: 2,
        ease: "power2.inOut",
        delay: 0.5,
    });
    
    // Change the color of the header text from pink to dark gray over 2 seconds
    gsap.fromTo(titleText, 
        { color: "#ff65a3" }, // Start color
        { color: "#333", duration: 2, delay: 0.5, ease: "power2.inOut" } // End color
    );
};

