<script>
	import { recipe } from './store.js';
</script>

<main class="font_8">
	<label class="owner">MIKAELA REUBEN | RECIPES</label>
	<h3 class="title">{$recipe.title}</h3>
	<div class="container">
		<div class="ingredients">
			<h4>INGREDIENTS:</h4>
			<p>{$recipe.ingredients}</p>
		</div>
		<div class="directions">
			<h4>DIRECTIONS:</h4>
			<p>{$recipe.directions}</p>
		</div>
	</div>
</main>

<style>
	main {
  	display: none;
		margin-top: 15px;
		padding: 0 10%;
	}
	.container {
		display: flex;
		margin-left: 40px;
	}
	.owner {
		letter-spacing: 0.1;
		font-size: 10px;
		margin-bottom: 30px
	}
	.title {
		margin-bottom: 45px;
		font-size: 24px
	}
	.directions {
		margin-left: 15px;
	}
	h4 {
		font-size: 18px;
	}
	p {
		padding-block-start: 0.1em;
	}
	@media print {
		:global(body) {
			visibility: hidden;
		}
		main {
			display: block;
			visibility: visible;
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}
	}
</style>
