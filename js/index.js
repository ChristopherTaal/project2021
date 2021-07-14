import { mainUrl } from "./settings/api.js";


const wordpressUrl = mainUrl;
const wordpressCoverBox = document.querySelector (".wordpressCover");

const response = await fetch (wordpressUrl);
const json = await response.json();
console.log(json);

json.forEach(function (wordpress) {
    wordpressCoverBox.innerHTML += `<div class="slug"> ${wordpress.slug}
    
    </div>
    <p>${wordpress.status}</p>
    <p>${wordpress.date}</p>
    <p>${wordpress.content.rendered}</p>
    <div class="button">
    <button class="add">Comments</button>
    </div>`
 
});

