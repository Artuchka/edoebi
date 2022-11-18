import React from "react"

export const Header = () => {
	return (
		<header className="header">
			<img src="./../img/logo.png" alt="logo" className="logo" />
			<input
				type="text"
				className="input"
				placeholder="Ввести промокод"
			/>
			<a href="tel:88003333323" className="call">
				<img src="./../img/call.svg" alt="call" className="call" />
			</a>
			<img src="./../img/menu.svg" alt="hamburger" className="menu" />
			<div className="menu-window">
				<div className="heading">
					<img
						src="./../img/logo-light.png"
						alt="logo-light"
						className="logo"
					/>
					<div className="close">&times;</div>
				</div>

				<div className="content">
					<div className="location">
						<img
							src="./../img/star.svg"
							alt="location"
							className="location"
						/>
						<div className="info">
							<div className="city">Абакан</div>
							<small>Изменить</small>
						</div>
					</div>
					<div className="nearest-stats">
						<div className="time">0 мин</div>
						<div className="stars">
							<img src="./../img/star.svg" alt="" />
							<img src="./../img/star.svg" alt="" />
							<img src="./../img/star.svg" alt="" />
						</div>
					</div>

					<nav className="nav">
						<ul className="nav__list">
							<li>
								{" "}
								<a href="#" className="nav__item">
									Вход и регистрация
								</a>{" "}
							</li>
							<li>
								<a href="#" className="nav__item">
									Акции
								</a>
							</li>
							<li>
								<a href="#" className="nav__item">
									Франшиза
								</a>
							</li>
							<li>
								<a href="#" className="nav__item">
									Инвестиции
								</a>
							</li>
							<li>
								<a href="#" className="nav__item">
									Правовые документы
								</a>
							</li>
						</ul>
					</nav>

					<div className="apps">
						<div className="playstore">
							<img
								src="./../img/cards/andriod.svg"
								alt="playstore"
							/>
						</div>
						<div className="appstore">
							<img
								src="./../img/cards/apple.svg"
								alt="appstore"
							/>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
