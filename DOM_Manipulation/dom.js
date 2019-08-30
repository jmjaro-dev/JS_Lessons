let val;

val = document;                                        // returns the HTML document
val = document.all;                                    // returns all the Element Tags
val = document.all(2);                                 // returns the 2nd Element Tag 
val = document.all(0);                                 // returns the whole HTML
val = document.all.length;                             // returns the total number of Element Tags
val = document.head;                                   // returns the head element
val = document.body;                                   // returns the body element
val = document.doctype;                                // returns the doc type
val = document.domain;                                 // returns the domain
val = document.URL;                                    // returns the URL of the webpage
val = document.characterSet;                           // returns the charSet value
val = document.contentType;                            // returns the content type of the document eg. text/html
val = document.forms;                                  // returns all the Forms
val = document.forms[0];                               // returns the first form
val = document.forms[0].method;                        // returns the form method
val = document.forms[0].action;                        // sets/retrieves the url of 
val = document.links;                                  // returns all the links <a>
val = document.links[0];                               // returns the first link <a>
val = document.links[0].id;                            // returns the id of the link <a>
val = document.links[0].className;                     // returns the class name of the link <a>
val = document.links[0].classList;                     // returns all class of the link <a>
val = document.images;                                 // returns all the images <img>
val = document.scripts;                                // returns all the script tags in an HTML Collection
val = document.scripts[2].getAttribute('src');         // returns the src attribute of the script

let scripts = document.scripts;                        // Assigns the HTML Collection value of 'document.scripts' to the 'scripts' variable
let scriptsArray = Array.from(scripts);                // Converts HMTL Collection into an Array

scriptsArray.forEach(function(script){
  console.log(script.getAttribute('src'));             // gets the src attribute of each script 
});

console.log(val);