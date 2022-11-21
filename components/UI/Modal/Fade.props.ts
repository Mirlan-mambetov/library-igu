export interface FadeProps {
	children?: React.ReactElement
	in: boolean
	onEnter?: () => {}
	onExited?: () => {}
}
