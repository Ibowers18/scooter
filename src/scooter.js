class Scooter {
    static scooters = []
    constructor(number, charged, workingorder){
        this.number = number
        this.user = null
        this.charged = charged
        this.workingorder = workingorder
        this.availabletorent = true
    }

    torent(user) {
        if(this.workingorder == true ) {
            this.user = user;
            this.availabletorent = false
        } else if(this.workingorder === false)
            console.log('Check back later')
        } 
    }



//})
module.exports = Scooter