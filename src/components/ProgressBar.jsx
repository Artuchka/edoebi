import React from "react"

export const ProgressBar = () => {
	return (
		<div className="progress-bar">
			<div className="info">
				<span>Роллы в подарок</span>
				<span className="grayed">Как это работает?</span>
			</div>
			<div className="bar" style={{ "--amount": 31 }} />
			<div className="prices">
				<span style={{ "--amount": 0 }}>0</span>
				<span style={{ "--amount": 25 }}>25</span>
				<span style={{ "--amount": 75 }}>75</span>
				<span style={{ "--amount": 100 }}>100</span>
			</div>
		</div>
	)
}
