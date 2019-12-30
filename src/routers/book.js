const express = require('express')
const Book = require('../models/book')
const router = new express.Router()
const multer = require('multer')

router.post('/book/add', async (req, res) => {
  const book = new Book({
    ...req.body
  })

  try {
    await book.save()
    res.status(201).send({"message": "Buku berhasil disimpan"})
  } catch (e) {
    res.status(500).send(e)
  }
})

router.get('/book', async (req, res) => {
  // const book = await Book.find({}, {_id: 0, nama: 1})
  // const book = await Book.find({"nama": /PHP/})
  const book = await Book.find({})
  try {
    await res.status(201).send(book)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.post('/book/search/:nama', async (req, res) => {
  const nama = req.params.nama
  const book = await Book.find({"nama": new RegExp(nama, 'i')})
  try {
    await res.status(201).send(book)
  } catch (e) {
    res.status(500).send(e)
  }
})

module.exports = router
