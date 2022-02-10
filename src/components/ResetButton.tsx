import React from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { resetTimer } from '../redux/slices/timer'

const ResetButton: React.FC = () => {
	const { pause } = useAppSelector((state) => state.timer)
	const dispatch = useAppDispatch()
	const handleClick = () => {
		dispatch(resetTimer())
	}

	return (
		<button className='btn' onClick={handleClick} disabled={!pause}>
			Reset
		</button>
	)
}

export default ResetButton
