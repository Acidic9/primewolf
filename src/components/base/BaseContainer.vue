<template>
	<div class="base-container" :class="classes">
		<slot />
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class BaseContainer extends Vue {
	@Prop(Boolean) public padded!: boolean

	private get classes(): object {
		return {
			padded: this.padded,
		}
	}
}
</script>

<style lang="scss" scoped>
.base-container {
	max-width: 1400px;
	min-width: 920px;
	margin-left: auto;
	margin-right: auto;

	&.padded {
		padding-left: 20px;
		padding-right: 20px;
	}
}
</style>
