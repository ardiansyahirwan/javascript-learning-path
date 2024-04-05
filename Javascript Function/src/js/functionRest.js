/**
 * Function REST
 * 
 * Rest parameter is a parameter special, when we can parse more parameter, unlimited
 * rest parameter should placed in the end, and in one function just have one rest parameter
 * parameter who parse in function will rendered as array
 * if you parse an array into function Rest parameter, you should use "spread syntax"
 */

export function functionRest ( text, ...data )
{
   let valuesReturn = 0;
   for ( const item of data )
   {
      valuesReturn += item
   }
   return console.log( "namanya " + text + " nilainya " + valuesReturn )
}