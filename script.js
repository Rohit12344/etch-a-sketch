let gridSize;
const container = document.querySelector('.container');
const button = document.querySelector('button');

function createGrid(grid_size)
{
    for(let k = container.children.length - 1;k >= 0; k--)
    {
        container.children[k].remove();
    }

    for(let j = 0;j < grid_size; j++)
    {
        const row = document.createElement('div');
        row.className = 'row';
    
        for(let i = 0; i < grid_size; i++)
        {
            const boxes = document.createElement('div');
            boxes.className = 'boxes';
    
            if(i == 0)
            {
                boxes.style.borderLeftWidth = '3px';
            }
            if(i == grid_size - 1)
            {
                boxes.style.borderRightWidth = '3px';
            }
    
            if(j == 0)
            {
                boxes.style.borderTopWidth = '3px';
            }
            else if(j == grid_size - 1)
            {
                boxes.style.borderBottomWidth = '3px';
            }
    
            boxes.addEventListener('mouseenter', () => {
                boxes.style.backgroundColor = 'black';
            })
            row.appendChild(boxes);
        }
        container.appendChild(row);
    }
}

createGrid(16);

button.addEventListener('click', () => {
    gridSize = +(prompt('Enter how many squares do you want in a row & a column: '));
    createGrid(gridSize);
})





