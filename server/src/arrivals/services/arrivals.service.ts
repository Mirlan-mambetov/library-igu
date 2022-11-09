import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ArrivalsE } from "../entities/arrivals";
import { ArrivalsImageE } from "../entities/arrivals.image";
import { ArrivalI } from "../interfaces/arrival.interface";
import { ImageI } from "../interfaces/image.interface";
import { ArrivalsLinkI } from '../interfaces/arrivalsLink.interface'
import { ArrivalsLinkE } from "../entities/arrivals.link";
import { PageEntity } from "src/pages/entities/Page";
import { PAGE_NOT_FOUND } from "src/pages/constants/pages.constans";

@Injectable()
export class ArrivalsServices {

  constructor(
    @InjectRepository(ArrivalsImageE) private readonly arrivalsImageModel: Repository<ArrivalsImageE>,
    @InjectRepository(ArrivalsE) private readonly arrivalsModel: Repository<ArrivalsE>,
    @InjectRepository(ArrivalsLinkE) private readonly arrivalsLinkModel: Repository<ArrivalsLinkE>,
    @InjectRepository(PageEntity) private readonly pageModel: Repository<PageEntity>,
  ) { }

  /**
   * @param data 
   */
  async createImage(id: number, data: ImageI) {
    const page = await this.pageModel.findOne({ where: { id } })
    if (!page) throw new HttpException(PAGE_NOT_FOUND, HttpStatus.BAD_REQUEST)
    const image = this.arrivalsImageModel.create({
      ...data,
      page
    })
    return await this.arrivalsImageModel.save(image)
  }

  async updateArrivalImage(id: number, data: ImageI) {
    return await this.arrivalsImageModel.update(id, data)
  }
  /**
   * @returns 
   */
  findAllImage() {
    return this.arrivalsImageModel.find()
  }

  /**
   * @returns 
   */
  findAllArrivals() {
    return this.arrivalsModel.find({ relations: ['link'] })
  }

  /**
   * @param data 
   * @returns 
   */
  async createArrival(id: number, data: ArrivalI) {
    const page = await this.pageModel.findOne({ where: { id } })
    if (!page) throw new HttpException(PAGE_NOT_FOUND, HttpStatus.BAD_REQUEST)
    const saveData = this.arrivalsModel.create({
      ...data,
      page
    })
    return await this.arrivalsModel.save(saveData)
  }

  async updateArrival(id: number, data: ArrivalI) {
    return await this.arrivalsModel.update(id, data)
  }

  /**
   * @param id 
   * @param data 
   */
  async createArrivalsLink(
    id: number,
    data: ArrivalsLinkI
  ) {
    const arrival = await this.arrivalsModel.findOne({ where: { id } })
    if (!arrival) throw new HttpException('Arrival с таким id не найден', HttpStatus.BAD_REQUEST)
    const link = this.arrivalsLinkModel.create({
      ...data,
      arrivals: arrival
    })
    return await this.arrivalsLinkModel.save(link)
  }

  async updateArrivalLink(id: number, data: ArrivalsLinkI) {
    return await this.arrivalsLinkModel.update(id, data)
  }
}