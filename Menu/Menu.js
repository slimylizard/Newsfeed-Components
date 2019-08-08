/* This is the data we will be using, study it but don't change anything, yet. */
window.addEventListener('load', (e) => {
let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

  function menuCreator(){
    let div2 = document.createElement('div');
    div2.classList.add('menu');
    let ul = document.createElement('ul');
    div2.appendChild('ul');
    function liCreater(text){
      let li = document.createElement('li');
      li.textContent = text;
      ul.appendChild('li');
    };
    return div2
  };

  let menuButton = document.querySelector('menu-button');

  for(let i=0; i<menuItems.length; i++){
    let div2 = menuCreator(menuItems[i]);
    menuButton.appendChild(div2);
  };
});