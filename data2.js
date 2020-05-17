// these are test results:
let samira_momeni = {
    id: 01,
    gender: `straight`,
    age: 51,
    hasHBP: true,
    "Test results":[ [`sugar`, `good`],[`fat`,`normal`],[`crazy`,false] ]
}
let ali_farkhonde = {
    id: 04,
    gender: `straight`,
    age: 41,
    hasHBP: false,
    "Test results":[ [`sugar`, `good`],[`fat`,`high`],[`crazy`,true] ]
}
let ali_didarian_fard_motlagh = {
    id: 02,
    gender: `homo`,
    age: 41,
    hasHBP: false,
    "Test results":[ [`sugar`, `good`],[`fat`,`normal`],[`crazy`,false] ]
}
//
// this should get exported
const theArray = [samira_momeni, ali_farkhonde, ali_didarian_fard_motlagh];
//
module.exports.outgoingTests = theArray;