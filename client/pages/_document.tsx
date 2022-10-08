import Document, { DocumentContext, DocumentInitialProps, Html, Main, NextScript } from 'next/document'
import Head from 'next/head'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }
}

export default MyDocument