<template>
	<component :is="tag" class="base-flex-container" :style="styles">
		<slot />
	</component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class BaseFlexContainer extends Vue {
	@Prop({ default: 'div' }) public tag!: string
	@Prop({ default: 'row' }) public direction!: string
	@Prop(String) public placeContent!: string
	@Prop(String) public alignContent!: string
	@Prop(String) public justifyContent!: string
	@Prop(String) public justifyItems!: string
	@Prop(String) public alignItems!: string

	private get styles(): object {
		return {
			flexDirection: this.direction,
			placeContent: this.placeContent,
			alignContent: this.alignContent,
			justifyContent: this.justifyContent,
			justifyItems: this.justifyItems,
			alignItems: this.alignItems,
		}
	}
}
</script>

<style lang="scss" scoped>
.base-flex-container {
	display: flex;
}
</style>
