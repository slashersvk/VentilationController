<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Controls;

class ControlsController extends Controller
{
  public function getControls()
  {
      return Controls::all();
  }

  public function update(Request $request)
  {
        foreach($request->all() as $value) {
            $attribute = Controls::where("variable", $value['variable'])->first();
            $attribute->value = $value['value'];
            $attribute->save();
        }
      return response()->json('Dáta boli uložené', 200);   
  }
}
