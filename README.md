# Storybook support for CSS modules

https://www.npmjs.com/package/storybook-css-modules-preset

# CSS modules support in VSCode

Install CSS Modules plugin

# Folders

.storybook - storybook settings\
components - React components\
datatypes - typing\
libs - extra modules\
pages - standart Node folder for pages\
pages/api - Node api methods\
pages/api/auth - API for authorization\
pages/api/users - API for edit users\
public - static materials\
store - redux store\
store/sagas - redux-saga sagas\
store/slices - slices for the store

# Deployment

with standart vercel procedure from to\
https://casting-next.vercel.app

# MongoDB

https://cloud.mongodb.com\
mongosh "mongodb+srv://cluster0.ttjgv.mongodb.net/castingDB" --username casting-mongo
## ENV
export MONGODB = castingDB\
export MONGOUSER = casting-mongo\
export MONGOPASS = password, you should know it :)\
export MONGOSRV = cluster0.ttjgv.mongodb.net

# Aliases

@components = components\
@libs = libs\
@store = store\
@datatypes = datatypes\

We define them in webpack.config.js, tsconfig.json and .storybook/main.js
