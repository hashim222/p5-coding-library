# Coding Library

## Introduction

Coding Library is a coding related community based social media website. Where users can see helpful posts from other users or they can create their own posts on coding-related topics to help other users out. If the post is helpful, users may comment or like it, bookmark it, or follow the user who posted it.

## Preview

- ### Live View For [Project5 Coding Library Frontend ](https://p5-coding-library.herokuapp.com/)

- ### Github Repository For [Coding Library DRF-API Backend ](https://github.com/hashim222/coding-library-drf-api)

- ### Live View For [Coding Library DRF-API Backend ](https://coding-library-drf-api.herokuapp.com/)

## UX

- ### Agile Methodology
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

    - 'Dosis', sans-serif;
      ![color scheme for the site](./src/assets/readme-images/font-dosis.png)

- ### Wireframe
  - Site wireframe can be seen in the [wireframe.md](wireframe.md) file
- ### User Stories
- ### Admin Stories

## Features

- ### Existing Features
- ### Future Features

## Testings

## Bugs

- ### Fixed Bugs

- ### Unfixed Bugs

  Although this might not be a bug, I still want to mention it. My goal was to give users the option of leaving the spaces they want in captions they are posting, but I couldn't achieve that because models do not have the option to turn off trimming for whitespaces and the serializer has this `trim_whitespace=False` which only supports charfields but i used TextField in modal and it was too late for that to change. I'll investigate this further in the future.

  - ### I was trying to achieve:

    ![I was trying to acive in this image](./src/assets/readme-images/trying-to-acheive.png)

  - ### This is how it looks:

    ![but got this](./src/assets/readme-images/got-this.png)

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

## Deployments

## Credits

- ### Content
- ### Media
  - `404 graphic` was taken from [Vecteezy](https://www.vecteezy.com/?utm_source=vecteezy-download&utm_medium=license-info-pdf&utm_campaign=license-info-document) website.
