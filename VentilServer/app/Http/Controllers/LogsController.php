<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Logs;

class LogsController extends Controller
{
    public function getLogs(Request $request)
    {
        $req = $request->all();
        
        $ret = Logs::where('created_at', '>', $req['updated_at'])->get();
        return $ret;
    }
}
