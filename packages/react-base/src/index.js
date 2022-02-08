/*
 * Reaction: A re-introduction to React.
 *
 *
 */
import React from "react"
import ReactDOM from "react-dom"
// import './assets/styles/tailwind.output.css'
// import App from "./App.js"

/*const page = (
	<div>
		<header>
			<nav>
				<img src="./logo.png" width="40px" />
			</nav>
		</header>
		<h1>Reaction</h1>
		<h3>The Re-Introduction to React</h3>
		<ol>
			<li>Composable</li>
			<li>Declarative</li>
			<li>Three</li>
			<li>Four</li>
			<li>Five</li>
		</ol>
		<footer>
			<p>(c) 2022 The Dark Society Development. All Rights Reserved.</p>
		</footer>
	</div>
)*/

function Header() {
	return (
		<header>
			<nav>
				<img src="./logo.png" width="40px" />
			</nav>
		</header>
	)
}

function MainContent() {
	return (
		<div>
			<h1>Reaction</h1>
			<h3>The Re-Introduction to React</h3>
			<ol>
				<li>Composable</li>
				<li>Declarative</li>
				<li>Three</li>
				<li>Four</li>
				<li>Five</li>
			</ol>
		</div>
	)
}

function Footer() {
	return (
		<footer>
			<p>(c) 2022 The Dark Society Development. All Rights Reserved.</p>
		</footer>
	)
}

function Page() {
	return (
		<div>
			<Header />
			<MainContent />
			<Footer />
		</div>
	)
}

ReactDOM.render(
	//page,
	<Page />,
	document.getElementById("root")
)
