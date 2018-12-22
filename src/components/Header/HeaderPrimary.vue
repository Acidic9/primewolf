<template>
	<div class="header-primary">
		<BaseContainer class="full-height" padded>
			<BaseFlexContainer class="base-flex-container full-height" align-items="center">
				<div class="logo">
					<img src="@/assets/images/logo.svg" alt="PRIMEwolf" />
				</div>
			</BaseFlexContainer>
		</BaseContainer>
	</div>
</template>

<style lang="scss" scoped>
$NAV_HEIGHT: 58px;

.header-primary {
	width: 100%;
	height: $NAV_HEIGHT;
	background-color: #3C3C3C;
	color: #cccccc;

	.base-flex-container {
	}

	.logo img {
		/* width: 200px; */
		height: $NAV_HEIGHT - 12;
	}
}
</style>
