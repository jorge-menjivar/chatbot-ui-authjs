import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';

import { Session, User } from 'chatbot-ui-core/types/auth';

import { authOptions } from './api-handler';

import { Auth } from 'chatbot-ui-core';

export const authjsGetServerSession: Auth['getServerSession'] = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const authjsSession = await getServerSession(req, res, authOptions);

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

export { authjsGetServerSession as getServerSession };
