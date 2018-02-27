<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Attributes;

class AttributeController extends Controller
{
  public function index()
  {
      return Attributes::all();
  }

  public function update(Request $request, Attributes $article)
  {
      $article->update($request->all());

      return response()->json($article, 200);
  }
}
