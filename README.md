# Fullstack project - Arctouch

## Instructions for running
You can use `docker-compose` to run this project:

```
docker-compose up
```

Take a look in `stdout`, it will display which IP you should use to have access to the application.

## Architecture 
This code is separated into two parts: a PHP + Apache2 back-end and a React front-end, both inside this same repository as a "monorepo".

### Back-end
Here we are calling TMDB endpoints throught the `TmdbApi` class. All used endpoints are located under the endpoints folder. `dotenv` is being used to keep the API token safe and sound. Composer is taking care of the back-end dependencies. At the end of the day, this back-end is like a proxy of some endpoints of the TMDB api.

- Dependencies list
  - Composer: dependency manager
  - Slim: micro-framework for better routing
  - Guzzle: handle request to the TBM api

### Front-end
A similar approach is being used here, but instead of endpoints there are features which basically groups files that make sense together. MobX is being used as a app state management. Material UI library is also being used as a base style for our UX.

- Dependencies list
  - React: DOM rendering
  - MobX: app state management
  - Axios: handle request to the local api
  - Material UI: style library
  - Webpack/Babel: bundler and transpiler

### Assumptions
- Since we would need to display more than 20 movies, we use a more fluid pagination throught a infinite list.
- Using the first upcoming movie as a banner looks cool as UX experience.