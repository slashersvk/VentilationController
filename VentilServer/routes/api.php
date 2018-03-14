<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', 'Auth\LoginController@login');
Route::post('/logout', 'Auth\LoginController@logout');

Route::get('/attributes', 'AttributeController@index')->middleware('auth:api');
//Route::get('attributes/{article}', 'ArticleController@show');
Route::post('/attributes', 'AttributeController@update')->middleware('auth:api');
Route::get('/statistics', 'StatisticsController@index')->middleware('auth:api');