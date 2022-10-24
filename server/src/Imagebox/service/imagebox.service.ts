import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ImageboxEntity } from '../entities/Imagebox';
import { ImageboxI } from '../interface/imagebox.interface';

@Injectable()
export class ImageboxService {

  constructor(
    @InjectRepository(ImageboxEntity) private readonly imageBoxModel: Repository<ImageboxEntity>
  ) { }

  create(data: ImageboxI) {
    const imageBox = this.imageBoxModel.create(data)
    return this.imageBoxModel.save(imageBox)
  }

  findAll() {
    return this.imageBoxModel.find()
  }

  findOne(id: number) {
    return this.imageBoxModel.findOne({ where: { id } })
  }

  update(id: number, data: ImageboxI) {
    return this.imageBoxModel.update({ id }, data)
  }

  delete(id: number) {
    return this.imageBoxModel.delete(id)
  }
}