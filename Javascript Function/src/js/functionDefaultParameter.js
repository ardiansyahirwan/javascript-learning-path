/**
 * by default, function in javascript setting is optional parameter
 * you can set the parameter be a default
 * if you call the function and you not define a parameter, so function will use default parameter
 */

export function functionDefaultParameter ( text = "Default" )
{
   console.log( text )
}