//Check whether a number is prime using javascript logic

function printprime(){

    
    var number =  document.getElementById("number").value;
    var message = isPrime(number);
    if (message === true) {
        document.getElementById("content").textContent = number + " is prime";
        return;
        
    }
    document.getElementById("content").textContent = number + " is not prime"
    
    
    




}
function isPrime(n){
    if (n <=1) {
        return false
        
    }
    for (let i = 2; i < n; i++){
        if (n % i == 0) {
            return false;
            
        }
    
       
    }
    return true;

}
