# Movie Hub

This React Native app allows users to search for movies and read their descriptions and ratings. It provides a simple and intuitive interface for movie enthusiasts to discover information about their favorite films.

## Features

- Search Movies: Enter the name of a movie in the search bar to retrieve relevant results.
- Movie Details: View detailed information about each movie, including its description, ratings, and other relevant data.


## Installation

To run the Movie Search and Ratings app locally on your machine, follow these steps:

1. Clone the repository to your local machine:

   ```shell
   git clone https://github.com/yourusername/movie-search-app.git
   ```

2. Navigate to the project directory:

   ```shell
   cd movie-search-app
   ```

3. Install the required dependencies using npm or yarn:

   ```shell
   npm install
   ```

   or

   ```shell
   yarn install
   ```

4. Obtain an API key from the [OMDB API](https://www.omdbapi.com/) and add it to the constants.js file
   ```shell
   export const REACT_APP_OMDB_API_KEY = "YOUR_API_KEY_HERE";
   ```

5. Start the app in development mode:

   ```shell
   npm start
   ```

   or

   ```shell
   yarn start
   ```

6. Connect your device or emulator and launch the app:

   - For iOS:

     ```shell
     npx react-native run-ios
     ```

   - For Android:

     ```shell
     npx react-native run-android
     ```

   Ensure that you have set up your development environment properly for React Native.
