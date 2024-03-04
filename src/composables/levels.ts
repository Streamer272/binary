export interface Level {
  name: string;
  generate: () => Problem;
}

export interface Problem {
  a: number;
  operator: string;
  b: number;
  answer: number;
}

export function random(max: number) {
  return Math.floor(Math.random() * max);
}

function AdditionLevel(level: 1 | 2 | 3): Level {
  return {
    name: `Addition Level ${level}`,
    generate: () => {
      const a = random(2 ** (4 * level));
      const b = random(2 ** (4 * level));
      const answer = a + b;

      return { a, operator: "+", b, answer };
    },
  };
}

function SubtractionLevel(level: 1 | 2 | 3): Level {
  return {
    name: `Subtraction Level ${level}`,
    generate: () => {
      const a = random(2 ** (4 * level));
      const b = random(2 ** (4 * level));
      const answer = a - b;

      return { a, operator: "-", b, answer };
    },
  };
}

function MultiplicationLevel(level: 1 | 2): Level {
  return {
    name: `Multiplication Level ${level}`,
    generate: () => {
      const a = random(2 ** (4 * level));
      const b = random(2 ** (4 * level));
      const answer = a * b;

      return { a, operator: "*", b, answer };
    },
  };
}

function DivisionLevel(level: 1 | 2): Level {
  return {
    name: `Division Level ${level}`,
    generate: () => {
      const a = random(2 ** (4 * level));
      const b = random(2 ** (4 * level));
      const answer = a / b;

      return { a, operator: "/", b, answer };
    },
  };
}

export const levels: Level[] = [
  AdditionLevel(1),
  SubtractionLevel(1),
  AdditionLevel(2),
  SubtractionLevel(2),
  AdditionLevel(3),
  SubtractionLevel(3),
  MultiplicationLevel(1),
  DivisionLevel(1),
  MultiplicationLevel(2),
  DivisionLevel(2),
];
