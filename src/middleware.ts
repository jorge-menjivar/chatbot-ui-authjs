import { withAuth } from 'next-auth/middleware';

const getSecret = () => {
  if (process.env.NEXT_PUBLIC_AUTH_ENABLED) {
    return process.env.NEXTAUTH_SECRET || '';
  } else {
    return 'no_secret';
  }
};

export default withAuth({
  callbacks: {
    async authorized({ token }) {
      if ((process.env.NEXT_PUBLIC_AUTH_ENABLED == 'true') === false) {
        return true;
      }
      if (!token?.email) {
        return false;
      } else {
        const pattern = process.env.NEXTAUTH_EMAIL_PATTERN || '';
        if (!pattern || token?.email?.match('^' + pattern + '$')) {
          return true;
        }

        return false;
      }
    },
  },
  secret: getSecret(),
});
