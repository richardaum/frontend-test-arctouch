<?php
use \Psr\Http\Message\ResponseInterface as Response;
use \Psr\Http\Message\ServerRequestInterface as Request;

function movieSearch(Request $request, Response $response, array $args)
{
    $query = $request->getQueryParam("query");

    if ($query === null) {
        $payload = array("code" => 401, "message" => "Missing parameter: query");
        return $response->
            withStatus(400)->
            withJson($payload);
    } else {
        $api = new TmbdiApi();
        $data = $api->search_movie([
            "page" => $request->getQueryParam("page"),
            "query" => $query,
        ]);
        return $response->
            withStatus(200)->
            withHeader('Content-Type', 'application/json')->
            write($data);
    }
};
