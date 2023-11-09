# University-API-Project

# Random Universities Search

This simple web application allows users to search for universities based on the country entered. It retrieves data from an external API and dynamically displays a list of universities on the web page.

## Overview

The application consists of an HTML file and JavaScript code that work together to facilitate university searches and display the results.

### Files Included:

- `index.html`: Contains the basic structure of the web page, including an input field for entering a country and a button to trigger the search. It also displays the list of universities found.
- `RandomUniversities.js`: The JavaScript file responsible for handling user input, making requests to an external API, and rendering the retrieved university data on the HTML page.

## How it Works

1. **User Input**: Upon loading the webpage, users are presented with an input field prompting them to enter a country name.
2. **Search Button**: After entering a country name, users can click the "Search" button to trigger the search for universities in the specified country.
3. **Data Retrieval**: When the button is clicked, the JavaScript code fetches university data from an external API (`http://universities.hipolabs.com`) using the Axios library.
4. **Data Display**: Once the data is retrieved, the application dynamically generates a list of universities found in the specified country and displays them on the web page.

## Setup Instructions

To run this application locally, follow these steps:

1. **Clone the Repository**: Clone or download the repository to your local machine.
2. **Open `index.html`**: Open the `index.html` file in a web browser.
3. **Enter Country Name**: Enter the name of the country in the provided input field.
4. **Search for Universities**: Click the "Search" button to trigger the search for universities in the specified country.
5. **View Results**: The list of universities found in the entered country will be displayed on the webpage.

## External Libraries Used

- **Axios**: A promise-based HTTP client used to make requests to the university data API (`http://universities.hipolabs.com`).

## Note

- This application might encounter errors if the API server is down or if there are network issues. In such cases, it will display an error message on the console.

Feel free to explore, modify, and enhance this basic application as needed!
