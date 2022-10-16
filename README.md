# Lexi Learn Proxy API
An Express API created with CORS support that proxies requests from the Lexi Learn Illustrated Dictionary web application to the <a href="https://owlbot.info/">Owlbot Dictionary API</a>. 

**Link to project:** http://lexilearn.netlify.com/ <br>

To learn more about Lexi Learn Illustrated Dictionary, click <a href="https://github.com/jennaly/lexilearn-dictionary">**here**</a>

![LexiLearnDemo](https://user-images.githubusercontent.com/106183040/196015252-9b87ed1c-a8a2-482e-9f12-de26cc0ea2aa.gif)

## How It's Made:

**Tech used:** Node.js, Express.js 

At the time of this documentation, the Owlbot Dictionary API does not support CORS. This prevents Lexi Learn (and any other web application hosted on a different domain from Owlbot Dictionary API) from making requests. To circumvent this issue, Lexi Learn instead sends requests to a server that does offer CORS support. This server is built on Node and created with Express. To use the Fetch API in Node, I installed the isomorphic-fetch module, which in turn facililitates the fetching of data from the Owlbot Dictionary database to the server. This allows the server to act as a proxy API through which any client can send requests and get data from Owlbot. 

## Lessons Learned:

I learned to set up a server with CORS support and using it as an API to proxy requests to another server. In addition, I learned to write basic authentication with Fetch using the Authorization header.

## References
**Link to project:** http://lexilearn.netlify.com/ <br>
**Link to Lexi Learn Illustrated Dictionary Repo:** https://github.com/jennaly/lexilearn-dictionary
