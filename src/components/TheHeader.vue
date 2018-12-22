<template>
	<header class="the-header">
		<HeaderPrimary />
		<HeaderSecondary />
	</header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import HeaderPrimary from '@/components/Header/HeaderPrimary.vue'
import HeaderSecondary from '@/components/Header/HeaderSecondary.vue'

@Component({
	components: {
		HeaderPrimary,
		HeaderSecondary,
	},
})
export default class TheHeader extends Vue {
}
</script>
