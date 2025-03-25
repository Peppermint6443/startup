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
* svg is basically just drawing one line and then telling it what point to connect to
* links to navigate pages actually just are localized paths that open another file instead of the one you are on
* the structure to a website can actually be so simple

#### Startup-html
* html is fast! it really didn't take very long to get a basic structure down for each page
* there are a lot of formatting things that I want to do, but I need to be patient and wait to implement CSS
* without JavaScript, adding interactive things can be difficult
    * for example, I wanted to add a bunch of different rolls pages, but that can't happen until I have a database and things like that
* `<hr>` was pretty useful, at least for the initial formatting
* copying and pasting the header and footer is super useful
* there is a lot of adding placeholders with html, especially for any extended functionality

## CSS Notes
#### Flex Codepen
* It is really helpful to arrange your .css file in a way similar to your .html file. I didn't at first, and trying to find the proper elements was a nightmare. It was also dificult to make sure that everything nested properly.
* Keep `justify-content`, `align-content`, `text-align`, all straight. I'm sure I'll get better at it as I practice, but I have to guess and check every time.
* Order the flex events correctly, and determine your view as you move down the element hierarchy; the `<body>` element should be determined first to ensure everything fits together nicely.

#### Bootstrap Codepen
* Bootstrap is nice because it takes allows for the use of other people's hard work with styling. It makes beautiful websites
* I'm probably going to have to spend a decent amount of time exploring the Bootstrap documentation
* The notification numbers are really cool!
* Are we limited to only the color scheme offered by Bootstrap?
* I could potentially use a dropdown for the filament brand!

#### Simon-css
* The css file that covers all of the files is actually not super long
* Classes are very useful and should be used liberally
* Borders make things look a lot better, and they make it look cleaner

#### Startup
* Hover is actually super easy! And it looks cool and makes the webpage look just that much more professional
* Picking a color scheme is kind of hard, especially as you do it one color at a time. Picking a palette from the beginning might be significantly easier
* Modelling your webpage off of other webpages is a good way to get something that looks pretty good! (for example, my stats page is modelled after chess.com)

## React Notes
#### Simon-react-p1 && startup-react
* only truly loading a single page provides a much smoother experience
* it was kind of sad to destroy the .html and .css files I worked so hard to create and get working
* if you aren't careful with how you port over your .html code to .jsx, you will have lots and lots of problems

#### simon-react-p2 && startup-react
* anything that ever needs to change should be done using Javascript and .jsx
* this is the step where your website gains a lot of functionality 
* setting up your structure and creating matching .jsx files can significantly increase your organization and effectiveness
    * it is important to split up the parent and child scripts, as it will allow for easier debugging
* it's amazing how much of interactivity is handled with just the React.useState() functionality
* if I have any sections that might be empty, I need to make sure I have `if` statements to show a blank section when there is nothing that has been added

## Service Notes
#### General Notes
* being able to follow the functions and the calls is very important, and it can be helped greatly by using the debugger
* if something isn't working, try going on a walk; for some reason the code works when you get back and try again, even though you didn't change anything
* make sure you know what is being deleted... `DELETE` doesn't necessarily mean you are deleting the account. if you delete authentication, you are just logging out; you delete the cookies, and delete any generated tokens

#### Simon-Service
* where the login information was previously stored in the local cache, it was transitioned to fetch calls that referenced the service endpoints
* it seems that if you were careful with how you set up your data manipulation in the previous deliverable, this one shouldn't be too hard

#### Startup
* after updating some of the code to use service functionality, I can't get it to fully run. I think this might be because I haven't yet configured login handling or anything like that, so it thinks I am not authorized
    * this did indeed end up being the case, I updated the unauthorized.jsx and authorized.jsx files and it worked!

## Database Notes
#### General Notes
* Adding another service to your domain isn't too hard, not as hard as I thought it would be
* Storing data on your server is a pretty bad idea, unless you're alright with getting charged a ton of extra money
* You can probably have a cluster per webpage, that's probably what I will do, that way each document can hold a different list of items/data

#### startup notes
* implementing this actually shouldn't be too bad, as all you have to do is change the function call