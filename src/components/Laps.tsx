import React from 'react'
import { useAppSelector } from '../redux/hooks'

const Laps: React.FC = () => {
	const { laps } = useAppSelector((state) => state.timer)

	return (
		<div className='laps'>
			<h2>Laps</h2>
			<div className='laps-container'>
				{laps.length === 0 ? (
					<>
						<h3
							style={{
								textAlign: 'center',
								fontSize: '14px',
								fontWeight: 400,
								marginTop: '40px',
							}}>
							Click on lap to Record your laps
						</h3>
					</>
				) : (
					<table>
						<tbody>
							{laps
								.slice()
								.reverse()
								.map((lap, index) => (
									<tr key={lap} className='laps-records'>
										<td>{lap}</td>
									</tr>
								))}
						</tbody>
					</table>
				)}
			</div>
		</div>
	)
}

export default Laps
