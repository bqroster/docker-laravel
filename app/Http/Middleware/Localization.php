<?php

namespace App\Http\Middleware;

use Closure;

class Localization
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if( $this->isNewLocaleSet($request) ) {
            \App::setlocale( $request->get('language') );
        }

        return $next($request);
    }

    /**
     * @param  \Illuminate\Http\Request  $request
     * @return bool
     */
    protected function isNewLocaleSet($request)
    {
        // query param `language` exists
        // query param `language` is not null
        // `language` is not the current selected
        return (
            $request->has('language') &&
            !is_null($language = $request->get('language')) &&
            !\App::isLocale($language)
        );
    }
}
