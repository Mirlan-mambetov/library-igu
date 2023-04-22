import { FC, useState } from 'react'

export const ClipboardComponent: FC<{ link: string }> = ({ link }) => {
  const [isClick, setIsClick] = useState(false)

  const clickHandler = () => {
    if (!isClick) {
      navigator.clipboard.writeText(link)
      setIsClick(true)
      setTimeout(() => {
        setIsClick(false)
      }, 1300)
    } else {
      setIsClick(false)
    }
  }

  return isClick ? (
    <span
      style={{
        fontSize: '8px',
        textTransform: 'uppercase'
      }}
    >
      Ссылка скопирована
    </span>
  ) : (
    <div
      style={{
        fontSize: '10px',
        textTransform: 'uppercase',
        textDecoration: 'underline'
      }}
      onClick={clickHandler}
    >
      Копировать ссылку
    </div>
  )
}
