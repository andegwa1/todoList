if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://altd:altodo1@ds259820.mlab.com:59820/todo-live'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/todo-api'}
}

// Mlab db info: altd - altodo1