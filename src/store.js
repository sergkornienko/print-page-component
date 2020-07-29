import { readable } from 'svelte/store';

const RECIPE_EVENT = 'RECIPE';
const RECIPE_PRINT = ':RECIPE_PRINT';
const SET_RECIPE = ':SET_RECIPE';
const isValidEvent = ({ data }) => data && data.messageType === RECIPE_EVENT;

const initialRecipe = {
	title: 'Test',
  directions: [
    '1. Soak goji berries in water while you prepare the rest, and until they have softened.',
    '2. Boil water.'
  ],
  ingredients: [
    '150 mls raw honey',
    '150 mls hot water'
  ],
};

export const recipe = readable(initialRecipe, (set) => {
  window.addEventListener('message', (e) => {
    if (isValidEvent(e) && e.data.type === SET_RECIPE) {
      const item = {
        title: e.data.recipe.title,
        directions: (e.data.recipe.directions || '').split(/↵|\n/g),
        ingredients: (e.data.recipe.ingredients || '').split(/↵|\n/g),
      }
      set(item);
    }
  })
});

const handleOpenPrint = (e) => {
  if (isValidEvent(e) && e.data.type === RECIPE_PRINT) {
    const p = document.querySelector('print-page');
    document.body.appendChild(p);
    setTimeout(() => {
      window.print();
    }, 500);
  }
};
window.addEventListener('message', handleOpenPrint);
