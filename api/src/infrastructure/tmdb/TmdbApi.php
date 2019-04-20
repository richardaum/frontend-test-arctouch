<?php

require "../../vendor/autoload.php";

use GuzzleHttp\Client as Guzzle;

class TmbdiApi
{
    private $token;
    private $baseUrl = "https://api.themoviedb.org/3";
    private $http;

    public function __construct()
    {
        $this->token = getenv("TMDB_API_KEY");
        $this->http = new Guzzle;
    }

    public function request($method, $path, $options = [])
    {
        return $this->http->request(
            $method,
            $this->baseUrl . $path,
            array_merge_recursive(
                [
                    "query" => [
                        "api_key" => $this->token,
                        "language" => "en-US",
                    ],
                ],
                $options
            )
        )->getBody();
    }

    public function get_upcoming_movies($params)
    {
        return $this->request("GET", "/movie/upcoming", [
            "query" => [
                "page" => $params["page"],
            ],
        ]);
    }

    public function get_movie($params)
    {
        return $this->request("GET", "/movie/" . $params["movie_id"]);
    }

    public function search_movie($params)
    {
        return $this->request("GET", "/search/movie", [
            "query" => [
                "page" => $params["page"],
                "query" => $params["query"],
            ],
        ]);
    }

    public function get_movie_genres()
    {
        // TODO cache this request since everybody will use it
        return $this->request("GET", "/genre/movie/list");
    }
}
