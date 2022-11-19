import React from "react"

import documentImage from "./../img/document.svg"

export const Documents = () => {
	return (
		<>
			<div className="content">
				<h2 className="content__title">Правовые документы</h2>
				<div className="content__main">
					<div className="document-card">
						<ul className="documents-list">
							<li className="document">
								<img src={documentImage} alt="document icon" />
								<span>Калорийность и составы</span>
							</li>
							<li className="document">
								<img src={documentImage} alt="document icon" />
								<span>Акции ебиодеби</span>
							</li>
							<li className="document">
								<img src={documentImage} alt="document icon" />
								<span>Пользовательское соглашение</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}
