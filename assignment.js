function stringOrNumber(first) {
    if (typeof first === 'string') {
        return first.length;
    }
    else {
        return first * first;
    }
}
var result = stringOrNumber('abir');
