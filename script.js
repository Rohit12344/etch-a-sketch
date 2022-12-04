let gridSize;
const container = document.querySelector('.container');
const buttons = document.querySelectorAll('button');

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
            boxes.style.backgroundColor = 'rgb(255,255,255)'
            row.appendChild(boxes);
        }
        container.appendChild(row);
    }
}

createGrid(16);

function listenerForDraw(e)
{
    e.target.style.backgroundColor = 'rgb(0,0,0)';
}

function draw()
{
    document.querySelectorAll('.boxes').forEach((box) => {
        box.removeEventListener('mouseenter',listenerForShadeDraw);
        box.removeEventListener('mouseenter', listenerForEraser);
        box.removeEventListener('mouseenter',listenerForColorfulDraw);
        box.addEventListener('mouseenter', listenerForDraw);
    });
}

function listenerForEraser(e)
{
    e.target.style.backgroundColor = 'rgb(255,255,255)';
}

function eraser()
{
    const boxes = document.querySelectorAll('.boxes');

    boxes.forEach((box) => {
        box.removeEventListener('mouseenter',listenerForDraw);
        box.removeEventListener('mouseenter',listenerForShadeDraw);
        box.removeEventListener('mouseenter',listenerForColorfulDraw);
        box.addEventListener('mouseenter', listenerForEraser);
    });
}

function listenerForColorfulDraw(e)
{
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

function colorfulDraw()
{
    const boxes = document.querySelectorAll('.boxes');
    boxes.forEach((box) => {
        box.removeEventListener('mouseenter',listenerForDraw);
        box.removeEventListener('mouseenter',listenerForEraser);
        box.removeEventListener('mouseenter',listenerForShadeDraw);
        box.addEventListener('mouseenter', listenerForColorfulDraw);
    });   
}

function listenerForShadeDraw(e)
{
    let rgbValue = e.target.style.getPropertyValue('background-color');
    let rgbValueArray = rgbValue.slice(4,rgbValue.length-1).split(',');

    e.target.style.backgroundColor = `rgb(${Math.floor(rgbValueArray[0] - 0.1 * rgbValueArray[0])},${Math.floor(rgbValueArray[1] - 0.1 * rgbValueArray[1])},${Math.floor(rgbValueArray[2] - 0.1 * rgbValueArray[2])})`;
}

function shadeDraw()
{
    document.querySelectorAll('.boxes').forEach((box) => {
        box.removeEventListener('mouseenter',listenerForDraw);
        box.removeEventListener('mouseenter',listenerForEraser);
        box.removeEventListener('mouseenter',listenerForColorfulDraw);
        box.addEventListener('mouseenter', listenerForShadeDraw);
    });
}

buttons[0].addEventListener('click', () => {
    gridSize = +(prompt('Enter how many squares do you want in a row & a column: '));
    if(gridSize)
    {
        createGrid(gridSize);
    }
    else
    {
        createGrid(16);
    }
})

buttons[1].addEventListener('click' , () => {
    if(gridSize)
    {
        createGrid(gridSize);
    }
    else
    {
        createGrid(16);
    }
})

buttons[2].addEventListener('click', eraser);

buttons[3].addEventListener('click', draw);

buttons [4].addEventListener('click' , colorfulDraw);

buttons[5].addEventListener('click', shadeDraw);