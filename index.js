'use strict'

// const myHeading = h1('some text');
// const { h1 } = tags;

// const node = document.getElementById('some id');

// node.appendChild(myHeading);

// const meals = [
//   { description: "Breakfast", calories: 400 },
//   { description: "Breakfast2", calories: 420 },
//   { description: "Breakfast3", calories: 460 },
//   { description: "Breakfast4", calories: 480 },
// ];

// const { td, th, tr, tbody } = tags;

// function cell(tag, className, value) {
//   return tag({ className }, value);
// };

// function mealRow(className, meal) {
//   return tr({ className }, [
//     cell(td, 'pa2', meal.description),
//     cell(td, 'pa2 tr', meal.calories),
//   ]);
// };

// function mealBody(className, meals) {
//   const rows = R.map(R.partial(mealRow, ['stripe-dark']), meals);
//   return tbody({ className }, rows);
// }
// const node = document.getElementById('app');

// const view = mealBody('', meals);

// node.appendChild(view);

// // the whole solution:

const meals = [
  { description: 'Breakfast', calories: 460 },
  { description: 'Snack', calories: 180 },
  { description: 'Lunch', calories: 600 },
];

// destructuring expression
const { td, th, tr, tbody, thead, table } = tags;

function cell(tag, className, value) {
  return tag({ className }, value);
}

function mealRow(className, meal) {
  return tr({ className }, [
    cell(td, 'pa2', meal.description),
    cell(td, 'pa2 tr', meal.calories),
  ]);
}

function mealsBody(className, meals) {
  const rows = R.map(R.partial(mealRow, ['stripe-dark']), meals);
  const rowsWithTotal = R.append(totalRow(meals), rows)
  return tbody({ className }, rowsWithTotal);
}

const headerRow = tr([
  cell(th, 'pa2 tl', 'Meal'),
  cell(th, 'pa2 tr', 'Calories'),
]);

const mealHeader = thead(headerRow);

function totalRow(meals) {
  const total = R.pipe(
    R.map(meal => meal.calories),
    R.reduce((acc, calories) => acc + calories, 0),
  )(meals);
  return tr({ className: 'bt b' }, [
    cell(td, 'pa2 tl', 'Total:'),
    cell(td, 'pa2 tr', total),
  ]);
};

function mealsTable(meals) {
  return table({ className: 'mw5 center w-100' }, [
    mealHeader,
    mealsBody('', meals),
  ]);
};

const node = document.getElementById('app');

const view = mealsTable(meals);

node.appendChild(view);