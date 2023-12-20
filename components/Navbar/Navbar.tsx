import Logo from '../../public/logo.png'
import classes from './Navbar.module.scss'
import { MenuNavigation } from './mobile/menu/menu'
import classNames from 'classnames'
import { FaEarthAfrica } from 'react-icons/fa6'
import { MdArrowDropDown } from 'react-icons/md'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'

export const Navbar: FC = (): JSX.Element => {
  // STATE
  const [menu, setMenu] = useState<boolean>(false)
  // Mobile menu handler
  const menuHandler = () => {
    if (!menu) {
      setMenu(true)
    } else {
      setMenu(false)
    }
  }
  return (
    <div className={classes.navbar}>
      <nav className={classes.navigation}>
        {/* Mobile Btn */}
        <div
          className={classNames(classes.mobileBtn, { [classes.active]: menu })}
          onClick={menuHandler}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* Logo */}
        <div className={classes.logo}>
          <Link href="/">
            <a>
              <Image src={Logo} />
              {/* Научная библиотека
              <FaEarthAfrica /> */}
            </a>
          </Link>
        </div>
        <ul className={classes.menu}>
          <li className={classes.menuItem}>
            <Link href={'/'}>
              <a>Главная</a>
            </Link>
          </li>
          <li className={classes.menuItem}>
            <Link href={'/about'}>
              <a>О библиотеке</a>
            </Link>
          </li>
          <li className={classes.menuItem}>
            <Link href={'/services'}>
              <a>сервисы</a>
            </Link>
          </li>

          <li className={classes.menuItem}>
            <Link href={'/elibrary'}>
              <a>Электронная Библиотека</a>
            </Link>
          </li>

          <li className={classes.menuItem}>
            <Link href={'/internet-links'}>
              <a>Электронные Ресурсы</a>
            </Link>
          </li>
          <li className={classes.menuItem}>
            <a
              href={'https://kyrlibnet.kg/ru/'}
              target="_blank"
              rel="noreferrer"
            >
              Электронный Каталог
            </a>
          </li>
          <li className={classes.menuItem}>
            <Link href={'/window'}>
              <a>Единое окно</a>
            </Link>
          </li>
          <li className={classes.menuItem}>
            <a>
              Ресурсы
              <span>
                <MdArrowDropDown />
              </span>
            </a>
            <ul className={classes.submenu}>
              <li className={classes.subitem}>
                <Link href={`/teachers`}>
                  <a>Труды преподавателей</a>
                </Link>
              </li>
              <li className={classes.subitem}>
                <Link href={`#`}>
                  <a>Кыргыз тили жана адабияты</a>
                </Link>
              </li>
              <li className={classes.subitem}>
                <Link href={`/vestnik`}>
                  <a>Вестник</a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        {/* search */}
        <div className={classes.search}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.96996 9.28121L6.72372 6.03497C7.22747 5.38373 7.49997 4.58748 7.49997 3.74998C7.49997 2.74749 7.10872 1.80749 6.40122 1.09875C5.69372 0.389998 4.75123 0 3.74998 0C2.74874 0 1.80624 0.391248 1.09875 1.09875C0.389998 1.80624 0 2.74749 0 3.74998C0 4.75123 0.391248 5.69372 1.09875 6.40122C1.80624 7.10997 2.74749 7.49997 3.74998 7.49997C4.58748 7.49997 5.38248 7.22747 6.03372 6.72497L9.27996 9.96996C9.28948 9.97948 9.30078 9.98704 9.31322 9.99219C9.32566 9.99735 9.33899 10 9.35246 10C9.36592 10 9.37926 9.99735 9.3917 9.99219C9.40414 9.98704 9.41544 9.97948 9.42496 9.96996L9.96996 9.42621C9.97948 9.41669 9.98704 9.40539 9.99219 9.39295C9.99735 9.38051 10 9.36717 10 9.35371C10 9.34024 9.99735 9.32691 9.99219 9.31447C9.98704 9.30203 9.97948 9.29073 9.96996 9.28121ZM5.72998 5.72998C5.19998 6.25872 4.49748 6.54997 3.74998 6.54997C3.00249 6.54997 2.29999 6.25872 1.76999 5.72998C1.24124 5.19998 0.949996 4.49748 0.949996 3.74998C0.949996 3.00249 1.24124 2.29874 1.76999 1.76999C2.29999 1.24124 3.00249 0.949996 3.74998 0.949996C4.49748 0.949996 5.20123 1.23999 5.72998 1.76999C6.25872 2.29999 6.54997 3.00249 6.54997 3.74998C6.54997 4.49748 6.25872 5.20123 5.72998 5.72998Z"
              fill="black"
            />
          </svg>
        </div>
      </nav>
      <MenuNavigation active={menu} />
    </div>
  )
}
