<?php
require '../../vendor/autoload.php';
require_once "config.php";

function movie($params)
{
    global $BASE_URL;

    $API_KEY = getenv('TMDB_API_KEY');
    $url = "$BASE_URL/movie/" . $params["movie_id"];
    $client = new \GuzzleHttp\Client();
    return $client->request("GET", $url, [
        "query" => [
            "api_key" => $API_KEY,
            "language" => "en-US",
        ],
    ])->getBody();
}
