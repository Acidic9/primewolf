<template>
	<div class="roulette">
		<RouletteBar />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import RouletteBar from '@/components/pages/roulette/RouletteBar.vue'

@Component({
	components: {
		RouletteBar,
	},
})
export default class Roulette extends Vue {
}
</script>
