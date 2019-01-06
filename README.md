# Github User Search

The App can be tried out at https://the-github-user-search.herokuapp.com/

## Engines

The app was developed with the following engines.

 Node 10.14.2

 npm 6.4.1

 yarn 1.12.3

## Setup

1) Clone Repository
```
git clone https://github.com/darrelltzj/github-user-search.git
```

2) Change into working directory.

3) Install dependencies.

```
yarn
```

4) Set Environment Variables. Example:

```
PORT=3000
REACT_APP_THEME=default
```

5) Start the App locally on development.

```
yarn dev
```

6) Bundle app into build directories for production.

```
yarn build
```

7) Start the App on production.

```
yarn start
```

## Objectives

* ✔️ There is a search bar to let the user search by username (login name)

* ✔️ While searching, the application shows an animated loading indicator made by CSS (using gif image is not allowed)

* ✔️ After the search is completed, the application shows the list of users along with their avatar and their username on the same page

* ✔️ If the results are not complete in one page, the pagination is shown on the screen

* ✔️ When a list item is clicked, the application is navigated to a new page that display the parsed JSON payload of that user

* ✔️ The new page also has to display the list of the user's repositories, followers and following

* ✔️ The application is built by React and Redux
Webpack is being used to build the application

* ✔️ The application style is built by one of the CSS preprocessors or CSS-in-JS

* ✔️ The application has to be responsive and optimised for mobile

* ✔️ A documentation on how the application works and how to set up and build the project is provided

* The application is production ready (HINT: try Google’s PageSpeed or Lighthouse)

    * PWA

* The application is deployed on AWS instead of Heroku or Now

    * Enable HTTPS

    * Implement continuous integration

* The application supports IE10 and/or Android native browser (Chrome 30.0)

* The pages are server-side rendered and are cached in the server

    * ✔️ User page data load before render

    * ✔️ Troubleshoot ServerStyleSheet

    * ✔️ Store Initial Store && Fix Warning: Extra attributes from the server: src,alt

    * ✔️ Use UNSAFE_ prefix for componentWillMount

    * Look for alternatives for componentWillMount

    * Cache Components

* ✔️ All pages' URL is reusable - meaning it can be copied and pasted on different browser and still shows the same result

    * ✔️ 404 Page

* All pages are SEO optimised
The project supports code splitting for each pages

    * ✔️ React Helmet and SEO Meta Tags

    * Code splitting (Fix User page chunk bug)

* The results list also asynchronous-ly shows the number of followers and following of each user without going the user page

* ✔️ The search input does the searching as you type (See google search as an example)

    * Reset recommendations on click outside search component

* ✔️ There is animated transition between pages

    * Update react-transition-group to version 2

* ✔️ The application supports theming and can easily be switched between themes

    * ✔️ Enable Env
