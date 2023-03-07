# startup
#### A CS 260 assignment.
## Pizza Pie Fanclub
### Summary
Do you love pizza? Of course you do. But what *kind* of pizza do you like? Here at the Pizza Fanclub, you can exchange your pizza tastes with people around the world! Every user can choose their favorite type of pizza and also list their favorite individual toppings independently; and that's only one of many potential ways pizza fans could interact with each other at the Pizza Fanclub.[^1]

![A rough sketch depicting a Monthly Survey page where users can say whether they like pineapple pizza or not](/PizzaSketch.png)

### Features
- A user log-in system allowing people to store information about their pizza preferences and interact with other users[^1]
- Favorite Pizza and Favorite Topping interfaces with pie charts[^1]
- Monthly Surveys for even more detailed pizza tastes[^1]
- Pizza Chat for pizza discussions[^1]
- About section[^1]
- And more![^1]

[^1]: Features are subject to potential change/removal



##### Startup Notes
Elastic Server IP: 18.219.88.108

Domain: pizzapiefanclub.click

Remote shell command: ssh -i [key pair file] ubuntu@[ip address]

# Class Notes
Okay, I'll start putting notes here now so I can prepare for exams.

CSS Selectors:
- element
- .class
- #id
- element descendant
- element directchild
- element ~ sibling
- element + adjacentsibling
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

JavaScript:
- is hard
- functions as parameters and return values for other functions? what is this sorcery

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

JS async/await:
- If the code doesn't use import/export, you can only use await inside async functions (and async generators, but those are something that hasn't been covered before).
- If the code does use import/export, it becomes a module and you can also use await outside of all functions/objects.

Other stuff:
- RegExp
- Do I need to memorize/record all the different functions for these objects?