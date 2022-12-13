import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { FC } from 'react'
import Image from 'next/image'
import Logo from '../../public/logo.png'

// STYLES 
import styles from './preloader.module.scss'

export const Preloader: FC = (): any => {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    const handleStart = (url: any) => (url !== router.asPath) && setLoading(true)
    const handleComplete = (url: any) => (url === router.asPath) && setTimeout(() => { setLoading(false) }, 2222);
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)
    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })
  return loading && (
    <div className={styles.preloader}>
      <Image src={Logo} />
    </div>
  )
}