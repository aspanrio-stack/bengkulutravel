import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Redirect semua URL yang mengandung ?m=1 (versi mobile Blogger)
  if (searchParams.has('m')) {
    const url = request.nextUrl.clone();
    url.search = ''; // hapus semua query string
    return NextResponse.redirect(url, { status: 301 });
  }

  // Redirect feeds Blogger
  if (pathname.startsWith('/feeds/')) {
    return NextResponse.redirect(new URL('/', request.url), { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Jalankan middleware untuk semua path kecuali _next dan static files
    '/((?!_next/static|_next/image|favicon.ico|images/).*)',
  ],
};
