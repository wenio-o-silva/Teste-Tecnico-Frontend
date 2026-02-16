import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('axion_token')?.value;

  //URL que o usuário está tentando acessar
  const { pathname } = request.nextUrl;

  const protectedRoutes = ['/people', '/food', '/places'];

  //Se tentar acessar rota protegida SEM token, redireciona pro Login
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!token) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  //Se já estiver logado, redireciona pro Dashboard
  if (pathname === '/' && token) {
    return NextResponse.redirect(new URL('/people', request.url));
  }

  return NextResponse.next();
}

//Rotas vigiadas pelo middleware
export const config = {
  matcher: ['/', '/people/:path*', '/food/:path*', '/places/:path*'],
};