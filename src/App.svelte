<script>
	import { recipe } from './store.js';
</script>

<main class="font_8">
	<label class="owner">MIKAELA REUBEN | RECIPES</label>
	<h3 class="title">{$recipe.title}</h3>
	<div class="ingredients">
		<h4>INGREDIENTS:</h4>
		<p>{$recipe.ingredients}</p>
	</div>
	<div class="directions">
		<h4>DIRECTIONS:</h4>
		<p>{$recipe.directions}</p>
	</div>
</main>

<style>
	main {
  	display: none;
		margin-top: 50px;
		padding: 10%;
		grid-template-columns: 10% repeat(3, 1fr);
		gap: 10px;
	}
	.owner {
		letter-spacing: 0.1;
		font-size: 12px;
		grid-column: 1/5;
		margin-bottom: 30px
	}
	.title {
		grid-column: 1/5;
		margin-bottom: 45px;
	}
	.ingredients {
		grid-column: 2/3;
	}
	.directions {
		grid-column: 3/5;
	}
	h4 {
		font-size: 18px;
		margin-block-end: 0;
	}
	p {
		padding-block-start: 0.1em;
	}
	@media print {
		:global(body) {
			visibility: hidden;
		}
		main {
			display: grid;
			visibility: visible;
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}
	}
</style>
