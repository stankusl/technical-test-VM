# Angular Technical Virgin Media

Build a simple working weather web application built using the latest version Angular +, strict mode +, implementing the following:

* Utilise an open weather API to retrieve current weather forecasts for a given location. Examples of APIs: https://www.metaweather.com/api/ or https://openweathermap.org/ +
* The app should allow users to search for a valid location using a city name and optionally the country. +
* Show the current weather, and a 5 day forecast + 
* Ability to sort the forecast by date desc or asc. +
* Utilise NGRX as a central store. There should be examples of actions, effects, selectors (queries), and reducers. +
* Handle range of  errors, including but not limited to invalid city searches, API gone down +
* Build in a clear modular / component driven structure. +
* These features must be extendable / reusable so that in future we can reuse the code to support other weather sources ?
* Have a sufficient code lint and test suite in place. + lint passes, unit test coverage ~50%
* Dockerize this project +
* Bonus: Create a feature to be able to compare different locations + and highlight the warmest location on each day.
 

Feel free to use any additional libraries to help you with visual components or logic but list the libraries used and reasons why.
* used bootstrap 5 for styling 

## Docker Installation instructions

* run command `docker build -t weather-app-image .`
* run command `docker run --name weather-app-container -d -p 8080:80 weather-app-image`
 
### Please share your submission in github to jennymgray, roAlavi and AdamJessop
