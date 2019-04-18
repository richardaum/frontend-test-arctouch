<?php
use \Psr\Http\Message\ResponseInterface as Response;
use \Psr\Http\Message\ServerRequestInterface as Request;

require_once __DIR__ . "/../../infrastructure/tmdb/movie.php";

function movieDetails(Request $request, Response $response, array $args)
{
    $data = movie([
        "movie_id" => $args["id"],
    ]);
    return $response->
        withStatus(200)->
        withHeader('Content-Type', 'application/json')->
        write($data);
};
