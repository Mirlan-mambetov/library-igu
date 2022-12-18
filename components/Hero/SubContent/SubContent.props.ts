import { IHeroSubcontent } from '../../../interfaces/Hero.interface'

export interface SubContentProps {
	data: IHeroSubcontent[]
	orientation?: 'row' | 'column'
}
