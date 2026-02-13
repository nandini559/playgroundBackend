import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      "http://localhost:3001", "http://localhost:5173"
    ],
    methods: "GET,POST,PUT,DELETE"
  });

  const config = new DocumentBuilder().setTitle("playground API").setDescription("API documentation").setVersion("1.0").addBearerAuth().build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(3000);
  console.log("http://localhost:3000/api");
}
bootstrap();
