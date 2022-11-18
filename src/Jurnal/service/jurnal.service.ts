import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PAGE_NOT_FOUND } from "src/pages/constants/pages.constans";
import { PageEntity } from "src/pages/entities/Page";
import { Repository } from "typeorm";
import { JURNAL_NOT_FOUND } from "../constans/jurnal.constans";
import { JurnalEntity } from "../entities/Jurnal";
import { JurnalAboutEntity } from "../entities/jurnal.about";
import { JurnalAddressEntity } from "../entities/jurnal.address";
import { JurnalAboutAddressI, JurnalAboutI, JurnalI } from "../interface/jurnal.interface";

@Injectable()
export class JurnalService {

  constructor(
    @InjectRepository(PageEntity) private readonly pageModel: Repository<PageEntity>,
    @InjectRepository(JurnalEntity) private readonly jurnalModel: Repository<JurnalEntity>,
    @InjectRepository(JurnalAboutEntity) private readonly JurnalAboutModel: Repository<JurnalAboutEntity>,
    @InjectRepository(JurnalAddressEntity) private readonly JurnalAddressModel: Repository<JurnalAddressEntity>
  ) { }


  async create(id: number, jurnal: JurnalI) {
    const page = await this.pageModel.findOne({ where: { id } })
    if (!page) throw new HttpException(PAGE_NOT_FOUND, HttpStatus.BAD_REQUEST)
    const jurnalData = this.jurnalModel.create(jurnal)
    const saveJurnal = await this.jurnalModel.save(jurnalData)
    page.jurnal = saveJurnal
    return await this.pageModel.save(page)
  }

  async update(id: number, jurnal: JurnalI) {
    return await this.jurnalModel.update({ id }, jurnal)
  }

  async createJurnalAbout(id: number, jurnalAbout: JurnalAboutI) {
    const jurnal = await this.jurnalModel.findOne({ where: { id } })
    if (!jurnal) throw new HttpException(JURNAL_NOT_FOUND, HttpStatus.BAD_REQUEST)
    const jurnalAboutData = this.JurnalAboutModel.create(jurnalAbout)
    const saveData = await this.JurnalAboutModel.save(jurnalAboutData)
    jurnal.jurnalabout = saveData
    return await this.jurnalModel.save(jurnal)
  }

  async updateJurnalAbout(id: number, jurnalAbout: JurnalAboutI) {
    return await this.JurnalAboutModel.update(id, jurnalAbout)
  }

  async createJurnalAboutAddress(id: number, jurnalAboutAddress: JurnalAboutAddressI[]) {
    const jurnalAbout = await this.JurnalAboutModel.findOne({ where: { id } })
    if (!jurnalAbout) throw new HttpException(JURNAL_NOT_FOUND, HttpStatus.BAD_REQUEST)
    const jurnalAboutAddressData = this.JurnalAddressModel.create(jurnalAboutAddress)
    const saveData = await this.JurnalAddressModel.save(jurnalAboutAddressData)
    jurnalAbout.address = saveData
    return await this.JurnalAboutModel.save(jurnalAbout)
  }

  async updateJurnalAboutAddress(id: number, jurnalAboutAddress: JurnalAboutAddressI) {
    const data = await this.JurnalAddressModel.findOne({ where: { id } })
    if (!data) throw new HttpException('Адресс с таким ID не найден', HttpStatus.BAD_REQUEST)
    return await this.JurnalAddressModel.update(data.id, jurnalAboutAddress)
  }
}