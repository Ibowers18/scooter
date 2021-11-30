class chargingstation {
    constructor(number){
        this.working = true
        this.number = number
        this.scooters = []
    }
    addScooter(scooter){
        this.scooters.push(scooter)
    }


    
}
module.exports = chargingstation