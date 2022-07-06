import { NextResponse, NextRequest, NextFetchEvent } from "next/server";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { pathname } = req.nextUrl;

  if (pathname === "/") return;

  const ORIGIN = new URL(req.nextUrl).origin;
  const CURATED_PATHNAME = pathname.replace("/", "");

  const IS_VALID_IDENTIFIER = parseInt(CURATED_PATHNAME) <= 3333;

  if (!IS_VALID_IDENTIFIER) return;

  if (IS_VALID_IDENTIFIER) {
    return NextResponse.redirect(ORIGIN, 303).cookie(
      "CYBERAPE_SEARCH_IDENTIFIER",
      CURATED_PATHNAME
    );
  }

  return NextResponse.next();
}
