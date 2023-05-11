import { signIn } from 'next-auth/react';

import { Auth } from 'chatbot-ui-core';

export const authjsSignIn: Auth['signIn'] = async () => {
  return await signIn();
};
