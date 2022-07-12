const gridHead = document.querySelector('.header');
const gridLabel = document.querySelector('.label');
const gridContainer = document.querySelector('.grid-container')

let wallSize = 16;

const sketchCell = () => this.classList.add("activeCell");

function resizeGrid () {

	let newSize = prompt("Please enter a new grid size.", "2 - 100 only" );

	const currentField = document.querySelectorAll('.grid-column');
	for(let i=0;, i< currentField.length; i++)
		{currentField[i].remove();}

	for(let c = 0; c < newSize; c++)
	{	
		const newCol = document.createElement("div");
		newCol.classList.add("grid-column");
		gridContainer.appendChild(newCol);

		for(let r = 0; r < newSize; r++)
		{
			const newCell = document.createElement("div");
			newCell.classList.add("grid-cell");
			newCell.addEventListener('mouseenter', () => this.classList.add("activeCell"));
			newCol.appendChild(newCell);
		}
	}
}

const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', resizeGrid);