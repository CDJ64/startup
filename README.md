# startup
#### A CS 260 assignment.
## Pizza Pie Fanclub
### Summary
Do you love pizza? Of course you do. But what *kind* of pizza do you like? Here at the Pizza Fanclub, you can exchange your pizza tastes with people around the world! Every user can choose their favorite type of pizza and also list their favorite individual toppings independently; and that's only one of many potential ways pizza fans could interact with each other at the Pizza Fanclub.[^1]

![A rough sketch depicting a Monthly Survey page where users can say whether they like pineapple pizza or not](/PizzaSketch.png)
![A cropped screenshot showing an interactive pie chart where users can choose one of two pizzas (or neither)](/PizzaSample.png)

### Features
- A user log-in system allowing people to store information about their pizza preferences[^1]
- Favorite Pizza and/or Favorite Topping interfaces with pie charts[^1]
- Monthly Surveys for even more detailed pizza tastes[^1]
- Pizza Chat for pizza discussions[^1]
- About section[^1]
- And more![^1]

[^1]: Disclaimer: Right now the website is actually barebones; no guarantee as to whether I'll finish adding the mentioned features.

### Credits
Made by CDJ64 for a computer science assignment.

Special thanks to Sandra Moringa for her article/tutorial on pie charts! (https://www.section.io/engineering-education/javascript-canvas-piechart/)

# Class Notes
## Start
General:
- A web certificate is necessary to use HTTPS; Port 443 is reserved for HTTPS.

Command Line:
- `chmod` in command line can change file permissions, but can also mark a file as executable ("`chmod +x filename.sh`"?)
- `-la` parameter on `ls` command outputs a long listing of all files
- `ssh` creates a remote shell session

DNS:
- domain name system
- DNS record types include `address` (`A`) and `canonical name` (`CNAME`), among other types
- `A` record maps from domain name to IP address
- `CNAME` record maps from domain name to another domain name; domain name alias; lets two domain names go to the same website/IP
- `cs260.cs.byu.edu` is a subdomain, not `cs260`
- `byu.edu` is a root domain
- `edu` is a top level domain (TLD)

## HTML
General:
- `<!DOCTYPE html>` directs the browser to use relevant specifications when rendering the HTML
- Inside to Outside: Content, Padding, Border, Margin

Elements:
- `<a href="#">Link Text</a>`
- `<ol>` = ordered list, `<ul>` = unordered list, `<li>` = list item
- `<img src="http://imgs.xkcd.com/logo.png" />`
- `<img>` between `<a>` and `</a>` gives the image itself a hyperlink

## CSS
Fonts:
- Loading a font on your website:
```
@font-face {
  font-family: 'Quicksand';
  src: url('https://cs260.click/fonts/quicksand.woff2');
}

p {
  font-family: Quicksand;
}
```
- Loading a font from another website:
```
@import url('https://fonts.googleapis.com/css2?family=Rubik Microbe&display=swap');

p {
  font-family: 'Rubik Microbe';
}
```

CSS Selectors:
- element
- .class
- #id
- element descendant (selecting descendants)
- element directchild (selecting children)
- element ~ sibling (selecting siblings)
- element + adjacentsibling (selecting siblings)
- element\[attribute]
- element\[attribute="value"]
- element\[attribute*="part of value"]
- element:pseudo

CSS Units:
- px:   number of pixels
- pt:   number of points (72 points = 1 inch)
- in:   number of inches
- cm:   number of centimeters
- %:    percentage of parent
- em:   multiplier of width of m in parent's font
- rem:  multiplier of width of m in root's font
- ex:   multiplier of height of element's font
- vw:   percentage of viewport width
- vh:   percentage of viewport height
- vmin: percentage of viewport's smaller dimension
- vmax: percentage of viewport's larger dimension

Flex:
- A lesser known flex-direction is column-reverse, which puts stuff bottom to top; also row-reverse for right to left?

## JS
General:
- Javascript is hard
- functions as parameters and return values for other functions? what is this sorcery
- `const f = y => ++y;` (f increments and returns incremented value; if single line, no curly brackets or return means auto return)
- It is possible to add new properties to a JavaScript object dynamically
- `myArray.reduce((accumulator, currentValue) => {})` applies the arrow function (called a callback function in this case) to each value in the array, where the accumulator is the return value of the previous iteration (for the first iteration, 0 unless an initial value parameter is added after the arrow function).
- In `value = obj?.val;`, the question mark checks if `obj` is undefined before looking at `val`, to prevent `TypeError`
- addEventListener() sets up a function that will be called whenever the specified event is delivered to the target; it adds a function/object to a set of event listeners
- Event listeners are usually used to check if things are clicked on or hovered over or stuff like that

Closure:
```
globalThis.x = 'global';

const obj = {
  x: 'object',
  f: () => console.log(this.x),
};

obj.f();
// OUTPUT: global
```
Arrow function is in global context, so `this` points to globalThis (or is globalThis?). Arrow function is created globally.
```
globalThis.x = 'global';

const obj = {
  x: 'object',
  make: function () {
    return () => console.log(this.x);
  },
};

const f = obj.make();
f();
// OUTPUT: object
```
Arrow function is in context of object (because it's return value rather than member), so `this` points to object (bruh). Arrow function is not created until outer function is called.

JS Promises and async/await:
- Stuff inside setTimeout's code parameter doesn't run until after delay parameter
- If the code doesn't use import/export, you can only use await inside async functions (and async generators, but those are something that hasn't been covered before).
- If the code does use import/export, it becomes a module and you can also use await outside of all functions/objects.
- Code that awaits a function waits until the function completes before moving on; if code is inside a promise, stuff after the promise can still happen first

JSON:
- JSON stores data that can be converted to/from Javascript objects (or other data types)
- It can store null values but not undefined
- Object keys MUST be enclosed in DOUBLE QUOTES
- JSON.stringify(object) returns json
- JSON.parse(json) returns object (or whatever)
- A server can use the JSON format to send a web browser some data

Regular Expressions:
```
const objRegex = new RegExp('ab*', 'i');
const literalRegex = /ab*/i;
```
- `/` delimits expression (is start and end); backslash is needed for some characters; stuff after (like i) sets certain rules/properties
- i means insensitive: NOT case sensitive
- g means global: doesn't return after first match
- m means multiline: ^/$ match start/end of line (respectively?)
- etc
- array.filter(functionThatTakesWordAndReturnsTruthValue) returns subset array of words that satsfied function
- string.match(regex) returns array of matched words/etc
- string.replace(regex, newtext)
- regex.test(string) returns boolean
- string.split(regex) returns array of substrings that were between regex (though the parameter can also just be a string)
- string.search(regex) returns index

JS combined with HTML and CSS:
- `<script>` in HTML
- `const myElement = document.querySelector('#selector');` (Create a pointer to an element in the HTML document DOM tree; the selector can be any kind of selector)
- `const newElement = document.createElement('p');`
- 'newElement.classList.add('myClass');'
- `myElement.appendChild(newElement);`

## Services, Node and Express
Common Port Numbers (courtesy of class instruction):
| Port | Protocol                                                                                           |
| ---- | -------------------------------------------------------------------------------------------------- |
| 20   | File Transfer Protocol (FTP) for data transfer                                                     |
| 22   | Secure Shell (SSH) for connecting to remote devices                                                |
| 25   | Simple Mail Transfer Protocol (SMTP) for sending email                                             |
| 53   | Domain Name System (DNS) for looking up IP addresses                                               |
| 80   | Hypertext Transfer Protocol (HTTP) for web requests                                                |
| 110  | Post Office Protocol (POP3) for retrieving email                                                   |
| 123  | Network Time Protocol (NTP) for managing time                                                      |
| 161  | Simple Network Management Protocol (SNMP) for managing network devices such as routers or printers |
| 194  | Internet Relay Chat (IRC) for chatting                                                             |
| 443  | HTTP Secure (HTTPS) for secure web requests                                                        |

HTTP Request:
```
<verb> <url path, url parameters, url anchor> <version of http>
[<Header-Key>: <header value>]*

<body>
```
HTTP Response:
```
<version of http> <status code> <status string>
[<Header-Key>: <header value>]*

<body>
```
HTTP:
- The most common verbs are GET, POST (create), PUT (update), DELETE, OPTIONS (get metadata)
- Version example: `HTTP/1.1`
- Header value format depends on header key (see Example Value in Common HTTP Headers)
- Body is optional and separated from the rest by two newlines (a single blank line)
- Status string can say something like "OK" (if the status code is 200)

HTTP Versions (also courtesy of class instruction):
| Year | Version | Features                                        |
| ---- | ------- | ----------------------------------------------- |
| 1990 | HTTP0.9 | one line, no versions, only get                 |
| 1996 | HTTP1   | get/post, header, status codes, content-type    |
| 1997 | HTTP1.1 | put/patch/delete/options, persistent connection |
| 2015 | HTTP2   | multiplex, server push, binary representation   |
| 2022 | HTTP3   | QUIC for transport protocol, always encrypted   |

Common HTTP Headers (again, courtest of class instruction...):
| Header                      | Example Value                        | Meaning                                                                                              |
| --------------------------- | ------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| Authorization               | Bearer bGciOiJIUzI1NiIsI             | A token that authorized the user making the request.                                                 |
| Accept                      | image/\*                             | What content format the client accepts. This may include wildcards.                                  |
| Content-Type                | text/html; charset=utf-8             | The format of the response content. These are described using standard MIME types.                   |
| Cookie                      | SessionID=39s8cgj34; csrftoken=9dck2 | Key value pairs that are generated by the server and stored on the client.                           |
| Host                        | info.cern.ch                         | The domain name of the server. This is required in all requests.                                     |
| Origin                      | cs260.click                          | Identifies the origin that caused the request. A host may only allow requests from specific origins. |
| Access-Control-Allow-Origin | https://cs260.click                  | Server response of what origins can make a request. This may include a wildcard.                     |
| Content-Length              | 368                                  | The number of bytes contained in the response.                                                       |
| Cache-Control               | public, max-age=604800               | Tells the client how it can cache the response.                                                      |
| User-Agent                  | Mozilla/5.0 (Macintosh)              | The client application making the request.                                                           |

HTTP Status Code Ranges:
- 100-199 - Informational
- 200-299 - Success
- 300-399 - Content redirects or caching ("Redirect to some other location, or... the previously cached resource is still valid")
- 400-499 - Client error (invalid request)
- 500-599 - Server error

Common HTTP Status Codes (this is okay right):
| Code | Text                  | Meaning                                                                                                                           |
| ---- | ----------------------| --------------------------------------------------------------------------------------------------------------------------------- |
| 100  | Continue              | The service is working on the request                                                                                             |
| 200  | Success               | The requested resource was found and returned as appropriate.                                                                     |
| 201  | Created               | The request was successful and a new resource was created.                                                                        |
| 204  | No Content            | The request was successful but no resource is returned.                                                                           |
| 304  | Not Modified          | The cached version of the resource is still valid.                                                                                |
| 307  | Permanent redirect    | The resource is no longer at the requested location. The new location is specified in the response location header.               |
| 308  | Temporary redirect    | The resource is temporarily located at a different location. The temporary location is specified in the response location header. |
| 400  | Bad request           | The request was malformed or invalid.                                                                                             |
| 401  | Unauthorized          | The request did not provide a valid authentication token.                                                                         |
| 403  | Forbidden             | The provided authentication token is not authorized for the resource.                                                             |
| 404  | Not found             | An unknown resource was requested.                                                                                                |
| 408  | Request timeout       | The request takes too long.                                                                                                       |
| 409  | Conflict              | The provided resource represents an out of date version of the resource.                                                          |
| 418  | I'm a teapot          | The service refuses to brew coffee in a teapot.                                                                                   |
| 429  | Too many requests     | The client is making too many requests in too short of a time period.                                                             |
| 500  | Internal server error | The server failed to properly process the request.                                                                                |
| 503  | Service unavailable   | The server is temporarily down. The client should try again with an exponential back off.                                         |

Node/Express General:
- Make sure you include `node-modules` in your `.gitignore` file, since `package.json` and `package-lock.json` already contain all needed package info.

Main Steps:
1. Create your project directory
2. Initialize it for use with NPM by running `npm init -y`
3. Make sure `.gitignore file` contains `node-modules`
4. Install any desired packages with `npm install <package name here>`
5. Add `require('<package name here>')` to your JavaScript code
6. Run your code with `node main.js`

Middleware:
- `use` is universal compared to `get`, `post`, etc.
- All matched middlewares execute in order of order in code
- Middleware route path can use limited wildcard syntax or regular expressions (request `/fave/ringo` (with `method: DELETE`) matches middleware `app.delete(/fav\/(.*)/, () => {})`)
```
// Wildcard - matches /store/x and /star/y
app.put('/st*/:storeName', (req, res) => res.send({ update: req.params.storeName }));

// Pure regular expression - matches /store/abc and /store/pqrs (I think)
app.delete(/\/store\/(.+)/, (req, res) => res.send({ delete: req.params[0] }));
```

## MongoDB
Environmental variables:
- Helpful for not including credentials in your code (publicly visible on github)
- Development environment: set values in personal computer's environmental variables (System Variables)
- Production environment: `ssh` into server and edit `/etc/environment` (`export MONGOVARIABLE=value`)
- In code: `const variable = process.env.MONGOVARIABLE;`

Restarting server environment:
- Helpful if incorrect scoreboard database, etc.
- `ssh` into server
- `pm2 restart all --update-env`
- `pm2 save`

Queries:
- `$or:` means or
- '$lt:' means less than
- etc.


## WebSocket
- Peer to peer instead of client to server
- In some example code, client sends message to server which sends something back
- `wss.on('connection', () => {})` executes function when connection is made
- `ws.on('message', () => {})` (inside above code's `{}`) executes function when server receives message
- `NPM install ws` adds dependency to package.json file, adds source code to node_modules directory, and locks the version of the  `ws` package for your application

## React
- JSX allows you to inject HTML into JS, componentizing HTML
- JSX doesnt affect CSS
- Don't assume that things that work in HTML or JS will work in JSX. (eg. "className" instead of HTML's "class")
- JSX: `<a className="nav-link" href="play.html">Play</a>`
- React: `<NavLink className='nav-link' to='play'>Play</NavLink>` (used with `Route`s)
- `React.useEffect()` executes its first parameter (an updater, for example) initially, no matter what; if the second parameter updates, the useEffect executes again

## Miscellaneous
- Cookies allow a server to store data on the client's browser
- You can use fetch in front-end AND back-end code
- Linux daemons execute independent of the user
- Hashing stored passwords is important for security by making the password unreadable
- `exact` makes a `Route` need to be exact