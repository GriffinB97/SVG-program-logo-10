class Shape {
  constructor(color) {
    this.color = color;
  }

  render() {
    throw new Error("Render method should be implemented in subclass");
  }
}

class Triangle extends Shape {
  render() {
    return `<svg width="300" height="200"><polygon points="150,10 10,190 290,190" fill="${this.color}" /></svg>`;
  }
}

class Circle extends Shape {
  render() {
    return `<svg width="300" height="200"><circle cx="150" cy="100" r="80" fill="${this.color}" /></svg>`;
  }
}

class Square extends Shape {
  render() {
    return `<svg width="300" height="200"><rect x="50" y="50" width="200" height="100" fill="${this.color}" /></svg>`;
  }
}

module.exports = { Shape, Triangle, Circle, Square };
