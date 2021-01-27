Dark JS
=======

Basic Usage
-----------


Development
-----------

### JSDK Developer (React)

Application can be run from both a Docker environment or Node locally (nvm).

##### Using Node

```sh
$ yarn install
```

```sh
$ yarn serve
```

##### Using Docker

```sh
# uncomment - '8080:3000'
# uncomment - ./Library/developer-react:/usr/share/nginx/html:delegated
$ docker-compose up
```


### JSDK Developer (Vue.js)

Application can be run from both a Docker environment or Node locally (nvm).

##### Using Node

```sh
$ yarn install
```

```sh
$ yarn serve
```

##### Using Docker

```sh
# uncomment - '8080:8080'
# uncomment - ./Library/developer-vue:/usr/share/nginx/html:delegated
$ docker-compose up
```