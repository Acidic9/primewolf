<template>
	<nav class="full-height">
		<BaseFlexContainer class="full-height">
			<HeaderSecondaryNavItem
				icon="https://img.icons8.com/color/1600/european-roulette.png"
				:active="active === 'roulette'"
				@click.native="setActive('roulette')"
			>
				Roulette
			</HeaderSecondaryNavItem>
			<HeaderSecondaryNavItem
				icon="http://icons.iconarchive.com/icons/google/noto-emoji-activities/1024/52764-slot-machine-icon.png"
				:active="active === 'slot'"
				@click.native="setActive('slot')"
			>
				Slot
			</HeaderSecondaryNavItem>
			<HeaderSecondaryNavItem
				icon="https://www.whitakerbrothers.com/blog/wp-content/uploads/2017/09/Casino-Playing-Cards-icon-inverted.png"
				:active="active == 'crash'"
				@click.native="setActive('crash')"
			>
				Crash
			</HeaderSecondaryNavItem>
		</BaseFlexContainer>
	</nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import HeaderSecondaryNavItem from '@/components/Header/HeaderSecondary/HeaderSecondaryNav/HeaderSecondaryNavItem.vue'

@Component({
	components: {
		HeaderSecondaryNavItem,
	},
})
export default class HeaderSecondaryNav extends Vue {
	public active: string = 'roulette'

	private setActive(active: string) {
		this.active = active
	}
}
</script>
