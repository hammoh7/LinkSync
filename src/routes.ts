/*
 Array of routes accessible to public 
 No authentication required
*/
export const publicRoutes = ["/"];

/*
 Array of routes accessible to authenticated users
 Authentication required
*/

export const authRoutes = ["/login", "/register", "/error"];

/* 
 Prefix for API authentication routes
 Routes that start with this prefix are used for authentication
*/
export const apiAuthPrefix = "/api/auth";

// Default Login path

export const DEFAULT_REDIRECT = "/profile";
