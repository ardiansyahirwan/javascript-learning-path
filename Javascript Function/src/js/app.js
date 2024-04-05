import { makeAFunction } from '../js/makeAFunction.js';
import { functionParameter } from '../js/functionParameter.js';
import { functionReturnValue } from '../js/functionReturnValue.js';
import { functionOptionalParameter } from '../js/functionOptionalParameter.js';
import { functionDefaultParameter } from '../js/functionDefaultParameter.js';
import { functionRest } from '../js/functionRest.js';

const button = document.getElementById( 'yaudah' );

/**
 * define a new original function
 */

// makeAFunction();
// button.addEventListener( 'click', function ()
// {
//    makeAFunction();
// } );

/**
 * define function with parameter
 */

// button.addEventListener( 'click', function ()
// {
//    functionParameter( 'Ah yang bener' );
// } );

/**
 * define function with parameter and return a value
 */

// button.addEventListener( 'click', function ()
// {
//    console.log( functionReturnValue( 1 ) );
// } );

/**
 * define function with optional parameter
 */

// button.addEventListener( 'click', function ()
// {
//    functionOptionalParameter( 'coba' );
// } );

/**
 * define function with default parameter
 */

// button.addEventListener( 'click', function ()
// {
//    functionDefaultParameter();
// } );


/**
 * define function with default parameter
 */

// functionRest( 'ayam', 1, 2, 3 );

/**
 * if you parse an array into rest parameter, you should use spread syntax
 */
const arrayNumber = [ 3, 3, 3 ]
functionRest( "spread Syntax", ...arrayNumber )