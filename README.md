# My Awesome Coffee Application

I absolutely love coffee and it is one of my passions. One issue I always ran into was having a one stop shop to track, journal, and dial in the process to make the perfect cup. I made this to tackle that problem!

## How It's Made

Tech used: HTML, CSS, JavaScript, React, MongoDB, Node, Express, Firebase

I really wanted to practice and learn React and solve my ever going coffee problem.

The first thing I did was create my coffee-api within node. This coffee api has several coffee makers such as an areopress, v60, french press, etc. For each I used James Hoffmann's coffee recommendations for the recommended coffee amounts for each maker. From there I also set maxes and mins that could be used by the application, along with some facts regarding the difficulty. I used express to handle the incoming and outgoing requests. I set up my routes to receive the parameter for the userUid.

Then I tackled user Authentication because I wanted to be able to store data on a per user level without each user having access to eachother's data. React's context allowed me to do this. I had first tried Auth0 which also worked great, but at the time I did not know how to use context so I switched over to Firebase and implemented it with context. The way I set up my context folder it should allow for plug and play with other Auth providers such as Auth0. Once authentication was working and my users all had an identifier (userUid) then I started working.

The application allows you to select the coffee maker from the get go. I ran into some issues storing the selection across links to the next page. I solved this using the browser's sessionStorage feature. Using the sessionStorage, I request the coffee maker's information from my API. Using the information received I set the starting point of the coffee gram slider bar and utilize the useState parameter to set new values along with useEffect to update the DOM.

On each page after you have selected your grams of coffee in the attempt, it will recommend ml of water to use based on a selectable ratio. Once you are ready you can start the timer. Once a user is done. They can pause the timer and write a comment on how it tastes. when ready they can submit. This will store in the database the time, ml of water, g of coffee, ratio used, and a note about it (i.e. was the coffee sour, bitter, perfect, or anything really). The user can also just submit and come back to it later and update the comment.

### Optimizations

Forthcoming...

### Lessons Learned: 

1. React simplifies so many things that would have taken significantly more work in vanilla javascript.
2. React's context allowed me to use Authentication across each page verses passing it through each component. A problem I ran into before context was accessing authentication across a route or link to another page that was not a component of that page. Context solved this issue.
3. useEffect, useState, and useRef are pretty amazing hooks. I'm sure there are plenty more, and I will need to dig through the documentation to learn, but I am looking forward to it!

