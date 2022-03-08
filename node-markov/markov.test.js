const { MarkovMachine } = require("./markov");

test('make sure makeText output is not undefined', function(){
    let text = 'I do not like them, Sam-I-am. I do not like Green eggs and ham.'
    let practice = new MarkovMachine(text).makeText();
    expect(practice).not.toBeUndefined();
})

test('make sure makeText output is greater than 7 is the minimum possibility with "and ham"', function(){
    let text = 'I do not like them, Sam-I-am. I do not like Green eggs and ham.'
    let practice = new MarkovMachine(text).makeText();
    expect(practice.length).toBeGreaterThanOrEqual(7);
})

