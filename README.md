# Coding Library

## Introduction

Coding Library is a coding related community based social media website. Where users can see helpful posts from other users or they can create their own posts on coding-related topics to help other users out. If the post is helpful, users may comment or like it, bookmark it, or follow the user who posted it.

## Preview

- ### Live View For [Project5 Coding Library Frontend ](https://p5-coding-library.herokuapp.com/)

- ### Github Repository For [Coding Library DRF-API Backend ](https://github.com/hashim222/coding-library-drf-api)

- ### Live View For [Coding Library DRF-API Backend ](https://coding-library-drf-api.herokuapp.com/)

## UX

- ### Flowchart

  - Flowchart was created before I created the project, which gave me an idea of which user has access to which page and what each link should be doing.

    > Note: Flowchart was created before starting the project but forgot to include `Create Posts` for logged in users. Therefore, the flowchart may not match 100% with the final deployed version due to changes were made in the development.

    ![flowchart image](./src/assets/readme-images/flowchart.png)

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

- ### User Stories
  You can view all the user stories and admin stories [here](user-story.md)

## Features

- ### **Existing Features**

  - #### **Guest User Site Sidebar**

    - Guest users will have access to all of these links in the sidebar of the website, and by clicking each link they will be taken to other pages on the site.

      ![guest user site sidebar](./src/assets/readme-images/desktop-guest-sidenavbar.png) ![guest user site sidebar tablet](./src/assets/readme-images/medium-devices-guest-sidenavbar.png)

  - #### **Logged In User Site Sidebar**

    - Logged in users will have access to all of these links in the sidebar of the website, and by clicking each link they will be taken to other pages on the site.

      ![logged in user site sidebar](./src/assets/readme-images/desktop-logged-in-sidenavbar.png) ![logged in user site sidebar tablet](./src/assets/readme-images/medium-devices-logged-in-sidenavba.png)

  - #### **About page**

    - The app's About page provides information about the app and what to expect from it.

      ![about page](./src/assets/readme-images/desktop-about-page.png)

      ![about page for the tablet](./src/assets/readme-images/tablet-about-page.png) ![abput page for mobiles](./src/assets/readme-images/mobile-about-page.png)

- ### Future Features
  - In the future I would like to add a chat option, which would allow users to communicate privately with each other.
  - In the future, I would like to add an option for struggling users to post their code so members of the community can help them with their issues.

## Testings

## Bugs

- ### Fixed Bugs

- ### Unfixed Bugs

  - One of the issues I encountered was that when user/owner clicked on the three-dot icon to edit their profile or post, the dropdown menu would open at the top of the Popular profile page, which I did not want. To fix it, I tried adding margin, but that caused a console error, so I stayed with the previous issue and documented it in the readme.

    ![edit profile dropdown bug](./src/assets/readme-images/three-dot-icon-bug-profile.png)

    ![edit post dropdown bug](./src/assets/readme-images/three-dot-icon-bug-posts.png)

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

## Credits

- ### Content

- ### Media
  - `404 graphic` was taken from [Vecteezy](https://www.vecteezy.com/?utm_source=vecteezy-download&utm_medium=license-info-pdf&utm_campaign=license-info-document) website.
