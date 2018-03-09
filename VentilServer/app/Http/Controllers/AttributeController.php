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
        foreach($request->all() as $value) {
            $attribute = Attributes::where("variable", $value['variable'])->first();
            $attribute->value = $value['value'];
            $attribute->save();
        }
      return response()->json('Dáta boli uložené', 200);   
  }
}
