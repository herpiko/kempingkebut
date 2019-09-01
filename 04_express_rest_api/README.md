# API

## Intro

Penjelasan API

## Konsep dan konvensi REST API

To be written.

### Request & Response

To be written.

#### Response status code

To be written.

### Methods

To be written.

### Headers

To be written.

### Body

To be written.

#### form-data

To be written.

#### x-www-form-urlencoded

To be written.

#### raw

To be written.

#### binary

To be written.

#### JSON

To be written.

#### Plain text

To be written.

# Express JS

To be written.

## Persiapan

Buat direktori proyek baru,
```
mkdir note-api && note-api
```
Inisiasi proyek dengan `npm`,
```
npm init
```
Pasang dependensi yang dibutuhkan,
```
npm install bcrypt body-parser express jsonwebtoken mongoose morgan
npm install -g nodemon
```

- `bcrypt`, digunakan untuk membuat hash dari sandi
- `body-parser`, pustaka yang membantu mem-parse *request* yang datang.
- `express`, framework minimal untuk membuat aplikasi web
- `jsonwebtoken`, Pustaka standar JWT (JSON Web Token)
- `mongoose`, pustaka untuk berkomunikasi dengan MongoDB
- `morgan`, request logger untuk HTTP yang dipasang di *middleware*
- `nodemon`, aplikasi yang memonitoring berkas.

## Program HTTP pertama

Buat berkas baru `server.js`,
```
const express = require('express'); 
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
 res.json({"message" : "Hello world!"});
});

app.listen(3000, () => {
  console.log('Node server listening on port 3000');
});

```


Jalankan dengan `node server.js` lalu buka `localhost:3000` di peramban.

## Struktur aplikasi

Di dalam direktori proyek, buat direktori dengan susunan sebagai berikut,
```
├── config
├── controllers
├── models
└── routes
```

## Koneksi DB

Buat berkas konfigurasi database di `config/database.js`,

```
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/note_api';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

module.exports = mongoose;
```

## Users

Buat berkas baru untuk user model di `models/users.js`,
```
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  }
});

UserSchema.pre('save', function(next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});

module.exports = mongoose.model('User', UserSchema);
```

Buat berkas baru untuk user controller di `controllers/users.js`,

```
const userModel = require('../models/users');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');

module.exports = {
  create: (req, res, next) => {
    userModel.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }, (err, result) => {
      if (err) {
        next(err);
      } else {
        res.json({
          status: "success",
          message: "ok",
          data: null
        });
      }
    });
  }, authenticate: (req, res, next) => {
    userModel.findOne({
      email: req.body.email
    }, (err, userInfo) => {
      if (err) {
        next(err);
      } else {
        if (bcrypt.compareSync(req.body.password, userInfo.password)) {
          const token = jwt.sign(
            { id: userInfo._id },
            req.app.get('jwtSecretKey'),
            { expiresIn: '1h' }
          );
          res.json({
            status:"success",
            message: "ok",
            data:{user: userInfo, token:token}});
        } else {
          res.json({
            status:"error",
            message: "not-ok",
            data:null
          });
        }
      }
    });
  }
}
```

Buat berkas baru untuk route di `routes/users.js`,
```
const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

router.post('/register', userController.create);
router.post('/authenticate', userController.authenticate);

module.exports = router;
```

Perbarui `server.js` untuk memasangkan route user
(baris baru ditandai dengan `//`),
```
const express = require('express'); 
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();app.use(logger('dev'));

//
const users = require('./routes/users');
const mongoose = require('./config/database');
var jwt = require('jsonwebtoken');
app.use(bodyParser.urlencoded({extended: false}));
app.set('jwtSecretKey', 'kunciRahasia');

//
mongoose.connection.on('error',
  console.error.bind(console, 'MongoDB connection error:')
);

//
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
 res.json({"message" : "Hello world!"});
});

//
app.use('/users', users);

//
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
  console.log(err);
  if(err.status === 404) {
    res.status(404).json({message: "Not found"});
  } else {
    res.status(500).json({message: "Server error"});
  }
});

app.listen(3000, () => {
  console.log('Node server listening on port 3000');
});
```

## Uji endpoint users

- POST `localhost:3000/users/register`
    - `name`
    - `email`
    - `password`
```
{
    "status": "success",
    "message": "ok",
    "data": null
}
```
- POST `localhost:3000/users/authenticate`
    - `email`
    - `password`
```
{
    "status": "success",
    "message": "ok",
    "data": {
        "user": {
            "_id": "5d6b0a3d961eba6a0df3cfef",
            "name": "Herpiko",
            "email": "herpiko@aguno.xyz",
            "password": "$2b$10$QllDcRPxbpyjcL5FIe4BrehgwBz5rJSNTodlAW6Xr4EiDHflRHofa",
            "__v": 0
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNmIwYTNkOTYxZWJhNmEwZGYzY2ZlZiIsImlhdCI6MTU2NzI5NjgxOSwiZXhwIjoxNTY3MzAwNDE5fQ.25JxD20OMYTeNiOS_o5ib-7ZksIijk8vZcvhNcHXnzk"
    }
}
```
## Note

Buat berkas untuk model di `models/notes.js`,

```
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  content: {
    type: String,
    trim: true,
    required: true
  },
  userId: {
    type: String,
    trim: true,
    required: true
  },
  lastModified: {
    type: Date,
    trim: true,
    required: false
  }
});

NoteSchema.pre('save', function(next) {
  this.lastModified = new Date();
  next();
});

module.exports = mongoose.model('Note', NoteSchema)
```

Buat berkas untuk controller di `controllers/notes.js`,
```
const noteModel = require('../models/notes');

module.exports = {
  getById: (req, res, next) => {
    noteModel.findById(req.params.noteId, (err, noteInfo)=> {
      if (err) {
        next(err);
      } else {
        res.json({
          status: "success",
          message: "ok",
          data: {
            notes: noteInfo
          }
        });
      }
    });
  },
  getAll: (req, res, next) => {
    let notesList = [];
    noteModel.find({}, (err, notes) => {
      if (err) {
        next(err);
      } else {
        for (let note of notes) {
          notesList.push({
            id: note._id,
            name: note.name,
            released_on: note.released_on
          });
        }
        res.json({
          status: "success",
          message: "ok",
          data: {
            notes: notesList
          }
        });

      }
    });
  },
  updateById: (req, res, next) => {
    noteModel.findByIdAndUpdate(req.params.noteId, {
      name: req.body.name
    }, (err, noteInfo) => {
      if (err)
        next(err);
      else {
        res.json({
          status: "success",
          message: "ok",
          data: null
        });
      }
    });
  },
  deleteById: (req, res, next) => {
    noteModel.findByIdAndRemove(req.params.noteId, (err, noteInfo) => {
      if (err)
        next(err);
      else {
        res.json({
          status: "success",
          message: "ok",
          data: null
        });
      }
    });
  },
  create: (req, res, next) => {
    noteModel.create({
      name: req.body.name,
      content: req.body.content,
      userId: req.body.userId,
    }, (err, result) => {
      if (err)
        next(err);
      else
        res.json({
          status: "success",
          message: "ok",
          data: null
        });

    });
  },
}

```

Buat berkas route di `routes/notes.js`,
```
const express = require('express');
const router = express.Router();
const noteController = require('../controllers/notes');

router.get('/', noteController.getAll);
router.post('/', noteController.create);
router.get('/:noteId', noteController.getById);
router.put('/:noteId', noteController.updateById);
router.delete('/:noteId', noteController.deleteById);

module.exports = router;
```

Perbarui `server.js` (baris baru ditandai dengan `//`),
```
const express = require('express'); 
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();app.use(logger('dev'));
const users = require('./routes/users');
//
const notes = require('./routes/notes');

const mongoose = require('./config/database');
var jwt = require('jsonwebtoken');
app.use(bodyParser.urlencoded({extended: false}));
app.set('jwtSecretKey', 'kunciRahasia');

mongoose.connection.on('error',
  console.error.bind(console, 'MongoDB connection error:')
);

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
 res.json({"message" : "Hello world!"});
});

app.use('/users', users);

//
app.use('/notes', validateUser, notes);

//
function validateUser(req, res, next) {
  jwt.verify(req.headers['x-access-token'], req.app.get('jwtSecretKey'), (err, decoded) =>  {
    if (err) {
      res.status(401).json({status:"error", message: 'Unauthorized', data:null});
    } else {
      req.body.userId = decoded.id;
      next();
    }
  });
}

app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  console.log(err);
  if(err.status === 404) {
    res.status(404).json({message: "Not found"});
  } else {
    res.status(500).json({message: "Server error"});
  }
});

app.listen(3000, () => {

```

## Uji endpoint notes

Dengan nilai `x-access-token` diletakkan di *header*,

- POST `localhost:3000/notes/`
    - `name`
    - `content`
```
{
    "status": "success",
    "message": "ok",
    "data": null
}
```
- GET `localhost:3000/notes/`
```
{
    "status": "success",
    "message": "ok",
    "data": {
        "notes": [
            {
                "id": "5d6b12baab76f2749cba3db2",
                "name": "Catatan Baru"
            }
        ]
    }
}
```
- GET `localhost:3000/notes/5d6b12baab76f2749cba3db2`
```
{
    "status": "success",
    "message": "ok",
    "data": {
        "notes": {
            "_id": "5d6b12baab76f2749cba3db2",
            "name": "Catatan Baru",
            "content": "Booo",
            "userId": "5d6b0a3d961eba6a0df3cfef",
            "lastModified": "2019-09-01T00:37:14.676Z",
            "__v": 0
        }
    }
}
```
- PUT `localhost:3000/notes/5d6b12baab76f2749cba3db2`
    - `name`
    - `content`
```
{
    "status": "success",
    "message": "ok",
    "data": null
}
```
- DELETE `localhost:3000/notes/5d6b12baab76f2749cba3db2`
```
{
    "status": "success",
    "message": "ok",
    "data": null
}
```
## Explanation

### Router

### Methods

### URL query & params

To be written.

### Middleware

To be written.

### Templating

To be written.

### Static files

To be written.

### Form data

To be written.


<hr>

Referensi:

- https://medium.com/@bhanushali.mahesh3/building-a-restful-crud-api-with-node-js-jwt-bcrypt-express-and-mongodb-4e1fb20b7f3d