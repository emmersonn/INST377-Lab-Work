//

//
function getRandomIntInclusive(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function injectHTML(list){
  console.log('fired inject HTML')
  const target = document.querySelector('#restaurant_list')
  target.innerHTML = '';
  list.forEach ((item) => {
    const str = `<li>${item.name}<li>`;
    target.innerHTML += str
  })
}

<<<<<<< HEAD
/* A quick filter that will return something based on a matching input */
function filterList(list, query) {
  return list.filter((item) => {
    const lowerCaseName = item.name.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();
    return lowerCaseName.includes(lowerCaseQuery);
   })
=======
async function mainEvent() {
  /*
    ## Main Event
      Separating your main programming from your side functions will help you organize your thoughts
      When you're not working in a heavily-commented "learning" file, this also is more legible
      If you separate your work, when one piece is complete, you can save it and trust it
  */

  // the async keyword means we can make API requests
  const form = document.querySelector('.main_form'); // get your main form so you can do JS with it
  const submit = document.querySelector('button[type="submit"]'); // get a reference to your submit button
  submit.style.display = 'none'; // let your submit button disappear

  /*
    Let's get some data from the API - it will take a second or two to load
    
   */
  const results = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
  const arrayFromJson = await results.json(); // here is where we get the data from our request as JSON

  /*
    Below this comment, we log out a table of all the results:
  */
  console.table(arrayFromJson);

  // As a next step, log the first entry from your returned array of data.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  console.log(`replace me with the first entry`);

  // Now write a log using string interpolation - log out the name and category of your first returned entry (index [0]) to the browser console
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
  console.log(`replace me with the name and category of the first entry`);

  // This IF statement ensures we can't do anything if we don't have information yet
  if (arrayFromJson?.length > 0) { // the question mark in this means "if this is set at all"
    submit.style.display = 'block'; // let's turn the submit button back on by setting it to display as a block when we have data available

    // And here's an eventListener! It's listening for a "submit" button specifically being clicked
    // this is a synchronous event event, because we already did our async request above, and waited for it to resolve
    form.addEventListener('submit', (submitEvent) => {
      // Using .preventDefault, stop the page from refreshing when a submit event happens
      // https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

      // This constant will contain the value of your 15-restaurant collection when it processes
      const restaurantList = processRestaurants(arrayFromJson);

      // And this function call will perform the "side effect" of injecting the HTML list for you
      injectHTML(restaurantList);
    });
  }
>>>>>>> c9a4a2105b6683a7951852735577deae98041e0b
}

function cutRestaurantList (){
  console.log('fired cut list');
  const range = [...Array(15),keys()];
  return newArray = range.map((item) => {
    const index = getRandomIntInclusive(0, list.length -1);
    return list[index]
  })
}

async function mainEvent() { // the async keyword means we can make API requests
  const mainForm = document.querySelector('.main_form'); // This class name needs to be set on your form before you can listen for an event on it
  const filterButton = document.querySelector('#filter');
  const loadDataButton = document.querySelector('#data_load');
  const generateListButton = document.querySelector('#generate');
  
  const loadAnimation = document.querySelector('');
  loadAnimation.style.display = 'none';
  
  let currentList = []; // this is "scoped" to the main event function

  /* We need to listen to an "event" to have something happen in our page - here we're listening for a "submit" */
  loadDataButton.addEventListener('click', async (submitEvent) => { // async has to be declared on every function that needs to "await" something
      console.log('Loading data'); 
      loadAnimation.style.display = 'inline-block';

    // Basic GET request - this replaces the form Action
    const results = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
    
  // This changes the response from the GET into data we can use - an "object"
    currentList = await results.json();

    loadAnimation.style.display = 'none';
    console.table(currentList); 
  });
  

  //filtering a list rquires a second function 
  //event listener is always on
  
  // event listener is own button 
  filterButton.addEventListener('click',(event) => {
    console.log('clicked FilterButton');

    const FormData = new FormData(mainForm);
    const formProps = Object.fromEntries(formData);

    //access all forms
    //will retrive all forms 
    
    console.log(formProps);
    
    //use filters list
    const newList  = filterList(currentList, formProps.resto); 
    //log out
    console.log(newList);
    injectHTML(newlist);
    })

    
    generateListButton.assEventListener('click',(event) =>{
      console.log('generate new list')
      const restaurantsList = cutRestaurantsList(currentList);
      console.log(restaurantsList);
      injectHTML(restaurantsList);
    })

}
/*
  This adds an event listener that fires our main event only once our page elements have loaded
  The use of the async keyword means we can "await" events before continuing in our scripts
  In this case, we load some data when the form has submitted
*/
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
