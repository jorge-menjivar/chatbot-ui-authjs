import { SessionProvider } from 'next-auth/react';
import React from 'react';

import { authjsGetCsrfToken } from './helpers/CsrfToken';
import { authjsSignIn } from './helpers/SignIn';
import { authjsSignOut } from './helpers/SignOut';

export type { Session } from 'next-auth';

export {
  authjsGetCsrfToken as getCsrfToken,
  authjsSignIn as signIn,
  authjsSignOut as signOut,
};

export const AuthProvider: React.FC<{ session: any; children: any }> = ({
  session,
  children,
}: any) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
