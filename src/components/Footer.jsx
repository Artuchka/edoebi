import React from "react"

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__content">
				<div className="nav-form-contacts">
					<nav className="nav">
						<ul className="nav__commerce nav__list">
							<li className="nav__item">О компании</li>
							<li className="nav__item">Доставка</li>
							<li className="nav__item">Акции</li>
							<li className="nav__item">Франшиза</li>
						</ul>
						<ul className="nav__documents nav__list">
							<li className="nav__item">Инвестиции</li>
							<li className="nav__item">Правовые документы</li>
						</ul>
					</nav>
					<form className="subscribe-form">
						<small>
							Подпишись на рассылкуи будь в курсе всех акций!{" "}
						</small>
						<div className="row row--input">
							<input
								type="email"
								className="input"
								placeholder="Введите ваш E-mail"
							/>
							<button className="btn btn--solid">
								Подписаться
							</button>
						</div>
						<div className="row">
							<input type="checkbox" id="get" />
							<span>
								Я согласен получать информацию о проводимых
								акциях и специальных предложениях
							</span>
						</div>
						<div className="row">
							<input type="checkbox" id="get" />
							<span>
								Я согласен на обработку своих персональных
								данных
							</span>
						</div>
					</form>
					<div className="contacts">
						<div className="get-order-status">
							<small>узнать свой статус заказа: </small>
							<a className="call" href="tel:88003333323">
								8 800 333 33 23{" "}
							</a>
						</div>
						<div className="places-list">
							<small>Приморский пр-кт, 137 корп.1 </small>
							<small>ул. Крижижановского, 8</small>
							<small>
								Малый проспект Васильевского острова 63/14{" "}
							</small>
							<a href="#">Смотреть на карте</a>
						</div>
					</div>
				</div>
				<div className="apps-stats-cards">
					<div className="apps-stats">
						<div className="apps">
							<div className="playstore">
								<img src="./img/cards/andriod.svg" />
							</div>
							<div className="appstore">
								<img src="./img/cards/apple.svg" />
							</div>
						</div>
						<div className="stats">
							<small>
								{" "}
								Выручка российской сети в этом месяце
								106,967,735 ₽.
							</small>
							<small>В прошлом — 148,226,204 ₽</small>
						</div>
					</div>
					<div className="cards">
						<small className="cards__title">Мы работаем с: </small>
						<div className="cards__list">
							<img
								src="./img/cards/mir.svg"
								className="cards__item"
							/>
							<img
								src="./img/cards/visa.svg"
								className="cards__item"
							/>
							<img
								src="./img/cards/mastercard.svg"
								className="cards__item"
							/>
							<img
								src="./img/cards/apple.svg"
								className="cards__item"
							/>
							<img
								src="./img/cards/andriod.svg"
								className="cards__item"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="copyright">
				<div className="copyright__inner">
					<div className="company">© 2022, ЁбиДоёби</div>
					<img src="./img/vk.svg" />
				</div>
			</div>
		</footer>
	)
}
