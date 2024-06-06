import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { parse } from "cookie";
const beforeLoginPath = ["/"];
const afterLoginPath = ["/profile/:path*", "/dashboard/:path*"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Function to check if the current path is in a given path list
  const isPathInList = (pathList: string[], currentPath: string) => {
    return pathList.some((path) => {
      if (path === "/") {
        return currentPath === "/";
      }
      const pathSegments = path.split("/").filter(Boolean);
      const currentPathSegments = currentPath.split("/").filter(Boolean);

      return pathSegments.every((segment, index) => {
        return segment === currentPathSegments[index] || segment === ":path*";
      });
    });
  };

  const isBeforeLoginPage = isPathInList(beforeLoginPath, pathname);
  const isAfterLoginPage = isPathInList(afterLoginPath, pathname);

  const cookies = parse(request.headers.get("cookie") || "");
  const token = cookies.login;

  if (isBeforeLoginPage && token) {
    // User is logged in and trying to access a before login page
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (isAfterLoginPage && !token) {
    // User is not logged in and trying to access an after login page
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    //before login
    "/",

    //after login
    "/profile/:path*",
    "/dashboard/:path*",
  ],
};
