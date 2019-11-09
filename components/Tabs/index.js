// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function createTab(topic) {
    // create new element
    const tab = document.createElement('div');
    // add classes to element
    tab.classList.add('tab')
    // add content to element
    tab.textContent = topic;

    return tab
}

const tabEntryPoint = document.querySelector('.topics');

axios
    // get the topics from API
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .then (response => {
        // put the topics into a new array
        const topicsArray = response.data.topics;
        // iterate over the topics and create/add the new tabs
        topicsArray.forEach(topic => {
            const newTab = createTab(topic);
            tabEntryPoint.appendChild(newTab);
        });
    })
    // catch any errors and display them in the console log
    .catch(error => {
        console.log(error);
    });