# Lexi Learn Proxy API
An Express API created with CORS support that proxies requests from the Lexi Learn Illustrated Dictionary web application to the <a href="https://owlbot.info/">Owlbot Dictionary API</a>. Initially hosted on Heroku, the Lexi Learn API is now hosted on Cyclic. 

**Link to project:** http://lexilearn.netlify.com/ <br>

To learn more about Lexi Learn Illustrated Dictionary, click <a href="https://github.com/jennaly/lexilearn-dictionary">**here**</a>

![LexiLearnDemo](https://user-images.githubusercontent.com/106183040/196015252-9b87ed1c-a8a2-482e-9f12-de26cc0ea2aa.gif)

## How To Use:
**If you would like to use the API separately from the Lexi Learn Dictionary client:**

Users must prepend all resource calls with this base URL:

https://lexilearn-proxy-api.cyclic.app/api/dictionary/


Requests can be made with curl or other helper libraries by following regular REST calls. 

For example, here is how to GET the data for the word "cat":

https://lexilearn-proxy-api.cyclic.app/api/dictionary/cat

Calling this resource will respond with the following object:

 ```
 {
    "definitions": [
        {
            "type": "noun",
            "definition": "a small domesticated carnivorous mammal with soft fur, a short snout, and retractile claws. It is widely kept as a pet or for catching mice, and many breeds have been developed.",
            "example": "their pet cat",
            "image_url": "https://media.owlbot.info/dictionary/images/aaaaaaaaaaaaaaaaac.jpg.400x400_q85_box-42%2C0%2C943%2C900_crop_detail.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=owlbot-api-server%40owlbot-166910.iam.gserviceaccount.com%2F20221128%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20221128T180133Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=ad05ce88d7521f9676744f8f54a382fcfb3d6080dcc1e83952f19e73058be938aa0c2be215457fe7e3ea7947e10e5370c6558e103a8e347a84db046439d4689b5cd8ea5357741cfb4d1d55952750c4551ab976826c4aafff671eec390860589d1e9ede519ae6c4b43f512fdea320d906edf3c7694daa7fabbd6caf5cb8b47065d1c4a1a31f3212da390a53f30921df6c066ac9ac7d99d3d8465ea4e93c348bb519f9bd943b197033de433acb1f39ea19df14e7d3fa126e0b7611a3172341387dd2769e7f897feef18df55525c1f4b7d7c4206c4dfcfaf5ca257d8bd7d81b417fd15faf042cca70ed9664674ff9183ceb51e11ff271b428aad2bd0a294738ca23",
            "emoji": "🐈"
        }
    ],
    "word": "cat",
    "pronunciation": null
}
```

## How It's Made:

**Tech used:** Node.js, Express.js 

At the time of this documentation, the Owlbot Dictionary API does not support CORS. This prevents Lexi Learn (and any other web application hosted on a different domain from Owlbot Dictionary API) from making requests. To circumvent this issue, Lexi Learn instead sends requests to a server that does offer CORS support. This server is built on Node and created with Express. To use the Fetch API in Node, I installed the isomorphic-fetch module, which in turn facililitates the fetching of data from the Owlbot Dictionary database to the server. This allows the server to act as a proxy API through which any client can send requests and get data from Owlbot. 

## Lessons Learned:

I learned to set up a server with CORS support and using it as an API to proxy requests to another server. In addition, I learned to write basic authentication with Fetch using the Authorization header.

## References
**Link to project:** http://lexilearn.netlify.com/ <br>
**Link to Lexi Learn Illustrated Dictionary Repo:** https://github.com/jennaly/lexilearn-dictionary
