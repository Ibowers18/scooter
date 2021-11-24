const Chargingstation = require('../src/chargingstation')
const Scooter = require("../src/scooter")

describe('Chargingstation', () => {
    const testchargingstation = new Chargingstation(3)   
    const testscooter = new Scooter(1, "irene", true, true)
    testchargingstation.addScooter(testscooter)

    test ('has a working chargingstation', () =>{
        expect(testchargingstation.working).toBe(true)
    
    })
    test ('test chargingstation number',() =>{
        expect(testchargingstation.number).toBe(3)
        
    })
    test ('has available scooters', () => {
        expect(testchargingstation.scooters.length).toBe(1)

    })
})