import React from "react"

import logoImage from "./../img/logo.png"
import callImage from "./../img/call.svg"
import androidImage from "./../img/cards/andriod.svg"
import appleImage from "./../img/cards/apple.svg"
import starImage from "./../img/star.svg"
import menuImage from "./../img/menu.svg"
import logoLightImage from "./../img/logo.png"
import { useState } from "react"
import { Link } from "react-router-dom"

export const Header = () => {
	const [openMenu, setOpenMenu] = useState(false)

	return (
		<header className="header">
			<Link to="/">
				<img src={logoImage} className="logo" />
			</Link>
			<input
				type="text"
				className="input"
				placeholder="Ввести промокод"
			/>
			<a href="tel:88003333323" className="call">
				<img src={callImage} className="call" />
			</a>
			<img
				src={menuImage}
				className="menu"
				onClick={() => setOpenMenu(true)}
			/>

			<div className={`menu-window ${openMenu ? "open" : ""}`}>
				<div className="heading">
					<Link to="/">
						<img src={logoLightImage} className="logo" />
					</Link>
					<div className="close" onClick={() => setOpenMenu(false)}>
						&times;
					</div>
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
								<Link
									to="/login"
									className="nav__item"
									onClick={() => setOpenMenu(false)}
								>
									Вход и регистрация
								</Link>
							</li>
							<li>
								<Link
									to="/stocks"
									className="nav__item"
									onClick={() => setOpenMenu(false)}
								>
									Акции
								</Link>
							</li>
							<li>
								<Link
									to="/franchise"
									className="nav__item"
									onClick={() => setOpenMenu(false)}
								>
									Франшиза
								</Link>
							</li>
							<li>
								<Link
									to="/investitions"
									className="nav__item"
									onClick={() => setOpenMenu(false)}
								>
									Инвестиции
								</Link>
							</li>
							<li>
								<Link
									to="/documents"
									className="nav__item"
									onClick={() => setOpenMenu(false)}
								>
									Правовые документы
								</Link>
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
