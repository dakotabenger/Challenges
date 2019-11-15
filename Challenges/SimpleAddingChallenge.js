function SimpleAdding(num) { 

    // code goes here  
   
   if (num === 1) {
      return 1;
    }
    else {
      return num + SimpleAdding(num -1);
    }
  }
  
     
  // keep this function call here 
  console.log(SimpleAdding(readline()));