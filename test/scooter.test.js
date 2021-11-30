const Scooter = require('../src/scooter')
const User = require('../src/user')

describe('Scooter', () => {
    const testscooter = new Scooter(3, true, true, true)
    const testuser = new User("irene",true, 21, 5)

    test ('has a number', () =>{
        expect(testscooter.number).toBe(3)
    })

    test('has a name', () =>{
        expect(testscooter.user).toBe(null)


    })
    test ('is charged',() =>{
        expect(testscooter.charged).toBe(true)

    })
    test ('is working',() =>{
        expect(testscooter.workingorder).toBe(true)
        
    
    })
    test ('is available to rent',() =>{
        expect(testscooter.availabletorent).toBe(true)
    
    })
    test ('to rent function',() =>{
        testscooter.torent(testuser)
        expect(testscooter.availabletorent).toBe(false)
        expect(testscooter.user).toBe(testuser)
    })
      
    
})