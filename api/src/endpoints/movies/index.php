<?php
use \Psr\Http\Message\ResponseInterface as Response;
use \Psr\Http\Message\ServerRequestInterface as Request;

require_once __DIR__ . "/../../infrastructure/tmdb/upcoming.php";

function movies(Request $request, Response $response)
{
    $upcoming_data = upcoming([
        "page" => $request->getQueryParam("page"),
    ]);
    $data = json_decode($upcoming_data, true);
    return $response->
        withStatus(200)->
        withHeader('Content-Type', 'application/json')->
        withJson($data);
};
