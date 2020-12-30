<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="MapAction" src="./src/images/logo.svg" width="210" />
  </a>
</p>
<h1 align="center">
Web Mapping Application
</h1>

This is a [React](https://reactjs.org/) based web application built using the Gatsby framework. This application was built to prove the concept that MapAction has the in-house capability to create & publish web maps using open source tooling.

## 🛠 Tooling

-   [Gatsby](https://www.gatsbyjs.com)
-   [Typescript](https://www.typescriptlang.org/)
-   [Material UI](https://material-ui.com)
-   [Styled-Components](https://styled-components.com/)
-   [Leaflet](https://leafletjs.com/) & [React-Leaflet](https://react-leaflet.js.org/)

## 🚦 Requirements

-   NodeJs
-   Yarn v1.x
-   IDE of choice
-   Git

## 🚀 Quick start

1.  **Install dependencies**

Install the dependencies for the repositiory

    ```shell
    yarn
    ```

2.  **Start developing.**

    ```shell
    yarn develop
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `repository` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in the project.

    .
    ├── .husky
    ├── node_modules
    ├── src
    ├── .eslintrc
    ├── .prettierrc
    ├── .stylelintrc
    ├── package.json
    └── README.md
    └── tools

1.  **`/.husky`**: This directory contains the git hooks which will help ensure that code leaving a developers machine meets our baseline quality gate.

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

1.  **`.eslintrc`**: This is a configuration file for [ESLint](https://eslint.org/). ESLint is a tool to lint Javascript & Typescript files.

1.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

1.  **`.stylelintrc`**: This is a configuration file for [Stylelint](https://stylelint.io/). Stylelint is a tool to help lint CSS - this is configured to work with Styled-Components.

1.  **`README.md`**: A text file containing useful reference information about your project.

1.  **`tools`**: Contains templates & scripts for generating new map pages & components

## 🎓 Learning Gatsby

-   **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

-   **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 🧰 Generating new Map Pages & Components

This repo contains templates for created the following:

-   New Components
-   New map page & component

To create these run `yarn generate` & follow the prompt from the terminal.

## 💫 Deploy

As this is a POC the repo is current in my own github profile, but if you would like access thats not a problem. By hosting the repo under my own GitHub profile I was then able to set build & deployments to happen upon pushes to master. The builds & deploys are held on [Netlify](https://www.netlify.com/) under my own profile, but I can grant access to anyone who wants it.

If a merge to master & the build on Render are successful then the site will be deployed to [mapaction-web-mapping-poc](https://mapaction-web-map-poc.netlify.app/). This is a temporary solution until we can agree, if this is the sort of app MapAction are interested in & if so, where to host it.
