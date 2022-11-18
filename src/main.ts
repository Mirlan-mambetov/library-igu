import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'


const PORT = process.env.PORT || 4100

const start = async () => {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api/v2')
  app.enableCors()
  await app.listen(PORT)
}
start()