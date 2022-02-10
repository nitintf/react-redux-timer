import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TimerState {
	milli_sec: number
	sec: number
	mins: number
	hrs: number
	laps: Array<string>
	start: boolean
	pause: boolean
}

const initialState: TimerState = {
	milli_sec: 0,
	sec: 0,
	mins: 0,
	hrs: 0,
	laps: [],
	start: false,
	pause: false,
}

export const timerSlice = createSlice({
	name: 'timer',
	initialState,
	reducers: {
		resetTimer: (state) => {
			state.hrs = 0
			state.milli_sec = 0
			state.mins = 0
			state.sec = 0
			state.laps = []
			state.start = false
			state.pause = false
		},
		updateSec: (state) => {
			state.sec = state.sec + 1
		},
		resetSec: (state) => {
			state.sec = 0
		},
		updateMilliSec: (state) => {
			state.milli_sec = state.milli_sec + 1
		},
		resetMilliSec: (state) => {
			state.milli_sec = 0
		},
		updateMin: (state) => {
			state.mins = state.mins + 1
		},
		resetMin: (state) => {
			state.mins = 0
		},
		updateHr: (state) => {
			state.hrs = state.hrs + 1
		},
		startTimer: (state) => {
			state.start = true
			state.pause = false
		},
		pauseTimer: (state) => {
			state.pause = true
			state.start = false
		},
		updateLap: (state, action: PayloadAction<string>) => {
			state.laps = [...state.laps, action.payload]
		},
	},
})

export const {
	resetTimer,
	updateHr,
	updateMilliSec,
	updateMin,
	updateSec,
	pauseTimer,
	startTimer,
	resetMilliSec,
	resetMin,
	resetSec,
	updateLap,
} = timerSlice.actions

export default timerSlice.reducer
