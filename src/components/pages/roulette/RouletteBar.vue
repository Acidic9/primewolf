<template>
	<div class="roulette-bar">
		<template v-show="coinsImageWidth">
			<div class="coins" ref="coins" :style="styles"></div>
			<div class="middle-marker"></div>

			<BaseFlexContainer class="previous-rolls" justify-content="center">
				<div class="label">Previous rolls</div>
				<div class="previous-rolls__coins">
					<!-- <transition-group name="fade" tag="div" > -->
							<img v-for="(roll, index) in previousRolls" :src="getRollImage(roll)" :key="index" @click="slideToCoin(roll)" />
					<!-- </transition-group> -->
				</div>
			</BaseFlexContainer>
		</template>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import getBackgroundImageDimensions from '@/utils/getBackgroundImageDimensions'
import randomIntBetween from '@/utils/randomIntBetween'
import randomFloatBetween from '@/utils/randomFloatBetween'
import roundToClosestMultiple from '@/utils/roundToClosestMultiple'
import { CoinType } from '@/types/coins'

@Component
export default class RouletteBar extends Vue {
	// Data
	previousRolls: number[] = [0, 1, 1, 0, 2, 0, 1, 0, 1, 1]
	coinsBackgroundPosition: number = 0
	isRunning: boolean = false
	transitionDuration: number = 0
	transitionTimingFunction: number[] = [.92, -0.27, .49, .9]
	coinsImageWidth: number = 0

	// Events
	async mounted() {
		this.coinsImageWidth = (await getBackgroundImageDimensions(this.$refs.coins as HTMLElement, 'height')).width

		// Scroll to jackpot coin
		// this.slideTo(-(1 * this.singleCoinWidth), 0, true, this.reset, 500) // From
		// this.slideTo((3 * this.singleCoinWidth), 0, true, this.reset, 500) // From
		// setInterval(() => {
		this.slideToCoin(CoinType.Dark, 7).then(() => {
				setTimeout(this.reset, 2000)
			})
		// }, 15000)
	}

	// Computed
	get singleCoinWidth(): number {
		return this.coinsImageWidth / 15
	}

	get coinsImage(): NodeRequire {
		return require('@/assets/images/roulette/coins.png')
	}

	get styles(): object {
		return {
			backgroundImage: `url('${this.coinsImage}')`,
			backgroundPositionX: `calc(50% - ${this.coinsBackgroundPosition + ((this.coinsImageWidth / 2) || 0)}px)`,
			transitionDuration: `${this.transitionDuration}s`,
			transitionTimingFunction: `cubic-bezier(${this.transitionTimingFunction.join(',')})`,
		}
	}

	// Methods
	getRollImage(type: number) {
		switch (type) {
			case 0:
				return require('@/assets/images/roulette/coin-1.webp')
			case 1:
				return require('@/assets/images/roulette/coin-2.webp')
			case 2:
				return require('@/assets/images/roulette/coin-jackpot.webp')
		}
	}

	slideTo(
		x: number,
		duration: number,
		longSpin: boolean = true,
		timingFunction: number[] = [0.12, 0, 0.12, 1],
	): Promise<null> {
		return new Promise<null>((resolve) => {
			if (longSpin) {
				x += this.coinsImageWidth * 4
			}

			const isXDifferent = x !== this.coinsBackgroundPosition

			this.transitionDuration = duration
			this.isRunning = true
			this.coinsBackgroundPosition = x
			this.transitionTimingFunction = timingFunction

			const transitionEndCallback = () => {
				if (isXDifferent) {
					(this.$refs.coins as HTMLElement).removeEventListener('transitionend', transitionEndCallback)
				}

				this.isRunning = false

				resolve()
			}

			if (isXDifferent) {
				(this.$refs.coins as HTMLElement).addEventListener('transitionend', transitionEndCallback)
			} else {
				// x didn't move, just use a set timeout
				setTimeout(transitionEndCallback, duration * 1000)
			}
		})
	}

	slideToCoin(coinType: CoinType, duration: number = 7, longSpin: boolean = true) {
		const PADDING = 8 // 10px padding left and right of coin

		const lightCoinIndexes = [
			[
				-(3 * this.singleCoinWidth),
				-(2 * this.singleCoinWidth),
			],
			[
		 		0 * this.singleCoinWidth,
		 		1 * this.singleCoinWidth,
			],
			[
				2 * this.singleCoinWidth,
				3 * this.singleCoinWidth,
			],
		]

		const darkCoinIndexes = [
			[
				-(4 * this.singleCoinWidth),
				-(3 * this.singleCoinWidth),
			],
			[
				-(2 * this.singleCoinWidth),
				-(1 * this.singleCoinWidth),
			],
			[
				1 * this.singleCoinWidth,
				2 * this.singleCoinWidth,
			],
		]

		const jackpotCoinIndexes = [
			[
				-(1 * this.singleCoinWidth),
				-(0 * this.singleCoinWidth),
			],
		]

		let xRange
		switch (coinType) {
			case CoinType.Light:
				xRange = lightCoinIndexes[randomIntBetween(0, lightCoinIndexes.length - 1)]
				break

			case CoinType.Dark:
				xRange = darkCoinIndexes[randomIntBetween(0, darkCoinIndexes.length - 1)]
				break

			case CoinType.Jackpot:
				xRange = jackpotCoinIndexes[randomIntBetween(0, jackpotCoinIndexes.length - 1)]
				break
		}

		const randomX = randomFloatBetween(xRange[0] + PADDING, xRange[1] - PADDING)
		return this.slideTo(randomX, duration, longSpin)
	}

	reset() {
		const centerIntervals = this.coinsImageWidth
		const centerOffset = -(this.singleCoinWidth / 2)
		const nearestMiddle = roundToClosestMultiple(this.coinsBackgroundPosition, centerIntervals) + centerOffset

		this.slideTo(nearestMiddle, 0.5, false, [1, -0.41, 0.61, 0.94]).then(() => {
			this.slideTo(centerOffset, 0, false)
		})
	}
}
</script>

<style lang="scss" scoped>
$COINS_HEIGHT: 100px;

.roulette-bar {
	position: relative;

	.coins {
		width: 100%;
		height: $COINS_HEIGHT;
		background-size: auto 100%;
		background-position: auto center;
		transition: background-position-x 7s cubic-bezier(0.12, 0, 0.12, 1); // cubic-bezier(0.130, 1.000, 0.965, 0.995);// cubic-bezier(0.13, 0.35, 0.53, 1);
		max-width: 1014px;
		margin: 0 auto;
		position: relative;
		background-color: linear-gradient(to bottom, rgba(60,60,60,0) 0%,rgba(60,60,60,0.27) 50%,rgba(60,60,60,0) 100%);

		&::before,
		&::after {
			content: '';
			position: absolute;
			width: 2px;
			height: 100%;
			top: 0;
			background-color: #df9c3c;
		}

		&::before {
			left: -2px;
		}

		&::after {
			right: -2px;
		}
	}

	.middle-marker {
		position: absolute;
		top: 0;
		left: 50%;
		width: 4px;
		height: $COINS_HEIGHT;
		background-color: #C8373C;
		transform: translateX(-50%);
	}

	.previous-rolls {
		padding: 32px;
		justify-content: center;
		align-items: center;

		.label {
			text-transform: uppercase;
			font-size: 14px;
			opacity: 0.8;
			margin: 0 10px;
		}

		.previous-rolls__coins {
			img {
				width: 26px;
				height: 26px;
				margin: 0 4px;
			}
		}
	}
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
