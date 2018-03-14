<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Statistics;

class StatisticsController extends Controller
{
    public function index()
    {
        return Statistics::all();
    }
}
