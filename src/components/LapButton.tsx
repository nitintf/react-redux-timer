import React from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { updateLap } from '../redux/slices/timer'

const LapButton: React.FC = () => {
	const { hrs, mins, sec, milli_sec } = useAppSelector((state) => state.timer)
	const dispatch = useAppDispatch()

	const toTwoDigit = (digit: number) => {
		return digit.toLocaleString('en-US', {
			minimumIntegerDigits: 2,
			useGrouping: false,
		})
	}

	const handleLap = () => {
		dispatch(
			updateLap(
				`${toTwoDigit(hrs)}-${toTwoDigit(mins)}-${toTwoDigit(sec)}-${toTwoDigit(
					milli_sec
				)} `
			)
		)
	}

	return (
		<button
			className='btn'
			onClick={handleLap}
			disabled={milli_sec === 0 && sec === 0}>
			Lap
		</button>
	)
}

export default LapButton
