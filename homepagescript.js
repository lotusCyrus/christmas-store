// JavaScript to dynamically generate grid cells
const container = document.querySelector('.grid-container');

// Number of cells in the grid
const numRows = 10;
const numCols = 10;
const numCells = numRows * numCols;

// Generate grid cells
for (let i = 0; i < numCells; i++) {
  const cell = document.createElement('div');
  cell.classList.add('grid-cell');
  container.appendChild(cell);
}
