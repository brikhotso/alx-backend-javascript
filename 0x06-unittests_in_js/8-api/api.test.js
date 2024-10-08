const { expect } = require('chai')
const request = require('request')

describe('index page suit', () => {
    it('return correct response', (done) => {
        request.get('http://localhost:7865', (err, res, body) => {
            expect(res.statusCode).to.equal(200)
            expect(body).to.equal('Welcome to the payment system')
            done()
        })
    })
})
