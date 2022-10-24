import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ArrivalsE } from "../entities/arrivals";
import { ArrivalsImageE } from "../entities/arrivals.image";
import { ArrivalI } from "../interfaces/arrival.interface";
import { ImageI } from "../interfaces/image.interface";
import { ArrivalsLinkI } from '../interfaces/arrivalsLink.interface'
import { ArrivalsLinkE } from "../entities/arrivals.link";

@Injectable()
export class ArrivalsServices {

  constructor(
    @InjectRepository(ArrivalsImageE) private readonly arrivalsImageModel: Repository<ArrivalsImageE>,
    @InjectRepository(ArrivalsE) private readonly arrivalsModel: Repository<ArrivalsE>,
    @InjectRepository(ArrivalsLinkE) private readonly arrivalsLinkModel: Repository<ArrivalsLinkE>
  ) { }

  /**
   * @param data 
   */
  createImage(data: ImageI) {
    const image = this.arrivalsImageModel.create(data)
    return this.arrivalsImageModel.save(image)
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
  createArrival(data: ArrivalI) {
    const arrival = this.arrivalsModel.create(data)
    return this.arrivalsModel.save(arrival)
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
}