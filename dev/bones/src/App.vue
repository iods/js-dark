<template>
	<div>
		<div class="fixed w-full inset-x-0 top-0 bg-blue-400">
			<p>Test</p>
		</div>
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</div>
		<router-view/>
	</div>
</template>

<style lang="scss" src="./assets/styles/styles.scss" />
