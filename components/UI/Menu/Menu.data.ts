import { IMenuItem } from './MenuItem/MenuItem.props'
import { BiLibrary, BiNews } from 'react-icons/bi'
import { BsFillJournalBookmarkFill } from 'react-icons/bs'
import { FaQuestionCircle, FaServicestack } from 'react-icons/fa'
import { GiEarthAmerica } from 'react-icons/gi'
import { HiHome } from 'react-icons/hi'
import { ImStatsDots } from 'react-icons/im'
import { MdAdminPanelSettings, MdRule } from 'react-icons/md'
import { SiAboutdotme, SiVectorworks } from 'react-icons/si'

export const PanelMenu: IMenuItem[] = [
	{
		name: 'Главная Панель',
		link: '/',
		icon: MdAdminPanelSettings
	},
	{
		name: 'Статистика в линию',
		link: '/dashboard/stats/line',
		icon: ImStatsDots
	},
	{
		name: 'Статистика на карте',
		link: '/dashboard/stats/maps',
		icon: GiEarthAmerica
	},
	{
		name: 'FAQ вопросы',
		link: '/dashboard/faq',
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
	},
	{
		name: 'Правила пользования',
		link: '/website/rules',
		icon: MdRule
	},
	{
		name: 'Электронная библиотека',
		link: '/website/elibrary',
		icon: BiLibrary
	}
]
