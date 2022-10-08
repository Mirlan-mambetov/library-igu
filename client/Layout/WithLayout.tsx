import { FunctionComponent } from "react"
import { Layout } from "./Layout"

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T) {
    return (
      <Layout><Component {...props} /></Layout>
    )
  }
}