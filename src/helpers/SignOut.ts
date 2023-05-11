import { Auth } from "chatbot-ui-core";
import { signOut } from "next-auth/react";

export const authjsSignOut: Auth["signOut"] = async () => {
  return await signOut();
};
