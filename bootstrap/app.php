<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful;

return Application::configure(basePath: dirname(__DIR__))
  ->withRouting(
    web: __DIR__ . '/../routes/web.php',
    commands: __DIR__ . '/../routes/console.php',
    health: '/up',
  )
  ->withMiddleware(function (Middleware $middleware) {
    // Web Middleware
    $middleware->web(append: [
      \App\Http\Middleware\HandleInertiaRequests::class,
      \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
    ]);

    // API Middleware (CSRF is NOT needed for API requests)
    // $middleware->group('api', [
    //   EnsureFrontendRequestsAreStateful::class, // Required for Sanctum authentication
    //   'throttle:api', // API rate limiting
    //   'bindings', // Route model binding
    // ]);
  })
  ->withExceptions(function (Exceptions $exceptions) {
    //
  })->create();
