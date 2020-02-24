// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//1
let topicsResponse = {};
const topicsData = document.querySelector('.topics');
const topicsArray = [];
axios
  .get('https://lambda-times-backend.herokuapp.com/topics')
  .then(response => {
    topicsResponse = { ...response.data };
    topicsData.appendChild(lambdaTimes(response.data));
    response.data.topics.forEach(value => {
        topicsArray.push(value.topics);
        topicsData.appendChild(lambdaTimes(value));
        console.log(value);
        });
  })
  .catch(err => {
    console.log('There was an error: ', err);
  });
  topicsArray.forEach(value => {
    console.log(value);
    });

//2
console.log(topicsResponse);
function lambdaTimes(object){
  //elements
  const tab = document.createElement('div');
  //content
  tab.textContent = object;
  //classes
  tab.classList.add('tab');
  //structure and appending to DOM
  return tab;
}