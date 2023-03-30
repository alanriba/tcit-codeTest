# TCIT - CodeTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

This is the repository for the TCIT Code Test. It contains a simple web application that displays information about records as they are entered. Allowing deletion and filtering.

## Requirements
To run this application, you will need the following installed on your computer:

- Node.js
- npm

## How to run the application
- Download or clone this repository on your computer.
- Open the terminal and navigate to the repository root folder.

Run the following command to install the application dependencies:
```batch
npm install
```

- Execute the following command to start the application:
```batch
npm start
```

- Open your browser and visit http://localhost:3000 to see the application in action.

## Using json-fake
This repository also uses json-fake to provide fake data for the application. If you want to change the Star Wars character data displayed in the application, you can do so by modifying the src/tcit.json file.

To generate fake data, you can use json-fake. Here are some steps to do so:

Install json-fake globally on your computer:
```batch
npm install -g json-fake
```

Create a schema definition file for the data you want to generate. For example, you can create a characterSchema.json file with the following content:

```json
{
  "posts": [
    {
      "id": 1,
      "title": "test",
      "description": "prueba de codigo"
    }
  ]
}
```

## Using ngrx
This repository uses ngrx to manage application state. Here are some steps to install and use ngrx:

```batch
npm install @ngrx/store @ngrx/effects @ngrx/entity --save

```

## Link Review
https://drive.google.com/file/d/1eYDP5u8aR9v5aOXRN6dSSgnaBRkT6mA-/view?usp=share_link

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
