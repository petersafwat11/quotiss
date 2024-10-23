import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone(); // Clone the current URL

  // Bypass middleware for static files and Next.js internal assets
  if (
    request.nextUrl.pathname.startsWith("/_next/") ||
    request.nextUrl.pathname.startsWith("/static/")
  ) {
    return NextResponse.next();
  }

  // Get the user cookie, if exists
  let user = request.cookies.get("user")?.value;

  try {
    user = user && JSON.parse(user);
  } catch (error) {
    console.error("Error parsing user cookie:", error);
    user = null;
  }

  if (request.nextUrl.pathname !== "/login" && !user) {
    console.log("User not signed in. Redirecting to login.");
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  if (request.nextUrl.pathname.startsWith("/login") && user) {
    console.log("User already signed in. Redirecting to home.");
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
