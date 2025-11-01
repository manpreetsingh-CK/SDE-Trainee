 //ques 11 outpur
 const fun = (name = "abc") => {
        if (name) {
          console.log("if", name);
        } else {
          console.log("else", name);
        }
      };
	  
fun(""); 
//bcz "" will be considered as falsy value
//in js  