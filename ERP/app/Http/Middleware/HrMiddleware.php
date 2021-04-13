<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class HrMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if($request->session()->get('user_type') == "hr_manager")
        {
            return $next($request);
        }
        else
        {
            $request->session()->flash('msg','Invalid req ... at first logged in as an HR manager!');
            return redirect('/login');
        }
    }
}
