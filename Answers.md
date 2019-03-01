1.  Explain the differences between `client-side routing` and `server-side routing`.

> With SSR, each request made by the user on the front end is sent to the server and the server determines and prepares what to return to the user. The response is then sent to the client and the page is refreshed. With CSR, the client handles the view logic and determines what to display to the user. The document is modified in place and no refresh is necessary. The client makes requests to the server for new data as needed and (usually) receives a JSON payload that it can use to update app state and display to the user.

2.  What does HTTP stand for?

> Hyper text transfer protocol

3.  What does CRUD stand for?

> Create, read, update, delete

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

> Reads are made with GET, creates with POST, deletes with DELETE and updates with PUT and PATCH.

5.  Mention three tools we can use to make AJAX requests

> We can make ajax requests with a built-in like `fetch` or a library like Axios. We handle the request with Promises.
