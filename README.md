# nuxt-vue

> Nuxt.js project

## Build Setup

If you prefer Docker, use the commands below:

``` bash
#build de the image
docker build -t nuxt-vue:1.0 .

#run container from image and use PORT and HOST custom
docker run -p 3111:3333 \
 -d  \
 -e HOST="0.0.0.0" \
 -e PORT=3333 \
 --name nuxt-vue-1 \ 
 nuxt-vue:1.0

```

If you prefer run without Docker, use this commands inside ./SRC folder

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

To make login, use this service:
[JWT-AUTH-API](https://github.com/ammezie/jwt-auth-api)

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

