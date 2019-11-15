function FirstFactorial(num) { 

    // code goes here  
    let factorial = 1;
    
    for (let i = 1; i <= num; i++){
    factorial = factorial * i; 
    }
    return factorial; 
    
  }
     
  // keep this function call here 
  console.log(FirstFactorial(readline()));