<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

     /**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */
    public function success($message, $data=[])
    {
        return response()->json([
            'success' => true,
            'message' => $message,
            'data'    => $data,
        ], 200);
    }

    public function ok($data=[])
    {
        return response()->json([
            'success' => true,
            'data'    => $data,
        ], 200);
    }


    /**
     * return error response.
     *
     * @return \Illuminate\Http\Response
     */
    public function error($message, $code = 400)
    {
        return response()->json([
            'success' => true,
            'message' => $message,
        ], $code);
    }
}
