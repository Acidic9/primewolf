<template>
	<BaseFlexContainer direction="column" justify-content="center" align-items="flex-end" class="header-secondary-balance full-height">
		<div class="label">Estimated Balance</div>
		<div class="value monospace">1.43230000 BTC</div>
	</BaseFlexContainer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HeaderSecondaryBalance extends Vue {
}
</script>

<style lang="scss" scoped>
.header-secondary-balance {
	text-align: right;

	.label {
		font-size: 12px;
		text-transform: uppercase;
	}

	.value {
		font-size: 18px;
		font-weight: bold;
	}
}
</style>

