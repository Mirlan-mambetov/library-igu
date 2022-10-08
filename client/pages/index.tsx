import { FC } from "react"
import { withLayout } from "../Layout/WithLayout"
import { NextSeo } from "next-seo"

const Home: FC = (): JSX.Element => {
  return (
    <>
      <NextSeo
        title="Главная - Научная библиотека ИГУ"
        description="Научная библиотека ИГУ"
        additionalMetaTags={[
          { property: 'og:title', content: 'Научная библиотека ИГУ' }
        ]}
      />

    </>
  )
}

export default withLayout(Home)