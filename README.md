# Coding Library

## Introduction

Coding Library is a coding related community based social media website. Where users can see helpful posts from other users or they can create their own posts on coding-related topics to help other users out. If the post is helpful, users may comment or like it, bookmark it, or follow the user who posted it.

> **Note**: In order to achieve a merit grade, I created a last-minute ContactForm model based on a suggestion from my newly appointed mentor. Some of the places that you may notice that I'm not mentioning about the contact page are due to last minute modal was added.

![responsive image for the app](./src/assets/readme-images/responsive-coding-library.png)

## Preview

- ### Live View For [Project5 Coding Library Frontend ](https://p5-coding-library.herokuapp.com/)

- ### Github Repository For [Coding Library DRF-API Backend ](https://github.com/hashim222/coding-library-drf-api)

- ### Live View For [Coding Library DRF-API Backend ](https://coding-library-drf-api.herokuapp.com/)

## UX

- ### Flowchart

  - Flowchart was created before I created the project, which gave me an idea of which user has access to which page and what each link should be doing.

    > Note: Flowchart was created before starting the project but forgot to include `Create Posts` for logged in users. Therefore, the flowchart may not match 100% with the final deployed version due to changes were made in the development.

    ![flowchart image](./src/assets/readme-images/flowchart.png)

  - Contact page flowchart.

    ![Contact page flowchart](./src/assets/readme-images/contact-flowchart.png)

- ### Color scheme

  - Using Google, I researched what colors are best for a coding-related website that is also user-friendly, and I decided to go with light blueish, dark blueish, white, and light white tones.

    ![color scheme for the site](./src/assets/readme-images/color-scheme.png)

- ### Font Used

  - To make the website stand out for UX, I used font Oswald and font Dosis:

    - 'Oswald', sans-serif  
      ![color scheme for the site](./src/assets/readme-images/font-oswald.png)

    - 'Dosis', sans-serif  
      ![color scheme for the site](./src/assets/readme-images/font-dosis.png)

- ### Wireframe

  - Site wireframe can be seen in the [wireframe.md](wireframe.md) file.

- ### Agile Methodology

- This project was created using the agile methodology and github issue boards.

  - Project github issues can be accessed [here](https://github.com/hashim222/p5-coding-library/issues).

  - To make my kanban board public, I changed visibility from private to public in project settings and It can be accessed here [here](https://github.com/users/hashim222/projects/11).

    ![agile methodology 1](./src/assets/readme-images/agile-methodology-1.png)
    ![agile methodology 2](./src/assets/readme-images/agile-methodology-2.png)

- ### User Stories
  You can view all the user stories and admin stories [here](user-story.md)

## Features

- ### **Existing Features**

  - #### **Guest User Site Sidebar**

    - Guest users will have access to all of these links in the sidebar of the website, and by clicking each link they will be taken to other pages on the site.

      ![guest user site sidebar](./src/assets/readme-images/desktop-guest-sidenavbar.png) ![guest user site sidebar tablet](./src/assets/readme-images/medium-devices-guest-sidenavbar.png)

  - #### **Logged In User Site Sidebar**

    - Logged in users will have access to all of these links in the sidebar of the website, and by clicking each link they will be taken to other pages on the site.

      ![logged in user site sidebar](./src/assets/readme-images/desktop-logged-in-sidenavbar.png) ![logged in user site sidebar tablet](./src/assets/readme-images/medium-devices-logged-in-sidenavbar.png) ![logged in user site sidebar mobile](./src/assets/readme-images/mobile-devices-logged-in-sidenavbar.png)

  - #### **Home Page**

    - On the home page, users can scroll down to see all the posts created by other users in the app so far.

      ![home page](./src/assets/readme-images/home-page.png)

    - Each post can be searched either by typing the title of the post or by typing the username.
    - The search bar is only visible on the home page, followings feed, and bookmarked topics pages.

      ![search post](./src/assets/readme-images/search-posts.png)

    - If the page contains more than 10 posts, or if each post has more than 10 comments, an infinite scroll will show up.

  - #### **About Page**

    - By clicking on the `about us` link from the sidebar, users will be directed to the About page, which provides information about the app and what to expect from it.

      ![about page](./src/assets/readme-images/desktop-about-page.png)

      ![about page for the tablet](./src/assets/readme-images/tablet-about-page.png) ![about page for mobiles](./src/assets/readme-images/mobile-about-page.png)

  - #### **Create Topic Page**

    - By clicking on the `Create Topic` link from the sidebar, users will be directed to the create post form. Here the user can upload their image, add a post title, and caption of the post.

      ![Create post form desktop](./src/assets/readme-images/desktop-create-post-form.png)
      ![Create post form tablet](./src/assets/readme-images/tablet-create-post-form.png)
      ![Create post form mobiles](./src/assets/readme-images/mobile-create-post-form.png)

    - The user will receive an error message if they forget to fill out one of the field or upload an image that is larger than 2MB.

      ![Create post form mobiles](./src/assets/readme-images/create-post-errors.png)

    - Upon successfully creating the post, users will be redirected to the post detail page where they can see what they have posted.

      ![post detail page](./src/assets/readme-images/post-detail-page.png)

  - #### **Post Detail Page**

    - Post owners can edit and delete their own posts by clicking the three dots icon at the top of the page.

      ![post detail page](./src/assets/readme-images/edit-delete-post.png)

    - If the post caption has a lot of text, a scrollbar will show up, which is added for users to move quickly to the next post.

      ![post scrollbar](./src/assets/readme-images/post-scrollbar-text.png)

    - Other logged-in users will be able to like, bookmark, and comment on the post. Each time a user likes and comments, the number of likes and comments will go up.

      > **Note**: `1-` Those posts owned by a user can't be liked or bookmarked by them, However, post owners can comment on their own post. `2-` A guest user cannot like, bookmark, or comment on the post

      ![likes bookmark comment icons](./src/assets/readme-images/like-bookmark-comments-icons.png)

    - The comment owner can see the three dots icon button at the top of the comment they made, and by clicking the pencil icon, they can edit their comments. They can also click on the trash icon button to remove their comment from the post.

      ![edit delete comments](./src/assets/readme-images/edit-delete-comment.png)

  - #### **Followings Feed Page**

    - By clicking on the `Followings Feed` link from the sidebar, users will directed to the followings feed page. Here they can see all the posts from the users they are following.

    - A popular profile component will be displayed on the all pages of the site.

    - For desktop, only the last 10 profiles that were created will be shown on the popular profile, while on smaller devices, only four profiles will be shown.

      ![popular profiles desktop](./src/assets/readme-images/desktop-popular-profiles.png)

      ![popular profiles tablet](./src/assets/readme-images/tablet-popular-profiles.png)

    - Users can view the profile of any user by clicking their profile avatar from the popular profile component.

    - New users will not see any feeds unless they follow a user who has posted something.

      ![results not found follow the user](./src/assets/readme-images/result-not-found-follow-the-user.png)

    - Logged in users will have access to the follow and unfollow buttons on the popular profile section. After clicking the follow button, a user will see the unfollow button, both in the popular profile section and on their profile page.

      ![popular profile section following](./src/assets/readme-images/popular-profile-page-following.png)

      ![profile page followings](./src/assets/readme-images/profile-page-following.png)

    - Each time a user follows another user, the following count will go up for the user who is following and the follower count will go up for the user he just followed.

    - Users can unfollow users if they don't want to receive the feeds from the user they are following.

  - #### **Bookmarked Topic Page**

    - By clicking on the `Bookmarked Topic` link from the sidebar, the user will be directed to the bookmarked topic page. Here they can see all the posts they've bookmarked.

    - To remove a post from the bookmarked page, click the bookmark icon again on the posts they are not interested in, and the bookmark icon will lose its light blue background colour. After refreshing the page the post will be removed from `Bookmarked Topic` page.

      ![bookmarkd topic](./src/assets/readme-images/bookmarked-topic.png)

      ![removed bookmark](./src/assets/readme-images/removed-from-bookmark.png)

    - Users who have not bookmarked any posts will not see any posts on the page.

      ![result not found bookmark the post](./src/assets/readme-images/result-not-found-bookmark-the-post.png)

  - #### **Contact Us Page**

    - By clicking on the `Contact Us` link from the sidebar, the user will be directed to the contact us form. Here they can contact the site admin.

    - Upon completing the form, users will be sent to the thank you page, and after 4 seconds, they will be redirect to the home page.

      ![fill ythe contact form](./src/assets/readme-images/fill-contact-form.png)

      ![thank you for sending the message](./src/assets/readme-images/successfully-submitted.png)

    - The admin of the site can see the message in the admin panel.

      ![admin can see messages](./src/assets/readme-images/admin-can-see-message.png)

  - #### **Logout**

    - By clicking on the `Logout` link from the sidebar, a modal will display which will ask the user: `Are you sure you want to logout?` By clicking no, they will be taken back to the previous page they were in, and by clicking yes, they will logout from the app.

      ![logout modal](./src/assets/readme-images/logout-modal.png)

  - #### **My Profile Page**

    - By clicking on the `My Profile` link from the sidebar, the user will directed to the my profile page.

    - The profile page displays the user's username, profile avatar, posts count, followers count, followings count, name of profile owner, coding experience, favourite programming language, about me, and profile posts.

      ![owner profile page](./src/assets/readme-images/view-profile-page.png)

    - The profile owner can edit their profile bio, change the username, and change the password by clicking the three dots icon at the top of the page.

      ![edit toggle](./src/assets/readme-images/edit-option-for-profile.png)
      ![edit profil bio](./src/assets/readme-images/edit-profile-bio.png)
      ![change username](./src/assets/readme-images/change-username.png)
      ![change password](./src/assets/readme-images/change-password.png)

    - A block icon will show up in the owner's profile if no fields have been updated yet, which will disappear after updating the fields.

      ![profile has not been updated yet](./src/assets/readme-images/profile-not-editied-yt.png)
      ![profile has been updated](./src/assets/readme-images/profile-has-been-updated.png)

  - #### **Sign up Page**

    - By clicking on the `Sign Up` link from the sidebar, new users can register with the site, and after successfully registering, users are directed to the sign in page.

    - The user does not have to sign up if they already have an account; they can just sign in with their existing credentials

      ![sign up page](./src/assets/readme-images/signup-page.png)

  - #### **Sign In Page**

    - By clicking on the `Sign In` link from the sidebar, users can sign in if they already have an account, if not they must sign up first.

      ![sign in page](./src/assets/readme-images/signin-page.png)

  - #### **Page Not Found**

    - A 404 error page will be displayed if the user enters a URL that does not exist.

      ![404 page not found](./src/assets/readme-images/404-page-not-found.png)

- ### Future Features
  - In the future I would like to add a chat option, which would allow users to communicate privately with each other.
  - In the future, I would like to add an option for struggling users so they can add the part of the code they are working on and multiple images can be sent, so members of the community can better understand the issue and can help them.
  - When creating a post or comment, users can choose between a variety of text styles for the textfields.
  - To make signing up easier for new users, I would like to add an option of a one-click signup button where users who already have an account with Google or Facebook, can sign up by simply clicking on Google or facebook.
  - A better login and registration form will be added in the future, and users will only be allowed to register if they verify their email address.

## Testings

- testings can be seen by going into the [testings.md](testings.md) file.

## Bugs

- ### Fixed Bugs

  - At the beginning of the project, I encountered this bug when I tried to fetch a request from the API for the first time for a signup form, which after submitting would take me to an empty page with a lot of console errors. The issue was so frustrating that even a few tutors were unable to determine what was causing it. Later on, another tutor asked me if the link in the Axios default was correct, and that turned out to be the issue. The link I added was for the deployed frontend, not the backend deployed API. Replacing it with the deployed API link fixed the problem.

    ![axios default bug](./src/assets/readme-images/axios-default-bug.png)

  - When guest users try to add `/bookmarked_topics` to the url manually, they could see all posts that were bookmarked by other users. So to fix this bug, I've already created a custom `UseRedirect()` hook with the help of CI moments walkthrough project, which redirects guest users to the homepage if they try to access the authorized content. Adding `UseRedirect("loggedOut")` to the PostsPageContent fixed the bug for me.

  - The bug was that I kept seeing an empty loading page without seeing any backend. I investigated further by going into the backend and there I kept seeing a user not found message instead of "Welcome to my Coding Library drf API!". Sean, the tutor support, looked into his desktop and said it worked fine on his desktop for both the frontend and backend, which I was confused about. Then he mentioned that you may be on a deleted user profile, which he was right about. I was on the deleted profile that was deleted early on from the admin panel was causing the problem. He suggested that I should try clearing the browser cookies which after doing it fixed the issue for me.

    ![user not found error on the backend](./src/assets/readme-images/backend-user-not-found.png)
    ![account was deletd which i was on](./src/assets/readme-images/loading-deleted-account-bug.png)

- ### Unfixed Bugs

  - One of the issue I encountered was that when user/owner clicked on the three-dot icon to edit their profile or post, the dropdown menu would open at the top of the Popular profile page, which I didn't wanted. To fix it, I tried adding margin, but that caused a console error, so I stayed with the previous issue and documented it in the readme.

    ![edit profile dropdown bug](./src/assets/readme-images/three-dot-icon-bug-profile.png)

    ![edit post dropdown bug](./src/assets/readme-images/three-dot-icon-bug-posts.png)

  - I encountered the memory leak bug on the EditProfilePage page whenever I tried to edit the form.
    So I contacted the tutor support, and even they couldn't figure out what was wrong. Later on Oisin/tutor sent me a [document](https://stackoverflow.com/questions/71258604/how-to-fix-react-warning-cant-perform-a-react-state-update-on-an-unmounted-co), Which says that this is a bug in react that will be fixed in the future and my mentor suggested that I should add this to the unfixed bug section in the readme.

    ![edit profile memory leak bug form](./src/assets/readme-images/edit-profile-memory-leak-form.png)

    ![edit profile memory leak bug](./src/assets/readme-images/edit-profile-memory-leak.png)

  - The next issue I found is similar to the edit profile page, but this issue appears if the user navigates through the sidebar multiple times. The error would display in the console randomly, and I was unable to figure out what was causing it because all the features of the were working as expected, so I left it in the bug section so I can investigate this in the future.

    ![post page content memory leak bug](./src/assets/readme-images/post-page-content-memory-leak.png)

  - It's not just me; even the Code Institute Moment project has this bug too. In both cases, users can access the deleted post edit form, and when they try to submit the form, the form will not submit, but in the console a `404 not found` error is displayed for the logged in user, and for a guest user `503(Service Unavailable)` error is displayed. I found out about this during the manual testing I was doing for my project. Even though users cannot do much with it, I still wanted to mention it in the bug section, and I will look into this in the future.

    - **Deleted Post**

      ![Deleted Post bug](./src/assets/readme-images/deleted-post-number.png)

    - **Guest user has access to the deleted post edit form**

      ![Guest user has access to the deleted post edit form bug](./src/assets/readme-images/guest-user-has-access-to-the-deleted-post-form-bug.png)

    - **Logged in user has access to the deleted post edit form**

      ![Logged in user has access to the deleted post edit form bug](./src/assets/readme-images/logged-in-user-has-access-to-the-deleted-post-form-bug.png)

  - Using the iPhone 11 Safari and Samsung internet browsers on mobile, I found a bug that prevented users from logging in, though their accounts were still visible in the admin panel. Where those login credentials that didn't work on the devices listed above worked on my Samsung Galaxy s20s chrome and firefox browser. This bug was discovered last minute by my little sister, who uses an iphone. I then tested it on my mom's Samsung internet browser where it didn't work either. However, her Chrome browser was able to log into the website.

## Technologies Used

The following technologies were used throughout the development of the project:

- ### Language Used

  - [HTML](https://www.w3schools.com/html/)
  - [CSS](https://www.w3schools.com/css/)
  - [Javascript](https://en.wikipedia.org/wiki/JavaScript)

- ### Libraries/Framework Used

  - [Bootstrap5](https://getbootstrap.com/)
  - [React-Bootstrap5](https://react-bootstrap.github.io/)
  - [React js](https://getbootstrap.com/)

- ### Other Technologies

  - [NodeJs](https://nodejs.org/en/)
  - [W3School](https://www.w3schools.com/)
  - [Stackoverflow](https://stackoverflow.com/)
  - [Git](https://git-scm.com/)
  - [Github](https://github.com/)
  - [Gitpod workspace](https://gitpod.io/workspaces)
  - [Heroku](https://dashboard.heroku.com/apps)
  - [Flowchart](https://lucid.app/documents#/documents?folder_id=home)
  - [coolors](https://coolors.co/)
  - [Balsamiq Wireframes](https://balsamiq.com/wireframes/)
  - [Font Awsome](https://fontawesome.com/)
  - [Google Fonts](https://fonts.google.com/)
  - [Slack](https://slack.com/intl/en-gb/)
  - [geeksforgeeks](https://www.geeksforgeeks.org/)
  - [Diff checker](https://www.diffchecker.com/text-compare/)
  - [Am i responsive](https://ui.dev/amiresponsive)
  - [whimsical Wireframe](https://whimsical.com/)
  - [Pexels](https://www.pexels.com/)
  - [canva](https://www.canva.com/)
  - [Grammarly](https://www.grammarly.com/)
  - [Google spreadsheet](https://www.google.co.uk/sheets/about/)

## Components

- ### The following components have been implemented in this project and reused throughout the app:
  - **Asset:** Using this component, spinners are loaded throughout the site and user messages are displayed if search results are not found.
  - **Avatar:** Users can identify each other more easily with the help of this component, which is used throughout the site for user profile images.
  - **DropdownToggle Page:** In the app, this component is used to edit posts and profiles by users/owners.
  - **SideNavBar:** This component is present on every page of the application. The user can access most site features in one place, from any page, which improves UX. It also collapses into a sidenavbar menu for screen sizes medium and below.
  - **LoggedInIcons:** Using this component, logged in users will be able to access all app links from the sidenavbar.
  - **LoggedOutIcons:** Using this component, guest users will be able to access all app links from the sidenavbar.
  - **NotFound:** Invalid urls were handled by this component. If users try to input invalid urls, they will see a page not found message.
  - **UseRedirect:** When users access a page they shouldn't be viewing, this component redirects them to their home page.
  - **UseClickOutsideToggle:** This component helps collapse a sideNavBar menu by clicking any link within the menu or by clicking outside the menu to collapse it for a smooth UX. Which By default, you must click on each link in the sidenavbar menu and then press the hamburger icon again to collapse it.

## Deployments

- ### Set up Project

  - Create a new workspace by clicking on the `Gitpod` button.

  - Once the workspace has loaded, run this command on the terminal to create a react app: `npx create-react-app . --use-npm`

  - You can check whether the app is working by running the terminal command `npm start` once it has been installed. Browser should open with the react logo.

  - Remove the logo import from the top of App.js, and replace the React Header element with a custom `<h1>Hello world</h1>`.

  - Make sure to include `"engines": { "node": "16.18.0" }` Dependency in the `package.json`, you may not need it, but when I first installed npm react it was missing from my `package.json` file, and I was getting an error when I deployed on the Heroku for the first time.

  - Confirm the changes have rendered in the browser preview then add these commands to the terminal `git add .`, `git commit -m 'set up react project'` and `git push`.

  - Go to the `Deploy` tab on Heroku and click on the `Deployment Method` option and select `GitHub`.

  - Go to `App connected to GitHub` and search for the relevant repository. Click `Connect` to connect to that repository.

  - Go to `Manual Deploy` section and click `Deploy Branch`. Click on `build logs` to monitor build and ensure deployment is successful. Build is complete when log states `Build succeeded!`.

  - To view the newly deployed app, click the `Open App` button and you are good to go.

- ### Final Deployments

  - In the scripts section of `package.json` in your gitpod workspace, add the following command:

    ```
    "heroku-prebuild": "npm install -g serve",
    ```

  - Add a `Procfile` at the root of the project with the following web command:

    ```
    web: serve -s build
    ```

  - To add everything on the github, add these commands to the terminal

    ```
      git add .
      git commit -m 'set up react project'
      git push
    ```

  - To deploy the project, navigate to the heroku deploy tab and click on the deploy button at the bottom of the page.

## Credits

- ### Content

  - Using the [CI Moment](https://github.com/Code-Institute-Solutions/moments) project walkthrough as a guide, I then customized the project to make it my own. The profile page, bookmark topics, and contact page were also updated.
  - [Gareth-McGirr mentor](https://github.com/Gareth-McGirr/body-doodles) and [Leah Fisher's pp5](https://github.com/cornishcoder1/pp5-react-frontend-the-winding-path) projects provided insight into what should be added into my readme file and what testing is required for my project.
  - I would like to thank Sean tutor for helping me solve the user not found issue I was having.
  - [Grammarly](https://www.grammarly.com/) was used while creating the readme documentation to fix some grammar issues due to english being not my first language.
  - By making this project I had plenty of help from the [Slack](https://slack.com/intl/en-gb/) Community and tutor support.
  - In order to find a solution to a problem, I often search on the [Stackoverflow](https://stackoverflow.com/).
  - ESlint support was provided by alumni student Ian Meigh in the Slack channel.

- ### Media
  - Site logo and search result not found logo were made using [canva](https://www.canva.com/)
  - Images for the site were mostly taken from [pexels](https://www.pexels.com/)
  - `404 graphic` was taken from [Vecteezy](https://www.vecteezy.com/?utm_source=vecteezy-download&utm_medium=license-info-pdf&utm_campaign=license-info-document) website.
