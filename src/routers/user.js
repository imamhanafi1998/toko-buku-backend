const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()
const multer = require('multer')

router.post('/signup', async (req, res) => {
  const user = new User(req.body)

  try {
    await user.save()
    const token = await user.generateAuthToken()
    res.status(201).send({ user, token })
  } catch (e) {
    res.status(400).send(e)
  }
})

router.post('/signin', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password)
    const token = await user.generateAuthToken()
    res.status(200).send({ user, token })
  } catch (e) {
    res.status(422).send({
      message: 'Login Gagal',
    })
  }
})

router.post('/signout', auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(token => {
      return token.token !== req.token
    })
    await req.user.save()

    res.send({ message: 'Logout Success' })
  } catch (e) {
    res.status(500).send({ message: 'Logout Gagal' })
  }
})

router.get('/tes', auth, async (req, res) => {
  try {
    if (req.user.status == "admin") {
      res.send({message: "Kamu seorang admin"})
    } else {
      res.send({message: "Kamu seorang pengguna"})
    }
  } catch (e) {

  }
})

module.exports = router
