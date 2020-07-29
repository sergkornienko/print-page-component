<script>
	import { recipe } from './store.js';
	console.log('app: ', $recipe);
</script>

<main>
	<label class="owner">MIKAELA REUBEN | RECIPES</label>
	<h3 class="title">{$recipe.title}</h3>
	<div class="container">
		<div class="ingredients">
			<h4 class="font_4">INGREDIENTS:</h4>
			<ul class="font_8">
				{#each $recipe.ingredients as ing}
					<li>{ing}</li>
				{/each}
			</ul>
		</div>
		<div class="directions">
			<h4 class="font_4">DIRECTIONS:</h4>
			<ul class="font_8">
				{#each $recipe.directions as dir}
					<li>{dir}</li>
				{/each}
			</ul>
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
		margin-top: 40px;
		margin-left: 40px;
	}
	.owner {
		letter-spacing: 0.1;
		font-size: 10px;
		margin-bottom: 30px
	}
	.title {
		margin-bottom: 45px;
		margin-top: 30px;
		font-size: 24px
	}
	.directions {
		margin-left: 15px;
	}
	h4 {
		font-size: 18px;
	}
	ul {
		list-style-type: none;
		margin-top: 1em;
		padding-inline-start: 0;
	}
	li {
		margin: 1em 0;
	}
	@media print {
		:global(body > *) {
			display: none;
		}
		:global(print-page) {
			display: block;
		}
		main {
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}
	}
</style>
