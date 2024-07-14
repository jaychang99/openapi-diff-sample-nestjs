import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';

const PORT = process.env.PORT ?? 8000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('OpenAPI Diff Example')
    .setDescription('Examples APIs to demonstrate OpenAPI diff')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // write document to root path with name openapi.json
  fs.writeFileSync('openapi.json', JSON.stringify(document, null, 2));

  SwaggerModule.setup('api', app, document);

  await app.listen(PORT);
}
bootstrap();
