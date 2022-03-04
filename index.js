// Code your solutions in this file

const arr = [];


function writeCards(name, event) {
    for (let i = 0; i < name.length; i++) {
        arr.push("Thank you, " + name[i] + ", for the wonderful " + event + " gift!");
        debugger;
    }
        return arr;
    
}


function countDown(count) {
    while (count >= 0) {
        console.log(count);
        count--;
    }
    return count;

}