const expect = require('expect');

// import isRealString
const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var str = 100;
        var returnValue = isRealString(str);
        expect(returnValue).toBeFalsy;
    });

    it('should reject string with only spaces', () => {
        var str = '   ';
        var returnValue = isRealString(str);
        expect(returnValue).toBeFalsy;
    });

    it('should allow string with non-space characters', () => {
        var str = 'This is a string';
        var returnValue = isRealString(str);
        expect(returnValue).toBeTruthy;
    });

});