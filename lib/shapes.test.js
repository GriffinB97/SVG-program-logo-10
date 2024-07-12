const { Triangle, Circle, Square } = require('./shapes');

test('Triangle render', () => {
  const shape = new Triangle('blue');
  expect(shape.render()).toBe('<svg width="300" height="200"><polygon points="150,10 10,190 290,190" fill="blue" /></svg>');
});

test('Circle render', () => {
  const shape = new Circle('red');
  expect(shape.render()).toBe('<svg width="300" height="200"><circle cx="150" cy="100" r="80" fill="red" /></svg>');
});

test('Square render', () => {
  const shape = new Square('green');
  expect(shape.render()).toBe('<svg width="300" height="200"><rect x="50" y="50" width="200" height="100" fill="green" /></svg>');
});
