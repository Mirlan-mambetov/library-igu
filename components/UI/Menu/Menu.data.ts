import { IMenuItem } from './MenuItem/MenuItem.props'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { BiLibrary, BiLink, BiNews, BiWindow } from 'react-icons/bi'
import { BsFillJournalBookmarkFill, BsJournal } from 'react-icons/bs'
import { FaQuestionCircle } from 'react-icons/fa'
import { GiEarthAmerica } from 'react-icons/gi'
import { HiHome } from 'react-icons/hi'
import { ImStatsDots } from 'react-icons/im'
import {
	MdAdminPanelSettings,
	MdMiscellaneousServices,
	MdRule,
	MdWork
} from 'react-icons/md'

export const PanelMenu: IMenuItem[] = [
	{
		name: 'Главная Панель',
		link: '/',
		icon: MdAdminPanelSettings
	},
	{
		name: 'Статистика в линию',
		link: '#',
		icon: ImStatsDots,
		disabled: true
	},
	{
		name: 'Статистика на карте',
		link: '#',
		icon: GiEarthAmerica,
		disabled: true
	},
	{
		name: 'Раздел FAQ',
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
		icon: AiOutlineInfoCircle
	},
	{
		name: 'Вестник ИГУ',
		link: '/website/vestnik',
		icon: BsFillJournalBookmarkFill
	},
	{
		name: 'Труды преподавателей',
		link: '/website/teachers-work',
		icon: MdWork
	},
	{
		name: 'Новости',
		link: '/website/news',
		icon: BiNews
	},
	{
		name: 'Сервисы',
		link: '/website/services',
		icon: MdMiscellaneousServices
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
	},
	{
		name: 'Кыргыз-тили',
		link: '#',
		icon: BsJournal,
		disabled: true
	},
	{
		name: 'Единое окно',
		link: '/website/window',
		icon: BiWindow,
		new: true
	},
	{
		name: 'Ссылки интернет',
		link: '#',
		icon: BiLink,
		disabled: true
	}
]
