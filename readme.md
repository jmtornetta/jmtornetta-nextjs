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
+ [ ] Add technologies and skills to Programming page  
+ [ ] Add images to Programming component  
+ [ ] Add GitHub links where appropriate to Programming components  
+ [ ] Use file path of blog content instead of slug when parsing markdown. 
+ [ ] Research best way to send emails from node/nextjs server via AWS; Call from Contact button  
+ [ ] Create build script via package.json to build css    
+ [ ] Deploy via AWS free tier or Vercel  
## Later
+ [ ] Add filter/sort box for "/posts" page using "useState".  
+ [ ] Create cards for About Me interests: {Personal: {Outdoors: [Bushcraft, Hiking, Fishing, Camping], Marital Arts: [BJJ, Wrestling, Muay Thai], Fitness}, Professional: {Software Engineering: [...], Business Development: [...], Healthcare: [...]}}  
+ [ ] Create font family theme using Tailwind  
+ [ ] Setup datepicker on posts page via [Flowbite NPM Package](https://github.com/themesberg/flowbite/blob/main/content/plugins/datepicker.md#javascript)
+ [ ] Randomize riddle order by apply a random sorting algo to riddle array.  
+ [ ] Create screen grab gifs of popular github repos for portfolio section  
+ [ ] Update 'getServerSideProps' so cached content is used unless there is an update (then revalidate). // Don't want to ping the server for every page visit.  
+ [ ] Embed iframe of calendar in modal popup  
# Changelog
## 08/14/2022
+ [x] Content: Create programming pages using boxes to visually showcase work; Keep everything on one page for now (frontend vs backend)   
+ [x] Refactor: Utility functions   
+ [x] Fix: Missing argument in 'getMdContent()' function  
## 08/11/2022
+ [x] Add dynamic routing to post content pages.  
+ [x] Refactor markdown conversion functions for content.  
## 08/01/2022
+ [x] Header styling fixes and completion.  
+ [x] Update page content.  
+ [x] Replicate markdown parsing and readfile for blog content.  
+ [x] Add standard h1,h2,h3... styles to tailwind config  
## 07/27/2022
+ [x] Create submenus for header nav  
+ [x] Refactor: Make modal multipurpose  
+ [x] Feature: Contact form page by combining email, meet, pay, and social media  
## 07/20/2022
+ [x] Feature: Render links over buttons as anchor tags  
+ [x] Feature: Display feature images over blog post box preview  
+ [x] Refactor: Abstract out "classNames()" for use in multiple pages  
+ [x] Refactor: Pass posts feature text length as prop to postBox (post preview box)  
+ [x] Refactor: Change relative import paths to absolute paths for components  
## 07/16/2022
+ [x] Remove placeholder logo and move profile pic to left and change dropdown(s)  
+ [x] Fix styling for mobile nav  
+ [x] Simplify DOM for header  
## 07/05/2022
+ [x] Dynamically parse markdown riddles from 'content/'  
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
