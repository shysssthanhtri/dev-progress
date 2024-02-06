import withAuth from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: async ({ token }) => {
      return !!token;
    },
  },
});

// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
