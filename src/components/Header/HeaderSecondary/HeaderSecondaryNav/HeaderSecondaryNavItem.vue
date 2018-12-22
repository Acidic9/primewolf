<template>
	<BaseFlexContainer tag="a" class="header-nav-item" direction="column" align-items="center" justify-content="center" :class="classes">
		<img :src="icon" class="icon" />
		<span class="label">
			<slot />
		</span>
	</BaseFlexContainer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HeaderSecondaryNavItem extends Vue {
	@Prop(String) public icon!: string
	@Prop(Boolean) public active!: boolean

	private get classes(): object {
		return {
			active: this.active,
		}
	}
}
</script>

<style lang="scss" scoped>
.header-nav-item {
	background-color: rgb(45, 45, 45);
	border-right: 1px solid rgb(37, 37, 38);
	padding: 0 40px;
	font-size: 18px;
	text-transform: uppercase;
	font-weight: bold;
	cursor: pointer;
	transition: color 0.1s;

	&:hover {
		color: #eeeeee;

		.icon {
			transform: rotate(360deg);
		}
	}

	&.active {
		background-color: rgb(30, 30, 30);
		border-color: rgb(37, 37, 38);
	}

	.icon {
		width: 32px;
		height: 32px;
		margin-bottom: 1px;
		transition: transform 0.4s ease-in-out;
	}
}
</style>
