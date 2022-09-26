import { ConfigService } from '@nestjs/config';
import { MongooseModuleFactoryOptions } from '@nestjs/mongoose';

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<MongooseModuleFactoryOptions> => {
  return {
    uri: getMongoString(configService),
    ...getMongoOptions(),
  };
};

const getMongoString = (configService: ConfigService) => {
  const login = configService.get('MONGO_LOGIN');
  const pass = configService.get('MONGO_PASSWORD');
  const host = configService.get('MONGO_HOST');
  const port = configService.get('MONGO_PORT');
  const db = configService.get('MONGO_AUTHDATABASE');
  const uri = `mongodb://${login}:${pass}@${host}:${port}/${db}`;

  return uri;
};

const getMongoOptions = () => ({
  useNewUrlParser: true,
  //   useCreateIndex: true,
  useUnifiedTopology: true,
});
