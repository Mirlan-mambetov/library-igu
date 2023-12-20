import { DetailsHTMLAttributes, InputHTMLAttributes, forwardRef } from 'react'

interface IFieldComponentProps extends InputHTMLAttributes<HTMLInputElement> {}
const FieldComponent = forwardRef<HTMLInputElement, IFieldComponentProps>(
  ({ type, className, ...props }, ref) => {
    return <input className={className} {...props} ref={ref} />
  }
)

export default FieldComponent
