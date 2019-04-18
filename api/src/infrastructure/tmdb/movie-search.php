<?php
require "../../vendor/autoload.php";
require_once "config.php";

function searchMovie($params)
{
    global $BASE_URL;

    $API_KEY = getenv("TMDB_API_KEY");
    $url = "$BASE_URL/search/movie";
    $client = new \GuzzleHttp\Client();
    return $client->request("GET", $url, [
        "query" => [
            "api_key" => $API_KEY,
            "language" => "en-US",
            "page" => $params["page"],
            "query" => $params["query"],
        ],
    ])->getBody();
}
