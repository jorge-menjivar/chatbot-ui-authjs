import { Auth } from "chatbot-ui-core";
import { getCsrfToken } from "next-auth/react";

export const authjsGetCsrfToken: Auth["getCsrfToken"] = async () => {
  const token = await getCsrfToken();
  return token;
};
