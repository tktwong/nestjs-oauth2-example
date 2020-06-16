import { Controller, Get, Inject, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import OAuth2Server from 'oauth2-server';
import { OAuthService } from './oauth.service';

@Controller('oauth')
export class OAuthController {
  @Inject(OAuthService)
  private readonly service: OAuthService;

  @Post('token')
  accessToken(@Req() req: Request, @Res() res: Response) {
    const request = new OAuth2Server.Request(req);
    const response = new OAuth2Server.Response(res);

    this.service.oauth
      .token(request, response)
      .then((token: any) => {
        res.json(token);
      })
      .catch(error => {
        res.send(error);
      });
  }

  @Get('protectedRequest')
  authenticateRequest(@Req() req: Request, @Res() res: Response) {
    const request = new OAuth2Server.Request(req);
    const response = new OAuth2Server.Response(res);

    return this.service.oauth
      .authenticate(request, response)
      .then(_token => {
        res.send('Congratulations! You made it!!!');
      })
      .catch(function(err) {
        res.status(err.code || 500).json(err);
      });
  }
}
