# CS 260 Notes

[My startup](https://github.com/Peppermint6443/startup.git)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## Simon Notes

#### Simon-html notes
* Each page of your webpage has a separate .html file, all of which interact
* Adding hyperlinks to other websites and other pages of your webpage seems 1) very easy, and 2) essential to having a good webpage
* Each .html file has a head, a body, and a footer
* It looks like a slash ends the section (i.e. `<head>` starts the head section, and `</head>` ends the head section)
* Indentation seems to be important, which isn't new, but should be noted
* Looks like there are lots of abbreviations that I will need to learn and know off the top of my head

#### Simon-css notes
* Each of the .html files has a corresponding .css file, meaning that you style each page of your webpage individually
* You can add/remove .css styling modularly, meaning you can disable parts of it for a time if you need to
* There are much fewer indentations in .css files; instead, each individual element seems to correspond to a specific code chunk, which stipulates things like color, border, shadow, etc.
* You can select different page elements using the "mouse" button (see image below). I've played around with the inspect portion of a webpage in the past, but I have always searched around in the code until I (hopefully) found what I was looking for. The select tool is much more handy. 

![Mouse Button](images/mouse_button_screenshot.png) --> Example of what the mouse button looks like in Google Chrome

#### Simon-react
* The file structure has been cleaned up significantly, it looks like there is a lot of file organization that can happen
* It looks like the react things are created with .jsx files
* Javascript looks like it reads similarly to Python... not exactly the same though, and it needs semicolons
* Based on the language breakdown of the repository, there are *a lot* of files that are written in javascript, which makes sense, as a webpage looks a lot better as the interactivity of the webpage increases

## HTML Notes
#### Structure Codepen
* It seems like you can pretty much put anything anywhere you want, you just have to follow the structure. For example, I can make any words a link, I just have to add an anchor element with the appropriate tag.
* Links need to include https://
* Tables look pretty useful
* You can also put images in a table, even if the other cells have words
* html is pretty easy to use, once you know a little bit of the syntax. From there, just put it in the appropriate place in you hierarchy

#### Input Codepen
* placeholder = "hello": this is how you add see-through text
* I forgot to do a close / which messed up formatting down below
* you can set the default color of the color picker
* while html might not have super strict formatting requirements, it greatly adds to the readability of your code

#### Media Codepen
* adding media is pretty easy, the hard part is remembering `<img src = 'path.jpg'/>`, `<video src = 'path2.jpg'>`, etc.
* adding the `alt` signifier is important for accessibility
* svg is really powerful, though there is a bit of a learning curve

#### Simon-html (part 2)
* deploying programs to your server is actually super easy