<template>
	<StyledGridContainer :style="styles">
		<slot />
	</StyledGridContainer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class BaseGridContainer extends Vue {
	@Prop(String) public templateColumns!: string
	@Prop(String) public templateRows!: string
	@Prop(String) public templateAreas!: string
	@Prop(String) public autoColumns!: string
	@Prop(String) public autoRows!: string
	@Prop(String) public autoFlow!: string
	@Prop(String) public rowGap!: string
	@Prop(String) public columnGap!: string
	@Prop(String) public gap!: string
	@Prop(String) public placeContent!: string
	@Prop(String) public alignContent!: string
	@Prop(String) public justifyContent!: string
	@Prop(String) public justifyItems!: string
	@Prop(String) public alignItems!: string

	private get styles(): object {
		return {
			gridTemplateColumns: this.templateColumns,
			gridTemplateRows: this.templateRows,
			gridTemplateAreas: this.templateAreas,
			gridAutoColumns: this.autoColumns,
			gridAutoRows: this.autoRows,
			gridAutoFlow: this.autoFlow,
			gridRowGap: this.rowGap,
			gridColumnGap: this.columnGap,
			gridGap: this.gap,
			placeContent: this.placeContent,
			alignContent: this.alignContent,
			justifyContent: this.justifyContent,
			justifyItems: this.justifyItems,
			alignItems: this.alignItems,
		}
	}
}
</script>
