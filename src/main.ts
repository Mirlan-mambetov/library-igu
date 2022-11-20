import { AppModule } from './app.module'
import { NestFactory } from '@nestjs/core'

const PORT = process.env.APP_PORT || 4200

const start = async () => {
	const app = await NestFactory.create(AppModule)
	app.setGlobalPrefix('api/v2')
	app.enableCors()
	await app.listen(PORT)
}
start()
