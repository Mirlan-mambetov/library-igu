import { IHeroSubcontent } from '../../../interfaces/hero.interface'

export interface SubContentProps {
	data: IHeroSubcontent[]
	orientation?: 'row' | 'column'
}
