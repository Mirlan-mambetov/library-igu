import { extname } from 'path'
import { HttpException, HttpStatus, Request } from "@nestjs/common"

export const imageFileFilter = (req: Request, file: Express.Multer.File, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return callback(
      new HttpException("Допускается загружать только изображение!", HttpStatus.BAD_REQUEST),
      false
    )
  }
  callback(null, true)
}

export const renameFIleName = (req: Request, file: Express.Multer.File, callback) => {
  const name = file.originalname.split('.')[0]
  const fileExtName = extname(file.originalname)
  const randomName = Array(4)
    .fill(null)
    .map(() => Math.round(Math.random() * 10).toString(10))
    .join('')
  callback(null, `${name}${randomName}${fileExtName}`)
}