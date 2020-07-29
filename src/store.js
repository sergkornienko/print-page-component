import { readable } from 'svelte/store';

const RECIPE_EVENT = 'RECIPE';
const RECIPE_PRINT = ':RECIPE_PRINT';
const SET_RECIPE = ':SET_RECIPE';
const isValidEvent = ({ data }) => data && data.messageType === RECIPE_EVENT;

const initialRecipe = {
	title: 'Test',
  directions: [
    '1. Preheat oven to 375°F.',
'2. Toss yams with the oil, salt and chili powder.',
'3. Spread yams on parchment paper on a baking sheet and bake until tender. Check at 20 minutes and go from there.',
'4. Rinse the asparagus spears and break the tough ends off on the bottom.',
'5. Line a roasting pan with parchment. Arrange the asparagus spears in a single layer.',
'6. Drizzle with olive oil and rub the spears to coat. Sprinkle with salt, pepper, and minced garlic, and rub over the asparagus spears to evenly distribute.',
'7. Roast at 375°F for 10 minutes, more or less, depending on your particular oven and how thick the spears are, until the asparagus are lightly browned and tender when you pierce them with a fork.',
'8. Drizzle with lemon juice.',
'9. Turn oven to 350°F.',
'10. Add 1 tablespoon of olive oil into pan and add the onions. Cook until translucent, around 6 minutes.',
'11. Add 1/2 teaspoon smoked paprika, 1/2 teaspoon pepper, 1/2 teaspoon sea salt, and cilantro.',
'12. Add broccoli to the pan and saute until well flavored and cooked through.',
'13. Add garlic, chopped asparagus, roasted yam, tamari, lemon zest, oregano and onion powder. Mix thoroughly then add spinach and allow to wilt. At this point taste and season as you desire.',
'14. In a separate bowl scramble eggs well then add to vegetables and stir thoroughly.',
'15. Put into the oven and bake. Check at 20. Will take up to 30-35.',
'16. Will be done when a knife can be poked through the centre and come out relatively clean.'
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
