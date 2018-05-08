const {expect} = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
    it('is a function', () => {
        expect(wrap).to.be.a('function');
    });
    it('outputs a string', () => {
        let output = wrap('Hello World!', 5);
        expect(output).to.be.a('string');
    });
    it('returns an empty string if an empty string was provided', () => {
        expect(wrap("", 5)).to.equal("");
    });
    it('correctly handles line breaks', () => {
        expect(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20)).to.equal("Lorem ipsum dolor\n sit eu amet, elit na\n magna sem amet nulla\n vel purus ac ligula.");
    });
});

