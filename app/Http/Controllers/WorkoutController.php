<?php

namespace App\Http\Controllers;

use App\Models\Workout;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class WorkoutController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        // return Auth::user();

        // $workouts = Workout::with('user:id,name')->get();
        // $workouts = Auth::user()->workouts()->with('user:id,name')->get();
        
        $workouts = Auth::user()->workouts()->get();

        return Inertia::render('Workouts/Index', [
            'workouts' => $workouts,
        ]);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'load' => 'integer',
            'reps'  => 'integer'
        ]);

        // return $request;
 
        $request->user()->workouts()->create($validated);
 
        return redirect(route('workouts.index'));
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Workout  $workout
     * @return \Illuminate\Http\Response
     */
    public function destroy(Workout $workout)
    {
        if ($workout->user()->is(Auth::user())){
            $workout->delete();
        };
 
        return redirect(route('workouts.index'));
    }
}
