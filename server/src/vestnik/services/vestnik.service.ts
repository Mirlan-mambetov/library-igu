import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PAGE_NOT_FOUND } from "src/pages/constants/pages.constans";
import { PageEntity } from "src/pages/entities/Page";
import { Repository } from "typeorm";
import { VESTNIK_NOT_FOUND } from "../constans/vestnik.constans";
import { VestnikEntity } from "../entities/Vestnik";
import { VestnikArhivsEntity } from "../entities/Vestnik.arhivs";
import { VestnikArhivI, VestnikI } from "../interface/vestnik.interface";

@Injectable()
export class VestnikService {

  constructor(
    @InjectRepository(VestnikEntity) private readonly vestnikModel: Repository<VestnikEntity>,
    @InjectRepository(VestnikArhivsEntity) private readonly vestnikArhivsModel: Repository<VestnikArhivsEntity>,
    @InjectRepository(PageEntity) private readonly pagesModel: Repository<PageEntity>
  ) { }

  async find() {
    return await this.vestnikModel.find()
  }

  async findOne(id: number) {
    return await this.vestnikModel.findOne({ where: { id } })
  }

  async create(id: number, data: VestnikI) {
    const page = await this.pagesModel.findOne({ where: { id } })
    if (!page) throw new HttpException(PAGE_NOT_FOUND, HttpStatus.BAD_REQUEST)
    const vestnikData = this.vestnikModel.create({
      ...data,
      page
    })
    return await this.vestnikModel.save(vestnikData)
  }

  async update(id: number, data: VestnikI) {
    return await this.vestnikModel.update(id, data)
  }

  async createArhivVestnik(id: number, vestnikArhiv: VestnikArhivI) {
    const vestnik = await this.vestnikModel.findOne({ where: { id } })
    if (!vestnik) throw new HttpException(VESTNIK_NOT_FOUND, HttpStatus.BAD_REQUEST)
    const arhiv = this.vestnikArhivsModel.create({ category: vestnik, ...vestnikArhiv })
    return await this.vestnikArhivsModel.save(arhiv)
  }

  async updateArhivVestnik(id: number, vestnikArhiv: VestnikArhivI) {
    return await this.vestnikArhivsModel.update(id, vestnikArhiv)
  }

  async findAllArhiv() {
    return await this.vestnikArhivsModel.find()
  }

  async findOneArhiv(id: number) {
    return await this.vestnikArhivsModel.findOne({ where: { id } })
  }
}