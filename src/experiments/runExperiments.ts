import { nearestNeighbor } from "../tsp/nearestNeighbor";

function randomMatrix(n: number) {
  const m: number[][] = [];

  for (let i = 0; i < n; i++) {
    m[i] = [];

    for (let j = 0; j < n; j++) {
      if (i === j) m[i][j] = 0;
      else m[i][j] = Math.floor(Math.random() * 100);
    }
  }

  return m;
}

function experiment(size: number) {
  const results = [];

  for (let i = 0; i < 30; i++) {
    const matrix = randomMatrix(size);

    const start = performance.now();

    nearestNeighbor(matrix);

    const end = performance.now();

    results.push(end - start);
  }

  const avg = results.reduce((a, b) => a + b, 0) / results.length;

  console.log(`Tamanho: ${size}`);
  console.log(`Tempo médio: ${avg.toFixed(4)} ms`);
}

export function runExperiments() {
  experiment(10);
  experiment(50);
  experiment(100);
}
