<?php
use \Psr\Http\Message\ResponseInterface as Response;
use \Psr\Http\Message\ServerRequestInterface as Request;

function movieGenres(Request $request, Response $response, array $args)
{
    $api = new TmbdiApi();
    $data = $api->get_movie_genres();
    return $response->
        withStatus(200)->
        withHeader('Content-Type', 'application/json')->
        write($data);
};
