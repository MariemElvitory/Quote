
var arryOfQuotes =
[
    {
        author:'--Frank Sinatra', 
        quote:'The best revenge is massive success.'
    },

    {
        author:'--Elbert Hubbard', 
        quote:'Do not take life too seriously. You will not get out alive.'
    },

    {
        author:'--Wayne Gretzy', 
        quote:'You miss 100% of the shots you dont take.'
    }

];


function generateQuote()
{
   var cartoona=``;

   var random = Math.floor(Math.random() * arryOfQuotes.length);
    cartoona+=`<p>${arryOfQuotes[random].quote} </p>
    <p>${arryOfQuotes[random].author}</p>`

    document.getElementById("quotes").innerHTML=cartoona;
    
}







  
  
 


// document.getElementById("quotess").innerHTML=cartoona;