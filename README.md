# Filament Minder

[My Notes](notes.md)

As a 3D printing enthusiast, I often switch between different filament types and colors to best fit my usage. I might print using flexible TPU filament to print a phone case, and then switch to yellow to print a model of a banana. Many filament spools include a feature that allows you to estimate how much filament you have left, but it isn't easy to use and only provides an estimate. Filament minder aims to fix that! I will be creating a website that keeps track of all of your rolls of filament and how much is left on each roll.

## 🚀 Specification Deliverable
[This](https://github.com/webprogramming260/startup-example/blob/main/README.md) is a great example.

For this deliverable, I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch: I updated the elevator pitch to include a pitch for my webpage.
- [x] Description of key features: I added some key features that I want my webpage to include.
- [x] Description of how you will use each technology: I discussed how I will use each of the units of the class on my website. 
- [x] One or more rough sketches of your application: I added a sketch of the website, and I added a sketch of all of the interactions that lead to a successful website.

### Elevator pitch

Are you tired of not knowing if you have enough filament to complete the cool 3D print you found? Imagine starting a print you are super excited about, only to have the filament run out right before the print finishes. Do you leave it on your printer until the new filament roll arrives? Do you waste the filament you had left? Luckily, with Roll Call, you can avoid this predicament entirely!

Roll Call is an easy-to-use website that tracks your filament so you don't have to! It allows you to track the amount of filament left on each roll (including color, brand, type, and cost), log print history, and manage your filament stores. 

Don't wait until you ruin another print, let Roll Call take attendance, you focus on creating the next big thing!

### Design

![Design image](images/website_sketch.png)

Above is a sketch of what my webpage might look like, created using [ninjamock.com](https://ninjamock.com/home/index). Once you log in, the home page will show the rolls of filament that you have included, and you can select them, read the usage rates, what it was used for, etc. Below is a diagram showing how a user would interact with the webpage, server, and the physical world. 

![Process Image](images/block_diagram.jpg)

### Key features

- Secure Login
- Data storage connected to your account
- Ability to add rolls of filament, specifying Brand, color, starting amount, type, price, etc.
- Ability to add print mass to update the roll, with a name for the print for recording
- Ability to see a history of prints for each roll
- Display all of the rolls, with a status bar showing how much has been used/is left
- If time: the ability to predict the cost of a print based on the cost of the roll and the starting amount

### Technologies
I am going to use the required technologies in the following ways.

- **HTML** - Used for the main structure of the webpage. Has 4 pages: Login, dashboard, a roll page, and statistics (amount spent per month, total amount used, etc.). If time, I will add a fifth page for print cost prediction. 
- **CSS** - Styling that looks good on any size device. Good use of color, spacing, and design elements.
- **React** - Login, display your rolls of filament, adding prints to a roll of filament.
- **Service** - Add roll, update roll, get roll history, share roll. I also want to include an API to include a "print of the day" from Thingiverse or another similar website.
- **DB/Login** - Store users, rolls of filament, and related information in the database. Account creation is in use, and all data is securely saved.
- **WebSocket** - Ability to recommend a roll of filament, also potential to add friends and compare filament usage.


## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [Roll Call](https://startup.roll-call.click).


## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - I have pages, including `index.html`, `dashboard.html`, `roll.html`, `stats.html`, and `about.html`.
- [x] **Proper HTML element usage** - I used many elements, such as `<nav>`, `<div>`, `<form>`, `<h1>`, etc. I also used elements like `<head>`, `<body>`, `<main>`, and `<footer>`.
- [x] **Links** - I have links between each of my pages (clicking on the rolls from the dashboard page even takes you to the roll page!)
- [x] **Text** - I have a lot of text, some describing the project, some showing the data in the database, etc.
- [x] **3rd party API placeholder** - I added a spot to put a "3D Print of the Day" from Thingiverse
- [x] **Images** - I have pixel art of the rolls of filament.
- [x] **Login placeholder** - I have a form that accepts a username and a password.
- [x] **DB data placeholder** - Each roll has data attached to it, and I have a placeholder that displays examples of this data, i.e. filament left, color, brand, etc.
- [x] **WebSocket placeholder** - I have a placeholder that announces when users finish a roll of filament.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Header, footer, and main content body** - I created a fixed header and footer, with a flexible main content body that shows all of the unique information for the page
- [x] **Navigation elements** - Every page has links that take you to the other pages. On a phone, they collapse into a navigation bar (though the button doesn't actually do anything yet, that will come later... turn your phone horizontal to see the navigation links again)
- [x] **Responsive to window resizing** - Based on the aspect ratio of the screen, the navigation bar dissappears, and the grids on the dashboard and stats pages adjust for the size change. 
- [x] **Application elements** - Each element is styled by rules on at least one stylesheet, and some are overridden in another sheet to improve the overall look.
- [x] **Application text content** - I made any text on my website look more presentable and I made it match the aesthetic of the webpage as a whole.
- [x] **Application images** - I have images in my webpage, some of them are links, and others are there to look pretty

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Bundled using Vite** - I used Vite while updating and adjusting my website, so I no longer have to use the 'go live' function of VS Code
- [x] **Components** - I have a .jsx injection for each of my pages, including login, dashboard, roll, stats, and about.
- [x] **Router** - I have links in my index.html header that take me to 'pages'

## 🚀 React part 2: Reactivity

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **All functionality implemented or mocked out** - The part of this that I am most proud of is the roll functionality; you can now add new rolls of filament, and they will be stored in your browser. Also, the images of the rolls acts as a link that takes you to the page of that roll of filament, displaying the information connected to that roll. I am also proud of the svg replacement for the images I used previously.
- [x] **Hooks** - I successfully used the React.useState() (a couple of times), as well as the React.useEffect().
- Things I still want to add to improve the usability:
    - roll history
    - add print
    - edit/delete the roll
    - all of the .js to handle the statistics calculations

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Node.js/Express HTTP service** - Node.js and Express are running rampant in service/index.js, and they are allowing me to create, reference, and use different endpoints
- [x] **Static middleware for frontend** - I updated all of my frontend code to use the service backend, and I served up my files in the public folder!
- [x] **Calls to third party endpoints** - I added a third party endpoint that shows a picture of space (from NASA). I was unable to find an endpoint that generates a "print of the day," so until I find an option I like better, I will use pictures of space
- [x] **Backend service endpoints** - I have backend endpoints for adding a roll, adding and finding users, logging out, and viewing the rolls; I also have endpoints for future goals, such as roll history (both viewing and creating), deleting a roll, and more
- [x] **Frontend calls service endpoints** - my frontend calls my backend enpoints and uses them appropriately!


Information on future deliverables is available in [future_deliverables.md](future_deliverables.md)