const minus = require('./minus');

test('10-5= ?',()=>{
    expect(minus(10,5)).toBe(5);
});

test('55-45 = ?',()=>{
    expect(minus(55,45)).toBe(10);
});

test ('99-9 = ?',()=>{
    expect(minus(99,9)).toBe(90);
});

test('10-10 = ?',()=>{
    expect(minus(10,10)).toBe(0);
});

test('15-14=?',()=>{
    expect(minus(15,14)).toBe(1);
})
