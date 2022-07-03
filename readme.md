# About
A personal web application to make it easy to view my work and get in touch. This Next.JS application is built and maintained for personal use and deployed to Vercel. 
## Stack
+ Next.js (requires Node.js and React.js)  
+ TailwindCSS  
+ Tailwind Forms plugin  
# Plan
## Next
+ [ ] Build contact form page for "email" icon  
+ [ ] Add standard h1,h2,h3... styles to tailwind config  
+ [ ] Create submenus under "Contact" for "Meet" and "Pay"; Create menu & submenu for Content (or Blog) > Riddles    
+ [ ] Research how to convert markdown to json/html so riddles (and blog posts) can be converted easily  
+ [ ] Create cards for About Me interests: {Personal: {Outdoors: [Bushcraft, Hiking, Fishing, Camping], Marital Arts: [BJJ, Wrestling, Muay Thai], Fitness}, Professional: {Software Engineering: [...], Business Development: [...], Healthcare: [...]}}  
+ [ ] Research best way to send emails from node/nextjs server via AWS; Create Contact button  
+ [ ] Create build script via package.json to build css    
+ [ ] Deploy via AWS free tier  
## Later
+ [ ] Create screen grab gifs of popular github repos for portfolio section  
# Changelog
## 07/02/2022
+ [x] Created Riddles page
+ [x] Add animation to Riddle page show/hide answer text // Used headless UI  
## 06/25/2022  
+ [x] Remove unncessary features for now: [bell icon, footer boxes]  
+ [x] Add social profile icons to header (LinkedIn, Twitter, GitHub)  
+ [x] Create button to schedule meeting via Cal.com  
## 06/25/2022  
+ [x] Rebuild using tailwindcss  
+ [x] Remove SASS/SCSS  
# References
+ [_app.jsx file required for importing global styles](https://nextjs.org/learn/basics/assets-metadata-css/global-styles)
+ [Using props.children from React.js to create page hierarchies](https://codeburst.io/a-complete-guide-to-props-children-in-react-c315fab74e7c)
+ [Basic page structure best practices with React.js and Next.js](https://reacttricks.com/learn-react-by-building-websites-with-next/)
