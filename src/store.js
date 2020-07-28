import { readable } from 'svelte/store';

const RECIPE_EVENT = 'RECIPE';
const RECIPE_PRINT = ':RECIPE_PRINT';
const SET_RECIPE = ':SET_RECIPE';
const isValidEvent = ({ data }) => data && data.messageType === RECIPE_EVENT;

const handleOnmessage = (set) => {
	return (e) => {
		if (isValidEvent(e) && e.data.type === SET_RECIPE) set(e.data.recipe);
	};
};

const initialRecipe = {
	title: '',
	ingredients: '',
	directions: '',
};

export const recipe = readable(initialRecipe, set => window.addEventListener('message', handleOnmessage(set)));

const handleOpenPrint = (e) => {
  if (isValidEvent(e) && e.data.type === RECIPE_PRINT) {
    window.print();
  }
};
window.addEventListener('message', handleOpenPrint);