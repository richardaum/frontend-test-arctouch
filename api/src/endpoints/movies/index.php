<?php
use \Psr\Http\Message\ResponseInterface as Response;
use \Psr\Http\Message\ServerRequestInterface as Request;

function movies(Request $request, Response $response)
{
    $api = new TmbdiApi();
    $upcoming_data = $api->get_upcoming_movies([
        "page" => $request->getQueryParam("page"),
    ]);
    $data = json_decode($upcoming_data, true);
    return $response->
        withStatus(200)->
        withHeader('Content-Type', 'application/json')->
        withJson($data);
};
