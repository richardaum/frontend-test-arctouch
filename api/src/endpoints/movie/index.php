<?php
use \Psr\Http\Message\ResponseInterface as Response;
use \Psr\Http\Message\ServerRequestInterface as Request;

function movieDetails(Request $request, Response $response, array $args)
{
    $api = new TmbdiApi();
    $data = $api->get_movie([
        "movie_id" => $args["id"],
    ]);
    return $response->
        withStatus(200)->
        withHeader('Content-Type', 'application/json')->
        write($data);
};
