# About
A personal web application to make it easy to view my work and get in touch. This Next.JS application is built and maintained for personal use and deployed to Vercel. 
## Stack
+ Next.js (requires Node.js and React.js) => Rendering content
+ Remark => Parse markdown  
+ React Markdown => Render markdown  
+ TailwindCSS => Styling  
+ Tailwind Forms Plugin => Styling  
# Plan
## Next
+ [ ] Remove placeholder logo and move profile pic to left and change dropdown(s)  
+ [ ] Replicate markdown parsing and readfile for blog content.  
+ [ ] Build contact form page for "email" icon  
+ [ ] Add standard h1,h2,h3... styles to tailwind config  
+ [ ] Create submenus under "Contact" for "Meet" and "Pay"; Create menu & submenu for Content (or Blog) > Riddles    
+ [ ] Create cards for About Me interests: {Personal: {Outdoors: [Bushcraft, Hiking, Fishing, Camping], Marital Arts: [BJJ, Wrestling, Muay Thai], Fitness}, Professional: {Software Engineering: [...], Business Development: [...], Healthcare: [...]}}  
+ [ ] Research best way to send emails from node/nextjs server via AWS; Create Contact button  
+ [ ] Create build script via package.json to build css    
+ [ ] Deploy via AWS free tier or Vercel  
## Later
+ [ ] Create screen grab gifs of popular github repos for portfolio section  
+ [ ] Embed iframe of calendar in modal popup  
# Changelog
## 07/05/2022
+ [x] Dynamically parse markdown riddles from 'data/'  
+ [x] Parse frontmatter into object and pass as prop to 'Riddle' component  
+ [x] Upload riddles as data  
+ [x] Change 'render' of markdown to 'parse' and then 'render' in the page's return content.  
## 07/04/2022
+ [x] Research how to convert markdown to json/html so riddles (and blog posts) can be converted easily // 07/04/2022 - MarkdownIT library makes the most sense.   
+ [x] Digest markdown files from 'riddles' directory and convert to html on 'riddles' page.  
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
