import LapButton from './components/LapButton'
import Laps from './components/Laps'
import PauseButton from './components/PauseButton'
import ResetButton from './components/ResetButton'
import StartButton from './components/StartButton'
import Timer from './components/Timer'

function App() {
	return (
		<div className='app'>
			<div className='container'>
				<Timer />
				<div className='actions'>
					<StartButton />
					<LapButton />
					<PauseButton />
					<ResetButton />
				</div>
				<Laps />
			</div>
		</div>
	)
}

export default App
