import { Module } from '@nestjs/common';
import { OAuthController } from './oauth.controller';
import { OAuthService } from './oauth.service';

@Module({
  controllers: [OAuthController],
  exports: [OAuthService],
  providers: [OAuthService],
})
export class OauthModule {}
