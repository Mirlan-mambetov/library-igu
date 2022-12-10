import { IMenuItem } from './MenuItem/MenuItem.props'
import { BiNews } from 'react-icons/bi'
import { BsFillJournalBookmarkFill } from 'react-icons/bs'
import { FaQuestionCircle, FaServicestack } from 'react-icons/fa'
import { GiEarthAmerica } from 'react-icons/gi'
import { HiHome } from 'react-icons/hi'
import { ImStatsDots } from 'react-icons/im'
import { MdAdminPanelSettings } from 'react-icons/md'
import { SiAboutdotme, SiVectorworks } from 'react-icons/si'

export const PanelMenu: IMenuItem[] = [
	{
		name: 'Главная Панель',
		link: '/',
		icon: MdAdminPanelSettings
	},
	{
		name: 'Статистика в линию',
		link: '/panel/stats/line',
		icon: ImStatsDots
	},
	{
		name: 'Статистика на карте',
		link: '/panel/stats/maps',
		icon: GiEarthAmerica
	},
	{
		name: 'FAQ вопросы',
		link: '/panel/faq',
		icon: FaQuestionCircle
	}
]

export const WebsitePageMenu: IMenuItem[] = [
	{
		name: 'Главная страница сайта',
		link: '/website/main',
		icon: HiHome
	},
	{
		name: 'О библиотеке',
		link: '/website/about',
		icon: SiAboutdotme
	},
	{
		name: 'Вестник ИГУ',
		link: '/website/vestnik',
		icon: BsFillJournalBookmarkFill
	},
	{
		name: 'Труды преподавателей',
		link: '/website/teachers-work',
		icon: SiVectorworks
	},
	{
		name: 'Новости',
		link: '/website/news',
		icon: BiNews
	},
	{
		name: 'Сервисы',
		link: '/website/services',
		icon: FaServicestack
	}
]
