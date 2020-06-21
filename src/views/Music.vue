<template>
	<div class="home">
		<Player></Player>
	</div>
</template>

<script>
  import Player from '../components/player/player'
  export default {
    name: 'player',
    components: {
      Player
    }
  }
</script>
<style lang="scss" scoped>
	.home {
		position: relative;
		z-index: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		background-color: #ffedff;
	}
</style>
