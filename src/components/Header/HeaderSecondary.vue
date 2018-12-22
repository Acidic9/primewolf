<template>
	<div class="header-secondary">
		<BaseContainer class="full-height" padded>
			<BaseFlexContainer class="full-height">
				<HeaderSecondaryNav class="header-secondary-nav" />
				<HeaderSecondaryBalance class="header-secondary-balance" />
			</BaseFlexContainer>
		</BaseContainer>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import HeaderSecondaryNav from '@/components/Header/HeaderSecondary/HeaderSecondaryNav.vue'
import HeaderSecondaryBalance from '@/components/Header/HeaderSecondary/HeaderSecondaryBalance.vue'

@Component({
	components: {
		HeaderSecondaryNav,
		HeaderSecondaryBalance,
	},
})
export default class HeaderSecondary extends Vue {
}
</script>

<style lang="scss" scoped>
$NAV_HEIGHT: 72px;

.header-secondary {
	width: 100%;
	height: $NAV_HEIGHT;
	background-color: rgb(37, 37, 38);
	color: #cccccc;

	.header-secondary-nav {
		margin-right: auto;
	}

	.header-secondary-balance {
		margin-left: auto;
	}
}
</style>
