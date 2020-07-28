import { readable } from 'svelte/store';

const RECIPE_EVENT = 'RECIPE';
const RECIPE_PRINT = ':RECIPE_PRINT';
const SET_RECIPE = ':SET_RECIPE';
const isValidEvent = ({ data }) => data && data.messageType === RECIPE_EVENT;

const handleOnmessage = (set) => {
	return (e) => {
		if (isValidEvent(e) && e.data.type === SET_RECIPE) set(e.data);
	};
};

const initialRecipe = {
	title: 'VEGETABLE FRITTATA',
	ingredients: `150 mls raw honey\n
  150 mls hot water\n
  1 tablesoon lemon juice (approx. 1 lemon)
  1/8 cup of goji berries
  3 cups of fresh picked blackberries`,
	directions: `1. Cut the top off of the coconut, drain milk and scoop out meat.
  2. Dice mushrooms and coconut meat into small pieces.
  3. Boil 4 cups of water.
  4. Once the water is boiling, turn off heat and soak noodles until the noodles are cooked, strain and rinse with cold water and let dry.
  5. Add the ginger, lime juice, fish sauce, and toasted sesame oil to a bowl with coconut and mushrooms.
  6. Peel the carrot skin off, then continue to peel the rest of the carrot into thin slices.
  7. Peel the outside of the cucumber and continue to peel pieces until you reach the fleshy inside.
  8. Put the strained noodles into the bowl and cut into smaller pieces with scissors.
  9. Stir all ingredients together and add more sesame, lime, or fish sauce to taste.
  10. Cut the avocado into thin pieces.
  11. Chop spinach into thin strips.`,
};

export const recipe = readable(initialRecipe, set => window.addEventListener('message', handleOnmessage(set)));

const handleOpenPrint = (e) => {
  if (isValidEvent(e) && e.data.type === RECIPE_PRINT) {
    window.print();
  }
};
window.addEventListener('message', handleOpenPrint);