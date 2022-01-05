// Additional exercises from TheOdinProject DOM Fundamentals

const container = document.querySelector('.container');

const newDiv = document.createElement('div');
newDiv.classList.add('newdiv');

newDiv.style.cssText = "color: #fff; background: pink; border: 2px solid black; padding: 20px; margin: 20px; text-align: center; font-size: 1.5em;"


// created h1 tag
const h1tag = document.createElement('h1');
h1tag.textContent = "I'm in another div."

// created a p tag
const ptag = document.createElement('p');
ptag.textContent = "Hey, I'm red!";
ptag.style.color = 'red';

// created a second p tag embeded in a div
const p2tag = document.createElement('p');
p2tag.textContent = "ME TOO!."

// created h3 tag
const h3tag = document.createElement('h3');
h3tag.innerText = "I am a blue h3!"
h3tag.style.color = "blue";


// appended new contents to their parents

container.appendChild(ptag);
container.appendChild(h3tag);
newDiv.appendChild(h1tag);
newDiv.appendChild(p2tag);
container.appendChild(newDiv);


// button manipulation

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
// buttons.style.cssText = "background: blue;"
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});