import { FC } from 'react'
import { ButtonProps } from './Button.props'
import classNames from 'classnames'


// STYLES
import classes from './Button.module.scss'

export const Button: FC<ButtonProps> = ({ children, orientation = 'right', className, ...props }): JSX.Element => {
  return (
    <button className={classNames(classes.button, className, {
      [classes.top]: orientation === 'top',
      [classes.right]: orientation === 'right',
      [classes.bottom]: orientation === 'bottom'
    })} {...props}>
      {children}
      <svg className={classes.icon} width="8" height="15" viewBox="0 0 8 15" fill="black" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.17808 0.176516C0.0639145 0.291916 0 0.446831 0 0.608145C0 0.76946 0.0639145 0.924375 0.17808 1.03977L6.55635 7.5L0.17808 13.9589C0.0639145 14.0743 0 14.2292 0 14.3906C0 14.5519 0.0639145 14.7068 0.17808 14.8222C0.233572 14.8785 0.29992 14.9232 0.373207 14.9537C0.446493 14.9843 0.525234 15 0.604781 15C0.684328 15 0.763069 14.9843 0.836356 14.9537C0.909642 14.9232 0.97599 14.8785 1.03148 14.8222L7.8142 7.95101C7.93333 7.83035 8 7.66851 8 7.5C8 7.33149 7.93333 7.16965 7.8142 7.04899L1.03148 0.177808C0.97599 0.121537 0.909642 0.0768117 0.836356 0.0462728C0.763069 0.0157338 0.684328 0 0.604781 0C0.525234 0 0.446493 0.0157338 0.373207 0.0462728C0.29992 0.0768117 0.233572 0.121537 0.17808 0.177808V0.176516Z" />
      </svg>
    </button>
  )
}
