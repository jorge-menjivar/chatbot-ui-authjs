import { getSession, useSession } from 'next-auth/react';

import { Session, User } from 'chatbot-ui-core/types/auth';

import { Auth } from 'chatbot-ui-core';

export const useCustomSession = getSession;

const authjsGetClientSession: Auth['getSession'] = async () => {
  const authjsSession = await getSession();

  if (authjsSession) {
    let user: User | undefined = undefined;
    if (authjsSession.user) {
      user = {
        email: authjsSession?.user?.email,
        name: authjsSession?.user?.name,
        image: authjsSession?.user?.image,
      };
    }

    const session: Session = {
      user: user,
      expires: authjsSession.expires,
    };

    return session;
  }

  return null;
};

const authjsUseSession: Auth['useSession'] = async () => {
  const { data: authjsSession, status } = useSession();

  let session: Session | null = null;
  if (authjsSession) {
    let user: User | undefined = undefined;
    if (authjsSession.user) {
      user = {
        email: authjsSession?.user?.email,
        name: authjsSession?.user?.name,
        image: authjsSession?.user?.image,
      };
    }

    session = {
      user: user,
      expires: authjsSession.expires,
    };
  }
  return { session: session, status: status };
};

export { authjsUseSession as useSession, authjsGetClientSession as getSession };
