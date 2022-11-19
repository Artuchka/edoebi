import React from "react"

import logoImage from "./../img/logo.png"
import callImage from "./../img/call.svg"
import androidImage from "./../img/cards/andriod.svg"
import appleImage from "./../img/cards/apple.svg"
import starImage from "./../img/star.svg"
import menuImage from "./../img/menu.svg"
import logoLightImage from "./../img/logo.png"

export const Header = () => {
	return (
		<header className="header">
			<img src={logoImage} className="logo" />
			<input
				type="text"
				className="input"
				placeholder="Ввести промокод"
			/>
			<a href="tel:88003333323" className="call">
				<img src={callImage} className="call" />
			</a>
			<img src={menuImage} className="menu" />

			<div className="menu-window">
				<div className="heading">
					<img src={logoLightImage} className="logo" />
					<div className="close">&times;</div>
				</div>

				<div className="content">
					<div className="location">
						<img src={starImage} className="location" />
						<div className="info">
							<div className="city">Абакан</div>
							<small>Изменить</small>
						</div>
					</div>
					<div className="nearest-stats">
						<div className="time">0 мин</div>
						<div className="stars">
							<img src={starImage} />
							<img src={starImage} />
							<img src={starImage} />
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
							<img src={androidImage} />
						</div>
						<div className="appstore">
							<img src={appleImage} />
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
