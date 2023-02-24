const { Test } = require('../models/index')
const { Router } = require('express');
const testRouter = Router();

testRouter.get('/', (req, res) => {
    res.send('SUCCESS GET')
})
testRouter.post('/', (req, res) => {
    res.send('SUCCESS POST')
})
testRouter.put('/', (req, res) => {
    res.send('SUCCESS PUT')
})
testRouter.delete('/', (req, res) => {
    res.send('SUCCESS DELETE')
})

module.exports = {
    testRouter
}