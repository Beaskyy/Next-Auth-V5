/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */

export const publicRoutes = ["/",];

/**
 * An array of routes that require authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */

export const authRoutes = ["/auth/login", "/auth/register"];

/**
 * The prefix for API authentication routes
 * Routes that starts with this prefix are used for API authentication purposes.
 * @type {string}
 */

export const apiAutPrefix = "/api/auth";

/**
 * The default redirect path after login
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings"
