# github-api-gaming-site
This is a user interface that uses github api to search repositories, see details and view issues

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.
# Installation

1. Go to project folder and install dependencies:

```bash
npm install
```
2. Launch development server, and open `localhost:4200` in your browser:

```bash
npm start
```
## Project structure

```
dist/                        compiled version
e2e/                         end-to-end tests
src/                         project source code
|- app/ 
|- |- components             app components, single-use and reusable components
|  |- services/              core module (singleton services)
|  |- shared/                shared module  (contants, directives and pipes)
|  |- app.component.*        app root component (shell)
|  |- app.module.ts          app root module definition
|  |- app.routing.ts         app routes
|  +- ...                    additional modules and components
|- assets/                   app assets (images, fonts, sounds...)
|- environments/             values for various build environments
|- index.html                html entry point
|- styles.css                global style entry point
|- main.ts                   app entry point
|- polyfills.ts              polyfills needed by Angular
+- test.ts                   unit tests entry point
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). (NOTE: I didn't focus on testing as I am still poilishing on my testing skills)

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
