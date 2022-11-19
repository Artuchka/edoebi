import React from "react"

import starImage from "./../img/star.svg"
import infoImage from "./../img/info.svg"

export const Item = ({
	price,
	title: name,
	props,
	imageUrl,
	weight,
	starred,
	uuid,
	addToCart,
}) => {
	return (
		<div className="item">
			<img src={starImage} className="item__star has" />
			<img src={imageUrl} className="item__image" />
			<div className="item__desc">
				<div className="row">
					<div className="item__name">{name}</div>
					<img className="item__info" src={infoImage} />
					<div className="item__fats">
						<div className="fats__title">
							Пищевая ценность на 100 гр.
						</div>
						<div className="fats__prop">Энерг. ценность</div>
						<div className="fats__value">{props.energy}</div>
						<div className="fats__prop">Белки</div>
						<div className="fats__value">{props.b} гр</div>
						<div className="fats__prop">Жиры</div>
						<div className="fats__value">{props.j} гр</div>
						<div className="fats__prop">Углеводы</div>
						<div className="fats__value">{props.u} гр</div>
					</div>
				</div>
				<div className="row">
					<div className="item__weight">{weight} гр.</div>
					<button
						className="item__price btn btn--outlined"
						onClick={() =>
							addToCart({ price, name, imageUrl, weight, uuid })
						}
					>
						{Math.round(price / 100)} RUB
					</button>
				</div>
			</div>
		</div>
	)
}
