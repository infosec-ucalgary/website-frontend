# How to Contribute to the UofC Information Security Club Website
Hi current and future execs of the club, this document is to help guide you in your escapades to add to, fix, remove from, etc, the club website. 
This document will cover the requirements and tools needed to do this as well as some "ground rules" for code styling, etc. If you have questions feel free
to ask another exec who might know more about web development or you can contact me (ask for Josh 1, I'm sure you can find me through someone in the club or
through the commit history). 

## Purpose of the Website
The purpose of the club website is to act as a public face for all things club related. At the time of writing, we have the following:  
* Home page with all basic information
* An About Us page with all exec names, roles, and pictures
* A calendar page which (suprise!) contains a calendar of all our events
* A Speaker's page containing the information on the current Speaker Series for the semester
* A resources page with links to all kinds of tools, platforms, and other things we find useful
* A CTF Winners page with the winners of the CTF's we've hosted
* And finally a Contact Us page with all necessary links and our email
However, this list is not necessarily all that is needed or wanted. In future semesters there may be more pages needed (aside from required
changes to the site, e.g., personnel changes) or perhaps some might need to be removed. Whatever the current executive body decides, so it shall be.

## Our Stack
At the time of writing, infosecucalgary.ca is built from the following stack:
* Frontend: **Vue 2**
* Backend: **None** :(
* Proxy: **NGINX**
* Cloud Provider: **Digital Ocean**

## Requirements to Make Contributions
1. The first thing *anyone* should do before making changes to the website is: make sure you're allowed to make changes to the website. This entails
getting the go ahead from the VP, the President, or possibly one VP Tech depending on the kind of changes.
2. The second thing is you require a Github account, git installed on your computer, and some kind of text editor.
3. Finally, basic git knowledge is a must. If you know how to clone, branch, pull, add/stage, commit, and push, you're off to the races. If not, please 
watch (or attend) one of our git basics workshops (or watch it on Youtube or Google it, etc).

## Josh's Step-by-Step Guide to Making a Contribution
Congratulations! You've been tasked to make the calendar less janky! (Even though its my pride and joy, its far from perfect). Lets start making changes!
1. Clone the repository from Github
`git clone https://github.com/infosec-ucalgary/website-frontend.git`  
You are required to have an account and be a part of the InfoSec UCalgary organization on Github. 
**AS SOON AS YOU CLONE IT MAKE A NEW BRANCH WITH A NAME RELATED TO THE CHANGE YOU'RE MAKING**
2. `cd ./website-frontend` then `git checkout -b "<NAME OF NEW BRANCH HERE>"` e.g., `git checkout -b "calendartext-fix"`  
Make sure you move into the directory you just cloned, then branch. The name can be whatever you like, as long as it tells anyone who is reading the name
what the purpose of the branch is. I recommend using a naming scheme like so:
`<feature_name>-<fix|add|delete|test>`
Of course, you future generations can use whatever you want, just **keep it consistent**. At the time of writing, our branches are a MESS. I'll try to clean
up most of them before I graduate.  
3. Now you've created your own branch, its time to make changes. This requires working knowledge of HTML, TailwindCSS, and JavaScript  
The JS you're using is based on the framework in use, right now its Vue 2 but maybe someone will change it in the future, I don't know. 
4. Commit often and with **good commit messages**.  
Don't be like me in CPSC 559 where I was losing my patience and made these [horrendous](https://github.com/jdjnovak/CPSC559_Project/commits/main) commits. 
Make commit messages with actual useful meaning. Some examples from our theme of fixing the calendar page might include:  
* `Removed unused weekdays and months arrays from CalendarComponent component`
* `Removed local var in getDateDisplay function and used it directly`
Etc... Of course, you can read up online what makes good commit messages since I'm no commit-saint.
5. Push your changes to your upstream branch.  
When creating a branch locally you need to tell github to create one on its side when you push. This is done by: `git push --set-upstream origin <name of branch>`.
After this is done, you should be able to push your changes without the `--set-upstream` flag.
6. When done making the necessary changes, make a pull request.
To do this, I like doing it on the web interface. You can wait for the popup that says: "X branch was pushed 2 mins ago, create a pull request!" or you can hit the 
"Pull Requests" tab under the repo name and select the base as (usually) main and compare as the branch you're working on. Write any comments and then hit Create
 Pull Request.
7. Do not automatically merge them until they have been Okay'd by one of the VP's or the President.  
Self-explanatory. Make sure they're happy with the changes. **IF** there are merge conflicts, you are required to fix them when you merge. There are infinite reasons 
why something may cause a conflict, but read up on it to better understand how to fix them should the situation arise.
8. Bask in the glory of what you've accomplished.  
And you're done! Well done, you've completed a change!

## What Next?
There are so many things that can be done to the club website to make it better. If you're wondering what could be added, here's a list of ideas that I've thought 
of which either never came to fruition or just never had the time for:
* Add a backend. Could be anything, as long as its usefull for the execs to admin the site. i.e., you could add some kind of CMS system where we store things like 
calendar events, tools (+ its info), speakers, execs and their info, and have the website pull information with API calls using a library like fetch or Axios.  
Try spinning this up yourselves or you could use a prebuilt one like Strapi, which I've used and is nice). The reason I suggest this is because right now, all this
data is just manually added with code. Definitely not ideal, but also my fault because I did this at first and never got around to adding the backend...
* Redoing some of the components to make them look/handle better or adding features to feature-less components. E.g., searching for events in the calendar, sorting 
and searching for tools in the resources page, make the CTF Winners page prettier, and so on and so forth.
* Regular maintenance and changes: updating calendar for current semesters planned schedule, changing About Us page to show current execs, adding or removing tools 
on the Resources page, adding the current semestes speakers to the Speakers page.  
The world is your oyster here, just make sure all changes go through appropriate channels before making them.

## Questions, Concerns, Snide Remarks
If you have any questions about anything legacy (no not my age but things that have been left over that we haven't documented correctly or things that seem like they 
shouldn't be there) reach out to me on discord, I should be in the club discord as Josh N, rm -rf, or Admyral. I'll do my best to answer any questions or ~~ignore~~ ease your 
concerns. Of course, future webmasters can rewrite this as they see fit, especially if they aren't fun and dislike my attempt to make this document not boring.
