import NextAuth, { NextAuthOptions } from 'next-auth';
import AppleProvider from 'next-auth/providers/apple';
import Auth0Provider from 'next-auth/providers/auth0';
import CognitoProvider from 'next-auth/providers/cognito';
import DiscordProvider from 'next-auth/providers/discord';
import FacebookProvider from 'next-auth/providers/facebook';
import GithubProvider from 'next-auth/providers/github';
import GitlabProvider from 'next-auth/providers/gitlab';
import GoogleProvider from 'next-auth/providers/google';
import OktaProvider from 'next-auth/providers/okta';
import RedditProvider from 'next-auth/providers/reddit';
import SalesforceProvider from 'next-auth/providers/salesforce';
import SlackProvider from 'next-auth/providers/slack';
import SpotifyProvider from 'next-auth/providers/spotify';
import TwitchProvider from 'next-auth/providers/twitch';
import TwitterProvider from 'next-auth/providers/twitter';

const authorization = {
  params: {
    prompt: 'login',
    access_type: 'offline',
    response_type: 'code',
  },
};
const providers = [];
if (process.env.APPLE_CLIENT_ID) {
  providers.push(
    AppleProvider({
      clientId: process.env.APPLE_CLIENT_ID!,
      clientSecret: process.env.APPLE_CLIENT_SECRET!,
      authorization: authorization,
    }),
  );
}
if (process.env.AUTH0_CLIENT_ID) {
  providers.push(
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      authorization: authorization,
    }),
  );
}
if (process.env.COGNITO_CLIENT_ID) {
  providers.push(
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID!,
      clientSecret: process.env.COGNITO_CLIENT_SECRET!,
      authorization: authorization,
    }),
  );
}
if (process.env.DISCORD_CLIENT_ID) {
  providers.push(
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      authorization: authorization,
    }),
  );
}
if (process.env.FACEBOOK_CLIENT_ID) {
  providers.push(
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
      authorization: authorization,
    }),
  );
}
if (process.env.GITHUB_CLIENT_ID) {
  providers.push(
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      authorization: authorization,
    }),
  );
}
if (process.env.GITLAB_CLIENT_ID) {
  providers.push(
    GitlabProvider({
      clientId: process.env.GITLAB_CLIENT_ID!,
      clientSecret: process.env.GITLAB_CLIENT_SECRET!,
      authorization: authorization,
    }),
  );
}
if (process.env.GOOGLE_CLIENT_ID) {
  providers.push(
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: authorization,
    }),
  );
}
if (process.env.OKTA_CLIENT_ID) {
  providers.push(
    OktaProvider({
      clientId: process.env.OKTA_CLIENT_ID!,
      clientSecret: process.env.OKTA_CLIENT_SECRET!,
      authorization: authorization,
    }),
  );
}
if (process.env.REDDIT_CLIENT_ID) {
  providers.push(
    RedditProvider({
      clientId: process.env.REDDIT_CLIENT_ID!,
      clientSecret: process.env.REDDIT_CLIENT_SECRET!,
      authorization: authorization,
    }),
  );
}
if (process.env.SALESFORCE_CLIENT_ID) {
  providers.push(
    SalesforceProvider({
      clientId: process.env.SALESFORCE_CLIENT_ID!,
      clientSecret: process.env.SALESFORCE_CLIENT_SECRET!,
      authorization: authorization,
    }),
  );
}

if (process.env.SLACK_CLIENT_ID) {
  providers.push(
    SlackProvider({
      clientId: process.env.SLACK_CLIENT_ID!,
      clientSecret: process.env.SLACK_CLIENT_SECRET!,
      authorization: authorization,
    }),
  );
}

if (process.env.SPOTIFY_CLIENT_ID) {
  providers.push(
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID!,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
      authorization: authorization,
    }),
  );
}

if (process.env.TWITCH_CLIENT_ID) {
  providers.push(
    TwitchProvider({
      clientId: process.env.TWITCH_CLIENT_ID!,
      clientSecret: process.env.TWITCH_CLIENT_SECRET!,
      authorization: authorization,
    }),
  );
}

if (process.env.TWITTER_CLIENT_ID) {
  providers.push(
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID!,
      clientSecret: process.env.TWITTER_CLIENT_SECRET!,
      authorization: authorization,
    }),
  );
}

export const authOptions: NextAuthOptions = {
  providers: providers,
  session: { strategy: 'jwt' },
};

export default NextAuth(authOptions);
