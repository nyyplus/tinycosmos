const path = require('path')
const words = require('./data/english/words.json')
const interrogatives = require('./data/english/interrogative')
const poems = require('./data/chinese/poems.json')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    before (app) {
      app.get('/api/words', function (req, res) {
        res.json({
          code: 200,
          data: words
        })
      })
      app.get('/api/words/g3', function (req, res) {
        res.json({
          code: 200,
          data: words.filter(word => word.grade === 3)
        })
      })
      app.get('/api/words/g4', function (req, res) {
        res.json({
          code: 200,
          data: words.filter(word => word.grade === 4)
        })
      })
      app.get('/api/words/g5', function (req, res) {
        res.json({
          code: 200,
          data: words.filter(word => word.grade === 5)
        })
      })
      app.get('/api/words/g5', function (req, res) {
        res.json({
          code: 200,
          data: words.filter(word => word.grade === 6)
        })
      })
      app.get('/api/words/interrogative', function (req, res) {
        res.json({
          code: 200,
          data: interrogatives
        })
      })
      app.get('/api/poems', function (req, res) {
        res.json({
          code: 200,
          data: poems
        })
      })
    }
  },
  chainWebpack (config) {
    config.resolve.alias
      .set('styles', resolve('src/assets/styles'))
      .set('fonts', resolve('src/assets/fonts'))
  }
}
