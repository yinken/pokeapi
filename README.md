# PokeAPI
A coding challenge created by Martin Senne for Architrave

## Live Version
Available at https://wonderful-joliot-4d4121.netlify.com/

## Installation
Please run `npm install` and `npm run serve` to start the development server. It will be available on `http://localhost:8080` 

## Packages
- VueJS as Framework
- Bulma CSS for styling and grid layout
- Webpack for asset bundling
- Babel for JavaScript transpiling

## Description
- The project loads a list of 100 Pokemon from the PokeAPI (https://pokeapi.co/) and displays them in a grid with an image and some details
- Clicking on 'Get details' will load some flavor text and display the evolution matrix for said Pokemon
- Hovering over one of these evolutions with the mouse will load more detailed information, along with an image underneath the evolution grid
- It is possible to click on the name of an evolution to bring up a secondary view for the chosen Pokemon
- In theory, it should also be possible to visit the url `http://localhost:8080/pokemon/${pokemonName}` to brind up the details for that specific Pokemeon
  - This works exactly once, then it bugs out... unfortunately, I ran out of time trying to fix this :(

## CSS adjustments
- We are making only small adjusments to the styles provided by Bulma, to make the pokemon grid and subsequent layouts behave the way we want to. This is done using SASS, the styles are located in the applicable components.