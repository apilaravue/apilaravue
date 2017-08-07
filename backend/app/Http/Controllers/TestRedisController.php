<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use LRedis;

class TestRedisController extends Controller
{
    protected $redis;

    function __construct()
    {
        $this->redis = LRedis::connection();
    }

    public function testRedis($data){
    	$redis = LRedis::connection();
    	$redis->publish('message', $data);
    	return 'coll';
    }
}
