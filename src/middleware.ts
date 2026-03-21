import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname, search, searchParams } = request.nextUrl;

  // ============================================================
  // 1. Tangkap URL rusak Blogger: /?m=1p/... /?m=1search/... dll
  //    Ini terjadi karena Blogger menggabungkan ?m=1 dengan path
  // ============================================================
  if (search.includes('?m=1') || search.startsWith('?m=1')) {
    const url = request.nextUrl.clone();
    url.search = '';
    return NextResponse.redirect(url, { status: 301 });
  }

  // ============================================================
  // 2. Redirect ?m=1 dan semua query string mobile Blogger
  // ============================================================
  if (searchParams.has('m')) {
    const url = request.nextUrl.clone();
    url.search = '';
    return NextResponse.redirect(url, { status: 301 });
  }

  // ============================================================
  // 3. Redirect feeds Blogger (termasuk URL rusak yang mengandung feeds)
  // ============================================================
  if (
    pathname.startsWith('/feeds/') ||
    search.includes('feeds/posts') ||
    search.includes('alt=rss') ||
    search.includes('alt%3Drss')
  ) {
    return NextResponse.redirect(new URL('/', request.url), { status: 301 });
  }

  // ============================================================
  // 4. Redirect sitemap.html Blogger → sitemap Next.js
  // ============================================================
  if (pathname === '/p/sitemap.html' || search.includes('sitemap.html')) {
    return NextResponse.redirect(new URL('/sitemap.xml', request.url), { status: 301 });
  }

  // ============================================================
  // 5. Redirect label/search Blogger
  // ============================================================
  if (pathname.startsWith('/search/label/') || search.includes('search/label')) {
    return NextResponse.redirect(new URL('/', request.url), { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|images/).*)',
  ],
};
