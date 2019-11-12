// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function createHeader() {
    // new elements
    const headerEle = document.createElement('div');
    const dateEle = document.createElement('span');
    const titleEle = document.createElement('h1');
    const tempEle = document.createElement('span');

    // append new elements to dom
    headerEle.appendChild(dateEle);
    headerEle.appendChild(titleEle);
    headerEle.appendChild(tempEle);

    // add classes to elements
    headerEle.classList.add('header');
    dateEle.classList.add('date');
    tempEle.classList.add('temp');

    // add content to elements
    dateEle.textContent = 'MARCH 28, 2019';
    titleEle.textContent = 'Lambda Times';
    tempEle.textContent = '98°';

    return headerEle;
}

const headerContainer = document.querySelector('.header-container');
const newHeader = createHeader();
headerContainer.appendChild(newHeader);
