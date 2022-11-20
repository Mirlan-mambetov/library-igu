import Document, {
	DocumentContext,
	DocumentInitialProps,
	Head,
	Html,
	Main,
	NextScript
} from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx)
		return initialProps
	}

	render() {
		return (
			<Html lang='ru'>
				<Head>
					<link rel='icon' href='/vercel.svg' type='image/png' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
export default MyDocument
