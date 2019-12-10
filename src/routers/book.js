const express = require('express')
const Book = require('../models/book')
const auth = require('../middleware/auth')
const router = new express.Router()
const multer = require('multer')

router.get('/book/add', async (req, res) => {
  const book = new Book({
    ...req.body
  })

  try {
    await book.save()
    res.status(201).send(book)
  } catch (e) {
    res.status(500).send(e)
  }
})

module.exports = router
