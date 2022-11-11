import { Controller, UseInterceptors, Post, UploadedFile, HttpStatus } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import { extname } from 'path'
import { imageFileFilter, renameFIleName } from '../utils/fileuploads.utils'

@Controller('files')
export class FilesController {

  @Post()
  @UseInterceptors(
    FileInterceptor("file", {
      storage: diskStorage({
        destination: "./uploads",
        filename: (req, file, cb) => {
          const nameFile = file.originalname.split('.')[0]
          const fileExtName = extname(file.originalname)
          const randomName = Array(6)
            .fill(null)
            .map(() => Math.round(Math.random() * 10).toString(10))
            .join('')
          cb(null, `${randomName}${nameFile}${fileExtName}`)
        }
      }),
      fileFilter: imageFileFilter
    })
  )
  async uploadedFile(@UploadedFile() file) {
    console.log(file)
    return
    const response = {
      originalname: file.originalname,
      filename: file.filename
    }
    return {
      status: HttpStatus.OK,
      message: "image uploaded successfuly",
      data: response
    }
  }

}
