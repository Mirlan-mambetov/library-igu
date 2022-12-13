import { Footer, Navbar } from "../components"
import { LayoutProps } from "../interfaces/Layout.props"

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Main content */}
      <main>
        {children}
      </main>
      {/* Footer */}
      <Footer />
    </>
  )
}