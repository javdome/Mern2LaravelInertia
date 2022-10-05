<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\WorkoutController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [WorkoutController::class,'index'])->middleware('auth')->name('workouts.index');

require __DIR__.'/auth.php';

Route::resource('workouts', WorkoutController::class)
    ->only(['store', 'destroy'])
    ->middleware(['auth']);
