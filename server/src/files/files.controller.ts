import { Controller, UseInterceptors, Post, UploadedFile, HttpStatus } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import { imageFileFilter, renameFIleName } from '../utils/fileuploads.utils'

@Controller('files')
export class FilesController {

  @Post()
  @UseInterceptors(
    FileInterceptor("file", {
      storage: diskStorage({
        destination: "./uploads",
        filename: (req, file, cb) => renameFIleName(req, file, cb)
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
