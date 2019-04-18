<?php
require "../vendor/autoload.php";
require "../infrastructure/dotenv.php";
require "../endpoints/movies/index.php";
require "../endpoints/movie/index.php";
require "../endpoints/movie-search/index.php";
require "../infrastructure/tmdb/TmdbApi.php";

$app = new \Slim\App;
$app->group("/api", function () {
    $this->get("/movies", "movies");
    $this->get("/movie/search", "movieSearch");
    $this->get("/movie/{id}", "movieDetails");
});
$app->run();
