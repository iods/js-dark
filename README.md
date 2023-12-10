<h1 align="center">Dark JS</h1>

A lightweight, full-stack JavaScript project and documentation library on learning the languages and their defaults.

Goal: Write elegant, fast, and ubiquitous Javascript and React.

Facts
-----
* Version: 0.1.5
* [Repository on Github](https://github.com/iods/js-dark)


Getting Started
---------------
Instructions on how to download, install, and configure the project and included packages.

### Installation

msg: "Welcome to the Dark Society Cloud. A Go, Python, and NodeJS API platform.",

First, clone the Dark JS framework globally.

```shell
 $ git clone https://github.com/iods/js-dark
 $ cd js-dark
 $ make
 $ make up
 $ make down
```

Navigate to [http://localhost:8150](http://localhost:8150)

#### For Development

```shell
 $ make dev
 $ make dev-up
 $ make down
```

#### For Vanilla Testing

```shell
 $ make test
 $ make test-up
 $ make down
```






**Local Shell [Default]**
* `$ docker compose build`
* `$ docker compose up -d`

**Local Shell [Development]**
* `$ docker compose -f docker-compose.dev.yml build`
* `$ docker compose -f docker-compose.dev.yml up -d`


### Alternative

**Using Make [Default]**
* `$ make docker/build`
* `$ make docker/up`
* `$ make docker/down`

**Using Make [Development]**
* `$ make docker/build-dev`
* `$ make docker/up-dev`
* `$ make docker/down`


### Requirements
 * [Git](http://git-scm.com)
 * [JavaScript](https://www.javascript.com/)
 * [JavaScript ES6](http://es6-features.org/)


### Known Issues
 * [#2 Cleanup and Organize Environment](https://github.com/iods/js-dark/issues/2)
 * [#3 Research and Experiment w/ Environment Defaults](https://github.com/iods/js-dark/issues/3)
 * [#4 Setup Build Scripts and Configure CI for npm](https://github.com/iods/js-dark/issues/4)


### Installation

##### Using Node
```sh
$ yarn install -g @iods/darkjs
```

Built With
----------
* [DarkJS](https://github.com/iods/js-dark) - A Platform Love Affair


JavaScript
-----------

### Components
@TODO

### Extensions

# Getting Started with Create React App dockerized

## Local Commands

### Getting Local Up

`yarn install`


## Docker commands
### If pulled for the first time or the package.json changed run
docker-compose build

### Then, run the following command to start the environment.
docker-compose up -d

### To see the logs of your app
docker-compose logs -f web

### To see and follow the logs of your tests
docker-compose logs -f test

### If you need to install any npm package.
docker-compose exec web npm install pacakge-name

### stop the containers
docker-compose down

```
Give an example
```


### Tests
@TODO series of step by step tests


### Code Styles
@TODO relevant code style information or documentation.


Support
-------
If you have any issues with this project, open an issue on [Github](https://github.com/iods/js-dark/issues)


Developer
---------
 * **Rye Miller** - *Initial work* - [GitHub](http://github.com/iods/), [Homepage](https://ryemiller.io)

See also the list of [contributors](https://github.com/iods/js-dark/contributors) who participated in this project.


Versioning
----------
For transparency into the release cycle and in striving to maintain backward compatibility, this project is
maintained under [the Semantic Versioning guidelines](http://semver.org/).


Acknowledgements
----------------

* **John Resig** & **Bear Bibeault**, writers of [**Secrets of the Javascript Ninja**]()


License
-------
This project/code is released under [the MIT license](https://github.com/iods/js-dark/LICENSE).


Copyright
---------
(c) 2017-Present Rye Miller. All Rights Reserved.
