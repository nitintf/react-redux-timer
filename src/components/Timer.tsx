import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import Digit from './Digit'
import {
	resetMilliSec,
	resetMin,
	resetSec,
	updateHr,
	updateMilliSec,
	updateMin,
	updateSec,
} from '../redux/slices/timer'

const Timer: React.FC = () => {
	const { hrs, milli_sec, mins, sec, start, pause } = useAppSelector(
		(state) => state.timer
	)
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (start) {
			const timer = setInterval(() => {
				if (!pause) {
					dispatch(updateMilliSec())
				}

				if (milli_sec / 99 === 1) {
					dispatch(resetMilliSec())
					dispatch(updateSec())
				}

				if (sec / 60 === 1) {
					dispatch(resetSec())
					dispatch(updateMin())
				}

				if (mins / 60 === 1) {
					dispatch(resetMin())
					dispatch(updateHr())
				}
			}, 10)

			return () => {
				window.clearInterval(timer)
			}
		}
	}, [sec, mins, start, hrs, pause, milli_sec, dispatch])

	const timers = [hrs, mins, sec, milli_sec]

	return (
		<div className='timer'>
			{timers.map((t, index) => (
				<Digit digit={t} key={index} arr={timers} index={index} />
			))}
		</div>
	)
}

export default Timer
