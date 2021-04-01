//tsc:>compiler(ts to js)
// cmd -> tsc main.ts ->> main.js
// cmd -> node main.js ->> execute
//Js uses Static typing

// function print(text){
//     console.log(text);
// }

// print("Selam")

/** TYPES
 * 
 * Number,String, Boolean, Arrays, Enum, Tuple, Unknown, Any
*/

/**
  * let x = "MERT";
  * x=7; // Type 'number' is not assignable to type 'string'.
  * the code will compile even if it gets an error
*/

/** ANY -> dont use
  * lex x; -> Any
  * x="Mert";
  
*/

/** TYPE ANNOTATION
* let name : string;  
* name = "Mert"
*/

/** TYPE INFERENCE
 * let year: number = 1995; -> senseless usage
 * 
 
*/ 

/** BOOLEAN 
 * let flag : boolean;
 * flag = false;
*/

/** ARRAY
 * let myArr : string[];
 * myArr=["a","b","c"];
 * 
 * let myArr : any[];
 * myArr=["a", 7, false];
*/

/** ENUM
 * enum Player{
 * Football,
 * Basketball=7
 * };
 * let plyr = Player.Basketball;
 * plyr = Player.Football;
*/

/** TUPLE
 * let error: [number,string];
 * error = [404,"Not Found"];
*/

/**UNKNOWN
 * 
 * let a=5;
 * let b : unknown; // you can use this type instead of any
 * a=b; //Type 'unknown' is not assignable to type 'number'.
 * 
*/

/**  Type Assertions
 * 
*/

/**Compilation process is successfull
* let message;
* message ="MErt";
* const newMessage = (<string>message).trim();
* const newMessage1 = (message as string).replace("E","r");
*/

/**Compilation  failed
* let message;
* message =555;

* const newMessage = (<string>message).trim();
* const newMessage1 = (message as string).replace("E","r");
*/

/** OBJECT TYPE
 * USAGE 1:
 * let user:{
 * name: string;
 * age: number;
 * } = {
 *  name : "MERT",
 *  age : 25
 *  }
 * 
 * USAGE 2:
 * * let user:{
 * name: string;
 * age: number;
 * }; 
 * 
 * user= {
 *  name : "MERT",
 *  age : 25
 *  }
 * 
 * USAGE 3:
 * 
 * let user= {
 *  name : "MERT",
 *  age : 25
 *  }
 * 
*/

/** UNION TYPE
 * 
 * 
 * 
 */

 