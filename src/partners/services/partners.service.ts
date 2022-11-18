import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PartnersE } from '../entities/partner';
import { PartnersI } from '../interfaces/partners.interface';

@Injectable()
export class PartnersService {

  constructor(
    @InjectRepository(PartnersE) private readonly partnersModel: Repository<PartnersE>
  ) { }

  /**
   * @param id 
   * @returns 
   */
  findAll() {
    return this.partnersModel.find()
  }

  /**
   * @param id 
   * @returns 
   */
  createPartners(data: PartnersI) {
    const partner = this.partnersModel.create(data)
    return this.partnersModel.save(partner)
  }

  /**
   * @param id 
   * @returns 
   */
  updatePartners(id: number, data: PartnersI) {
    return this.partnersModel.update(id, data)
  }

  /**
   * @param id 
   * @returns 
   */
  deletePartners(id: number) {
    return this.partnersModel.delete(id)
  }
}
