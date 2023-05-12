import { withAuth } from 'next-auth/middleware';

import { AUTH_ENABLED } from 'chatbot-ui-core/utils/const';

const getSecret = () => {
  if (!AUTH_ENABLED) {
    return 'auth_not_enabled';
  } else {
    return process.env.NEXTAUTH_SECRET;
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
