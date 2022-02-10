import React from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { pauseTimer } from '../redux/slices/timer'

const PauseButton: React.FC = () => {
	const { pause, start } = useAppSelector((state) => state.timer)
	const dispatch = useAppDispatch()
	const handleClick = () => {
		dispatch(pauseTimer())
	}

	const dis = pause || !start

	return (
		<button className='btn' onClick={handleClick} disabled={dis}>
			Pause
		</button>
	)
}

export default PauseButton
