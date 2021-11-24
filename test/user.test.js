const User = require('../src/user')


describe('User', () => {
    const testuser = new User("irene", true , 21, 3) 
   

    test ('has a working App', () =>{
        expect(testuser.userapp).toBe(true)
    })

    test('has a name', () =>{
        expect(testuser.name).toBe("irene")

    })
    test ('user age :-)',() =>{
        expect(testuser.age).toBe(21)

    })
    test ('scooter number',() =>{
        expect(testuser.number).toBe(3)
        
    })

})