// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createCard(articleHeadline, articleAuthorPhoto, articleAuthorName) {
    // create the new elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const authorSection = document.createElement('div');
    const imgContainer = document.createElement('div');
    const image = document.createElement('img');
    const byAuthorName = document.createElement('span');

    // append the elements
    card.appendChild(headline);
    card.appendChild(authorSection);
    authorSection.appendChild(imgContainer);
    imgContainer.appendChild(image);
    authorSection.appendChild(byAuthorName);

    // add class names
    card.classList.add('card');
    headline.classList.add('headline');
    authorSection.classList.add('author');
    imgContainer.classList.add('img-container');
    
    // add content
    headline.textContent = articleHeadline;
    image.src = articleAuthorPhoto;
    byAuthorName.textContent = `By ${articleAuthorName}`;

    return card;
}

// Loop over the articles by topic, creating a card each time and appending the new card
function loopOverTopics(cardObject, topic) {
    for(let i = 0 ; i < cardObject[topic].length ; i++) {
        const newCard = createCard(cardObject[topic][i].headline, cardObject[topic][i].authorPhoto, cardObject[topic][i].authorName);
        cardEntryPoint.appendChild(newCard);
    }
}

const cardEntryPoint = document.querySelector('.cards-container');

// get the data from the server and create new cards based on the response
axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        const cardObject = response.data.articles;
        console.log(cardObject);
        loopOverTopics(cardObject, 'javascript');
        loopOverTopics(cardObject, 'bootstrap');
        loopOverTopics(cardObject, 'technology');
        loopOverTopics(cardObject, 'jquery');
        loopOverTopics(cardObject, 'node');
    })
    .catch(error => {
        console.log("Card Get Error: " + error);
    });
