# startup
#### A CS 260 assignment.
## Pizza Pie Fanclub
### Summary
Do you love pizza? Of course you do. But what *kind* of pizza do you like? Here at the Pizza Fanclub, you can exchange your pizza tastes with people around the world! Every user can choose their favorite type of pizza and also list their favorite individual toppings independently; and that's only one of many potential ways pizza fans could interact with each other at the Pizza Fanclub.[^1]

![A rough sketch depicting a Monthly Survey page where users can say whether they like pineapple pizza or not](/PizzaSketch.png)

### Features
- A user log-in system allowing people to store information about their pizza preferences
- Favorite Pizza and/or Favorite Topping interfaces with pie charts
- Monthly Surveys for even more detailed pizza tastes[^1]
- Pizza Chat for pizza discussions[^1]
- About section[^1]
- And more![^1]

[^1]: Features are subject to potential change/removal

### Credits
Made by CDJ64 for a computer science assignment.

Special thanks to Sandra Moringa for her article/tutorial on pie charts! (https://www.section.io/engineering-education/javascript-canvas-piechart/)

##### Startup Notes
Elastic Server IP: 18.219.88.108

Domain: pizzapiefanclub.click

Remote shell command: ssh -i [key pair file] ubuntu@[ip address]

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
- `<script>` in HTML
- `const f = y => ++y;` (f increments and returns incremented value; if single line, no curly brackets or return means auto return)
- It is possible to add new properties to a JavaScript object dynamically
- `myArray.reduce((accumulator, currentValue) => {})` applies the arrow function (called a callback function in this case) to each value in the array, where the accumulator is the return value of the previous iteration (for the first iteration, 0 unless an initial value parameter is added after the arrow function).

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
- `/` delimits expression (is start and end); stuff after (like i) sets certain rules/properties
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

## Node
General:
- Make sure you include `node-modules` in your `.gitignore` file, since `package.json` and `package-lock.json` already contain all needed package info.

## Address Later
- ...What are event listeners again?