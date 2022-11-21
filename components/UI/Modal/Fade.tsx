import { FadeProps } from './Fade.props'
import { forwardRef } from 'react'
import { animated, useSpring } from 'react-spring'

export const Fade = forwardRef<HTMLDivElement, FadeProps>(function Fade(
	props,
	ref
) {
	const { in: open, children, onEnter, onExited, ...other } = props
	const style = useSpring({
		from: { opacity: 0 },
		to: { opacity: open ? 1 : 0 },
		onStart: () => {
			if (open && onEnter) {
				onEnter()
			}
		},
		onRest: () => {
			if (!open && onExited) {
				onExited()
			}
		}
	})

	return (
		<animated.div ref={ref} style={style} {...other}>
			{children}
		</animated.div>
	)
})
