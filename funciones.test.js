const conversor= require('./conversor');

test('Convertir Celsius a Fahrenheit', ()=>{
    expect(conversor.CtoF(10)).toBe(50);
});

test('Convertir Fahrenheit a Celsius', ()=>{
    expect(conversor.FtoC(41)).toBe(5);
});