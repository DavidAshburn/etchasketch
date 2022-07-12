const gridHead = document.querySelector('.header');
const gridLabel = document.querySelector('.label');
const gridContainer = document.querySelector('.grid-container')
const resetBtn = document.querySelector('.reset');
const clearBtn = document.querySelector('.clear');
const rainbowBtn = document.querySelector('.rainbow');


function startGrid () {

	let newSize = 16;

	const currentField = document.querySelectorAll('.grid-column');
	for(let i=0; i< currentField.length; i++)
		{currentField[i].remove();}

	for(let c = 0; c < newSize; c++)
	{	
		const newCol = document.createElement("div");
		newCol.classList.add("grid-column");
		gridContainer.appendChild(newCol);

		for(let r = 0; r < newSize - 5; r++)
		{
			const newCell = document.createElement("div");
			newCell.classList.add("grid-cell");
			newCell.addEventListener('mouseover', () => newCell.classList.add("activeCell"));
			
			newCol.appendChild(newCell);
		}
	}
}

function resizeGrid () {

	let newSize = prompt("Please enter a new grid size. 2 - 100");

	const currentField = document.querySelectorAll('.grid-column');
	for(let i=0; i< currentField.length; i++)
		{currentField[i].remove();}

	for(let c = 0; c < newSize; c++)
	{	
		const newCol = document.createElement("div");
		newCol.classList.add("grid-column");
		gridContainer.appendChild(newCol);

		for(let r = 0; r < newSize - 5; r++)
		{
			const newCell = document.createElement("div");
			newCell.classList.add("grid-cell");
			newCell.addEventListener('mouseover', () => newCell.classList.add("activeCell"));
			
			newCol.appendChild(newCell);
		}
	}
}

function rainbowGrid () {

	let newSize = prompt("Please enter a new grid size. 2 - 100");

	const currentField = document.querySelectorAll('.grid-column');
	for(let i=0; i< currentField.length; i++)
		{currentField[i].remove();}

	for(let c = 0; c < newSize; c++)
	{	
		const newCol = document.createElement("div");
		newCol.classList.add("grid-column");
		gridContainer.appendChild(newCol);

		for(let r = 0; r < newSize - 5; r++)
		{
			const newCell = document.createElement("div");
			newCell.classList.add("grid-cell");
			newCell.addEventListener('mouseover', () => {
				let randomColor = Math.floor(Math.random()*16777215).toString(16);
				newCell.style.backgroundColor = "#" + randomColor;
			});
			newCol.appendChild(newCell);
		}
	}
}


function clearGrid() {
	const cells = document.querySelectorAll('.grid-cell');
	cells.forEach((cell) => {
		cell.classList.remove("activeCell");
	});
}


resetBtn.addEventListener('click', resizeGrid);
clearBtn.addEventListener('click', clearGrid);
rainbowBtn.addEventListener('click', rainbowGrid);


startGrid();