<?php
require "../vendor/autoload.php";
require "../infrastructure/dotenv.php";
require "../endpoints/movies/index.php";
require "../endpoints/movie/index.php";
require "../endpoints/movie-search/index.php";
require "../infrastructure/tmdb/TmdbApi.php";

$app = new \Slim\App;

// CORS
$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
        ->withHeader('Access-Control-Allow-Origin', '*')
        ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
        ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});

// API endpoints
$app->group("/api", function () {
    $this->get("/movies", "movies");
    $this->get("/movie/search", "movieSearch");
    $this->get("/movie/{id}", "movieDetails");
});
$app->run();
