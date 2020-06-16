import { Injectable } from '@nestjs/common';
import OAuth2Server from 'oauth2-server';

@Injectable()
export class OAuthService
  implements OAuth2Server.PasswordModel, OAuth2Server.ClientCredentialsModel {
  private memCache = {
    userClients: [
      {
        id: 'userClient', // Needed by refresh_token grant as there is a bug at line 103 in https://github.com/oauthjs/node-oauth2-server/blob/v3.0.1/lib/grant-types/refresh-token-grant-type.js (used client.id instead of client.clientId)
        clientId: 'userClient',
        clientSecret: 'secret123',
        grants: ['password', 'refresh_token'],
        redirectUris: ['http://localhost:3000'],
        userId: 'terry',
      },
    ],
    appClients: [
      {
        id: 'confidentialApplication',
        clientId: 'confidentialApplication',
        clientSecret: 'topSecret',
        grants: ['password', 'client_credentials'],
        redirectUris: [],
        userId: 'terry',
      },
    ],
    tokens: new Array<any>(),
    users: [
      {
        username: 'terry',
        password: 'password',
      },
      {
        username: 'tommy',
        password: 'password',
      },
    ],
  };

  public readonly oauth: OAuth2Server = new OAuth2Server({
    model: this,
  });

  getAccessToken = (token: any) => {
    const tokens = this.memCache.tokens.filter(
      (savedToken: any) => savedToken.accessToken === token,
    );
    return tokens[0];
  };

  getClient = (clientId: string, clientSecret: string) => {
    const clients: any = this.memCache.userClients.filter(
      client => client.id === clientId && client.clientSecret === clientSecret,
    );

    const confidentialClients = this.memCache.appClients.filter(
      (client: any) =>
        client.clientId === clientId && client.clientSecret === clientSecret,
    );
    return clients[0] || confidentialClients[0];
  };

  saveToken = (token: any, client: any, user: any) => {
    token.client = {
      id: client.clientId,
    };
    token.user = {
      username: user.username,
    };
    this.memCache.tokens.push(token);
    return token;
  };

  getUser = (
    username: string,
    password: string,
  ): Promise<OAuth2Server.User> => {
    const users = this.memCache.users.filter(
      user => user.username === username && user.password === password,
    );
    return (
      users &&
      new Promise((resolve, _reject) =>
        resolve({ username: users[0].username }),
      )
    );
  };

  getUserFromClient = (
    client: OAuth2Server.Client,
  ): Promise<OAuth2Server.User | OAuth2Server.Falsey> => {
    // console.log(client, this.memCache.appClients);
    const clients = this.memCache.appClients.filter(savedClient => {
      savedClient.clientId === client.clientId &&
        savedClient.clientSecret === client.clientSecret;
    });

    const matchedUser: OAuth2Server.User = this.memCache.users.filter(
      (user: any) => user.username === client.userId,
    );

    return new Promise((resolve, _reject) =>
      resolve({ username: matchedUser && matchedUser[0].username }),
    );
  };

  getRefreshToken = (refreshToken: any) => {
    const tokens = this.memCache.tokens.filter(
      (savedToken: any) => savedToken.refreshToken === refreshToken,
    );
    if (!tokens.length) {
      return;
    }
    return tokens[0];
  };

  revokeToken = (token: any) => {
    this.memCache.tokens = this.memCache.tokens.filter(
      savedToken => savedToken.refreshToken !== token.refreshToken,
    );

    const revokedTokensFound = this.memCache.tokens.filter(
      savedToken => savedToken.refreshToken === token.refreshToken,
    );

    return !revokedTokensFound.length;
  };

  verifyScope(
    token: OAuth2Server.Token,
    scope: string | string[],
    callback?: OAuth2Server.Callback<boolean>,
  ): Promise<boolean> {
    return new Promise((resolve, _reject) => resolve(token.scope === scope));
  }
}
