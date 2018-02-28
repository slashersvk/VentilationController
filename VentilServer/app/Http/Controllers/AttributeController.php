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

  public function update(Request $request)
  {
        foreach($request->all() as $key => $value) {
            $attr = Attributes::where("variable", $key)->first();
            $attr->value = $value;
            $attr->save();
        }
      return response()->json("OK", 200);
  }
}
