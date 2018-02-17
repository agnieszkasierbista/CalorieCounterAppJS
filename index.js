'use strict'

// const myHeading = h1('some text');
// const { h1 } = tags;

// const node = document.getElementById('some id');

// node.appendChild(myHeading);

const meals = [
  { description: "Breakfast", calories: 400 },
  { description: "Breakfast2", calories: 420 },
  { description: "Breakfast3", calories: 460 },
  { description: "Breakfast4", calories: 480 },
];

const { td, th, tr, tbody } = tags;

function cell(tag, className, value) {
  return tag({ className }, value);
};

function mealRow(className, meal) {
  return tr({ className }, [
    cell(td, 'pa2', meal.description),
    cell(td, 'pa2 tr', meal.calories),
  ]);
};

function mealBody(className, meals) {
  const rows = R.map(R.partial(mealRow, ['stripe-dark']), meals);
  return tbody({ className }, rows);
}
const node = document.getElementById('app');

const view = mealBody('', meals);

node.appendChild(view);

