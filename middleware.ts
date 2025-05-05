// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// const isProtectedRoute = createRouteMatcher([
//   "/",
// ]);

// export default clerkMiddleware((auth, req) => {
//     if (isProtectedRoute(req)) {
        
//         console.log("req",isProtectedRoute(req),auth);
//     auth.protect();
//   }
// //   return NextResponse.next();
// });

// export const config = {
//     matcher: [
//         // Skip Next.js internals and all static files, unless found in search params
//         '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//         // Always run for API routes
//         '/(api|trpc)(.*)',
//       ],
// };



import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

// export default authMiddleware({
//   publicRoutes: ['/', '/sign-up','sign-in'],
// });

export const config = {
  matcher: ['/', '/sign-up', '/notes'],
};