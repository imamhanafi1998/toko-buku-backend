const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// const Task = require('./task')

const bookSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
      required: true,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
)

// userSchema.virtual('tasks', {
//   ref: 'Task',
//   localField: '_id',
//   foreignField: 'owner',
// })

bookSchema.statics.findByCredentials = async (nama) => {
  const book = await Book.findOne({ nama })
  if (!book) {
    throw new Error('Buku tidak ditemukan')
  } else {

  }

  return book
}

// userSchema.pre('save', async function(next) {
//   const user = this
//   if (user.isModified('password')) {
//     user.password = await bcrypt.hash(user.password, 8)
//   }
//
//   next()
// })

// userSchema.pre('remove', async function(next) {
//   const user = this
//   await Task.deleteMany({ owner: user._id })
//   next()
// })

const Book = mongoose.model('Book', bookSchema)

module.exports = Book
