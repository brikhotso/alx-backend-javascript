const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('should call Utils.calculateNumber with correct arguments', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnce(calculateNumberSpy);
    sinon.assert.calledWith(calculateNumberSpy, 'SUM', 100, 20);
  });
});
