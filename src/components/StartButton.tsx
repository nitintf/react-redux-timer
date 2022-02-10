import React from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { startTimer } from '../redux/slices/timer'

const StartButton: React.FC = () => {
	console.log(' start ')
	const { start } = useAppSelector((state) => state.timer)
	const dispatch = useAppDispatch()
	const handleClick = () => {
		dispatch(startTimer())
	}

	return (
		<button className='btn' onClick={handleClick} disabled={start}>
			Start
		</button>
	)
}

export default StartButton
