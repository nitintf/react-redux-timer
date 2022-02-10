import React from 'react'

interface DigitProps {
	digit: number
	arr: number[]
	index: number
}

const Digit: React.FC<DigitProps> = ({ digit, arr, index }) => {
	const style = digit > 0 ? 'digit' : ''

	return (
		<>
			<div className={`${style}`}>
				{digit.toLocaleString('en-US', {
					minimumIntegerDigits: 2,
					useGrouping: false,
				})}
			</div>
			{index !== arr.length - 1 && <span>-</span>}
		</>
	)
}

export default Digit
