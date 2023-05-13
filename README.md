# Chatbot UI Next Auth Extension

This extension provides NextAuth SSO support to [Chatbot UI](https://github.com/jorge-menjivar/chatbot-ui).

## Installation

### Step 1

The extension comes pre-installed with the base version of [Chatbot UI](https://github.com/jorge-menjivar/chatbot-ui). However, if for any reason you need to re-install this extension, you can do so with npm:

```sh
npm i chatbot-ui-authjs@latest
```

### Step 2

Turn on authentication for [Chatbot UI](https://github.com/jorge-menjivar/chatbot-ui) by setting the following env variable in `.env.local`. You may need to create the file.

```sh
NEXT_PUBLIC_AUTH_ENABLED=true
```

### Steps 3

Add the IDs and client secrets of the providers you want to enable in the `env.local` file. See below.

## Configuration

When using this extension, the following environment variables can be set:

| Environment Variable        | Default value           | Description                                                                                |
| --------------------------- | ----------------------- | ------------------------------------------------------------------------------------------ |
| NEXTAUTH_EMAIL_PATTERN      |                         | The email regex pattern granted access to chatbot-ui. For example `.+@mydomain.com`        |
| NEXTAUTH_URL                | `http://localhost:3000` | NextAuth Settings. See [Official Document](https://next-auth.js.org/configuration/options) |
| NEXTAUTH_SECRET             |                         | NextAuth Settings. See [Official Document](https://next-auth.js.org/configuration/options) |
| \<PROVIDER\>\_CLIENT_ID     |                         | Provider OAuth Client ID                                                                   |
| \<PROVIDER\>\_CLIENT_SECRET |                         | Provider OAuth Client Secret                                                               |

Where provider is one of the following:

- APPLE
- AUTH0
- COGNITO
- DISCORD
- FACEBOOK
- GITHUB
- GITLAB
- GOOGLE
- OKTA
- REDDIT
- SALESFORCE
- SLACK
- SPOTIFY
- TWITCH
- TWITTER

For example, to enable Google and Github authentication, you would add the following to your `.env.local` file:

```sh
GITHUB_CLIENT_ID=xxxxxxxxxxxxx
GITHUB_CLIENT_SECRET=xxxxxxxxxxxxx
GOOGLE_CLIENT_ID=xxxxxxxxxxxxx
GOOGLE_CLIENT_SECRET=xxxxxxxxxxxx
```
