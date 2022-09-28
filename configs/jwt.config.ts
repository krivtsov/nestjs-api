import { JwtModuleOptions } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

export const getJWTConfig = async (
  confiService: ConfigService,
): Promise<JwtModuleOptions> => {
  return {
    secret: confiService.get('JWT_SECRET'),
  };
};
