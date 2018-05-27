# Reminder Pro
This is a web app that helps users by keeping track of their tasks and duties. The app uses browser cookies to store their tasks on the browser, enabling them to revisit the site and observe their prior reminders. Reminders have time stamps on them, showing the intended date of completion relative to the current browser time.
## Table of Contents
- [Demo](#demo)
- [Implementation](#implementation)
- [Deployment](#deployment)
- [Technologies](#technologies)
- [License](#license)
## Demo
![reminder pro](https://lh3.googleusercontent.com/_fHpfQG7aZiPDheAxUUvUqXjV57REcMYzBkPiTh7cxo2LWxYnRnniYkgW1-tFcr3QUqYEDl4CG_oy6bb-lqmbfJCuoFjkN87QZy_-OtKJ79OcxgzN7cjxG5s_QbKJtL6KSx_O6eG1ej5ecG6Hq-T7BFurrEn4C5sss400rPT3Qj5PgeTaWbuXA-YLhh3ZzrVOesoMBFllEZJhbKT_5cwPLlmrWIUR_krcJHJbUYmWPL5vunErJKm-XjdlyCnbp_M2RM2lw8IPyLBO7isNJ4bBxX2s1S2VJXUv1W1IKHuRDFzxCYAU62-E9s6pqj91Jqq5UZOS0fiwA3s4RXaiO-BNwltbacdEQLnmliCIXzfJJevB5cLypNNg-a85HcyRzcv19pUKZkoj-6hXrGdvuY-XTObEdy5yJiuDlVolLs9O_EMJxvNe8SfxFhc3qCaGHthVXG79FO3N66hCHVd6KDkuTdSbKj5fIyUZOyJx9yhdvP_qI2aN_FmR4LddGe50iaB0OJdimqDcBWkmW6bOV-7mBwUao6pAx_9R6ThM7ff6Y-amrfYdROZ7rv46qJVh1Bd6gpEu5d4aLF5C1gRPGAoEmKWrGYTjJn9OcfDe8U=w1024-h900-no)
The app is currently live: https://ziwam.github.io/reminderpro/
## Implementation
To clone this repository you need [Git](https://git-scm.com/), [Node](https://nodejs.org/) and Node's package manager ([npm](https://www.npmjs.com/)) installed on your computer.
### Dependencies
```
"dependencies": {
    "moment": "^2.22.1",
    "node-sass-chokidar": "^1.3.0",
    "npm-run-all": "^4.1.3",
    "react": "^16.3.2",
    "react-dom": "^16.3.2",
    "react-redux": "^5.0.7",
    "react-scripts": "1.1.4",
    "redux": "^4.0.0",
    "sfcookies": "^1.0.2"
}
```
### Installation
```bash
# clone the repo
$ git clone https://github.com/Ziwam/reminderpro.git

# go into the repo
$ cd reminderpro

# install the dependencies
$ npm install

# start the app
$ npm run start
```
## Deployment
Create a development ready build be running.
```bash
$ npm run build
```
## Technologies
This project includes:
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Sass](https://sass-lang.com/)
- [sfcookies](https://www.npmjs.com/package/sfcookies)
- [moment](https://momentjs.com/)
## License
(MIT License)
The MIT License (MIT) Copyright (c) 2018 Ziwa Mukungu zmukungu@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.