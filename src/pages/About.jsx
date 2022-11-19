import React from "react"

export const About = () => {
	return (
		<div className="content">
			<h2 className="content__title">О компании</h2>
			<div className="content__main">
				<p className="content__text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quibusdam nisi nobis culpa nesciunt, illo earum repudiandae
					laboriosam aspernatur cupiditate assumenda at unde ratione
					iure. Fugiat non commodi impedit necessitatibus illum?
				</p>
				<p className="content__text">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Obcaecati, consectetur?
				</p>
				<p className="content__text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Eaque molestiae id aspernatur distinctio quia in impedit
					officiis rem ut recusandae.
				</p>

				<div className="content__pictures">
					<img src="./about/1.png" alt="first pic" />
					<img src="./about/2.png" alt="second pic" />
				</div>
			</div>
		</div>
	)
}
