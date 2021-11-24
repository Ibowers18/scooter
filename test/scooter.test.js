const Scooter = require('../src/scooter')
//const User = require('name../src/name')

describe('Scooter', () => {
    const testscooter = new Scooter(3, "irene", true, true)
   

    test ('has a number', () =>{
        expect(testscooter.number).toBe(3)
    })

    test('has a name', () =>{
        expect(testscooter.user).toBe("irene")


    })
    test ('is charged',() =>{
        expect(testscooter.charged).toBe(true)

    })
    test ('is working',() =>{
        expect(testscooter.workingorder).toBe(true)
        
    })

})