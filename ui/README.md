# README

Feedback2me

This project brings teachers (masters) and students (juniors) together so that students can get feedback on the topics that they want to improve themselves. This platform enables students to upload their materials (video, voice record, text (essay), code) and get feedback online. Teachers are able to choose what they want to evaluate and give feedback by putting remarks on the materials or editing and re-uploading the corrected versions of them.

## Dependencies and dev-dependencies

-   Nodejs and yarn for development environment and package management.
-   Webpack -> build management
-   Babel -> transpiling to ES5
-   Styled components -> CSS in JS.
-   React -> main UI view library.
-   Redux -> store and data management.
-   Saga -> Async middleware.

## Run ui-application in development mode

Start application in development mode: From the "ui" folder run following command. Then it will automatically start the project from 9000 port and it will open default browser. It will also start listening changes in the code and reload changed files on save.

`yarn start`

## Build application for production

Production build: From the "ui" folder run following command. Then it will create folder named "build" which includes necessary files.

`yarn build`

## Run unit tests

From the "ui" folder run following command.

`yarn test`

## Run E2E tests

First run the "ui" as it is explained at "Run application in development mode". After the project is running in dev mode, run following command from e2e folder.

`yarn start`
