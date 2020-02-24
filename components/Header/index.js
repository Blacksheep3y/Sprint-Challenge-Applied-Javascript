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

//MY CODE STARTS HERE
function Header() {
    //elements
    const header = document.createElement('div');
    const date = document.createElement('span');
    const heading = document.createElement('h1');
    const temp = document.createElement('span');
    //content
    date.textContent = 'MARCH 28, 2019';
    heading.textContent = 'Lambda Times';
    temp.textContent = '98°';
    //classes
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');
    //structure and append to DOM
    header.appendChild(date);
    header.appendChild(heading);
    header.appendChild(temp);
    //return ELEMENT
    return header;
    }
    //Select element from HTML
    const headerContainer = document.querySelector('.header-container');
    //Add function to DOM
    headerContainer.appendChild(Header());