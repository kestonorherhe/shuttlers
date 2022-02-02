import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import * as bodyParser from 'body-parser';
import { urlencoded, json } from 'express';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  app.enableCors();
  // app.use(bodyParser.json({limit: '50mb'}));
  // app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));
  
  
  const options = new DocumentBuilder()
    .setTitle('Conduit Blog API')
    .setDescription('Conduit blog api')
    .setVersion('1.0.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'Token' },
      'access-token',
    )
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 4100, () => { console.log(`mom-tribe api server running on PORT: ${process.env.PORT}`) });
}
bootstrap();
