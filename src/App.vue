<template>
	<div id="app">
			<TheHeader />
			<BaseContainer padded>
				<router-view/>
			</BaseContainer>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import TheHeader from '@/components/TheHeader.vue'

@Component({
	components: {
		TheHeader,
	},
})
export default class App extends Vue {
}
</script>

<style lang="scss">
@import '~@/assets/styles/base';

/* #app {
	color: #2c3e50;
	text-align: center;
	font-family: "Avenir", Helvetica, Arial, sans-serif;

	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
#nav {
	padding: 30px;
	a {
		color: #2c3e50;
		font-weight: bold;
		&.router-link-exact-active {
			color: #42b983;
		}
	}
} */
</style>
