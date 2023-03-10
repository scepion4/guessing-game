class GuessingGame {
    constructor() {
       
    }

    setRange(min, max,number) {
    let middle=Math.floor(min+(max-min)/2)
    if(middle==number){
        guess()  
    }
    if(middle<number){
        lower()
    }
    if(middle<number){
        greater()
    }
    }

    guess(middle) {
      return middle 
    }

    lower() {
        setRange(middle, max)  
    }
    greater(middle,setRange,min) {
        setRange(min, middle)
    }
}

module.exports = GuessingGame;
