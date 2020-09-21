import React from 'react';
var txt, num ;
function Input(){
   
    return caesar();
}

function caesar(){
    num = prompt("Enter any key number: ");
    txt =  prompt("Enter any plain text: ");
    var x = [];
    if(num>=-26 && num<=26){
        for(let i=0;i<txt.length;i++){
          x[i] = txt.charCodeAt(i)+num;
          if(txt.charCodeAt(i)>=65 && txt.charCodeAt(i)<=90){
           
            if(x[i]>=65&&x[i]<=90){
              x[i]=x[i];
            }
            else if(x[i]>90){
              x[i]=x[i]-26;
            }
            else if(x[i]<65){
              x[i]=x[i]+26;     
            }
          
        }
          if(txt.charCodeAt(i)==32){
              x[i]=txt.charCodeAt(i);
            }
          
          if(txt.charCodeAt(i)>=97 && txt.charCodeAt(i)<=122){
            
            if(x[i]>=97&&x[i]<=122){
              x[i]=x[i];
            }
            else if(x[i]>122){
              x[i]=x[i]-26;
            }
            else if(x[i]<97){
              x[i]=x[i]+26;     
            }
            
          }
          
          
        }
      
      
    }
    else{
      document.write("Number must be from -26 to 26, try again :)")
    }
    
    return (
        <div>
            <h2>{String.fromCharCode.apply(null, x)}</h2>
            <button onClick={decaesar}>Decrypt it</button>
        </div>
    );
  }
  
  
  function decaesar(){
    
    var x = [];
    if(num>=-26 && num<=26){
        for(let i=0;i<txt.length;i++){
          x[i] = txt.charCodeAt(i)+num;
          if(txt.charCodeAt(i)>=65 && txt.charCodeAt(i)<=90){
           
            if(x[i]>=65&&x[i]<=90){
              x[i]=x[i];
            }
            else if(x[i]>90){
              x[i]=x[i]-26;
            }
            else if(x[i]<65){
              x[i]=x[i]+26;     
            }
          
        }
          if(txt.charCodeAt(i)==32){
              x[i]=txt.charCodeAt(i);
            }
          
          if(txt.charCodeAt(i)>=97 && txt.charCodeAt(i)<=122){
            
            if(x[i]>=97&&x[i]<=122){
              x[i]=x[i];
            }
            else if(x[i]>122){
              x[i]=x[i]-26;
            }
            else if(x[i]<97){
              x[i]=x[i]+26;     
            }         
          }    
        }
    }
    else{
      document.write("Number must be from -26 to 26, try again :)")
    }
    
    alert(String.fromCharCode.apply(null, x))
    
  }
// var caesarShift = function (pt, amokeyunt) {
//     // Wrap the amount
//     if (key < 0) {
//       return caesarShift(pt, key + 26);
//     }
  
//     // Make an output variable
//     output = "";
  
//     // Go through each character
//     for (var i = 0; i < pt.length; i++) {
//       // Get the character we'll be appending
//       var c = pt[i];
  
//       // If it's a letter...
//       if (c.match(/[a-z]/i)) {
//         // Get its code
//         var code = pt.charCodeAt(i);
  
//         // Uppercase letters
//         if (code >= 65 && code <= 90) {
//           c = String.fromCharCode(((code - 65 + key) % 26) + 65);
//         }
  
//         // Lowercase letters
//         else if (code >= 97 && code <= 122) {
//           c = String.fromCharCode(((code - 97 + key) % 26) + 97);
//         }
//       }
  
//       // Append
//       output += c;
//     }
  
//     // All done!
//     console.log(output)
//     return (
//         <div>
//             <h1>{output}</h1>
//             <button onClick={Decryption}>Decrypt it?</button>
//         </div>
//     )
    
//   };
//   function Decryption(){
    
//     var plainText = "";
//     for(var i = 0; i < output.length; i++) {
//         var outputCharacter = output.charCodeAt(i);
//         if(outputCharacter >= 97 && outputCharacter <= 122) {
//             plainText += String.fromCharCode((outputCharacter-97 - key + 26) %26 + 97 );
//         } else if(outputCharacter >= 65 && outputCharacter <= 90) {
//             plainText += String.fromCharCode((outputCharacter-65 - key + 26) %26 + 65 );
//         } else {
//             plainText += String.fromCharCode(outputCharacter);
//         }
//     }
//     return alert(plainText), console.log(plainText.charCodeAt(1));;
//   }

// for(let i=0; i<26; i++){
//     for(let j=97; j<123; j++){
//         no_of_chars[i] = j;
//     }
//     no_of_chars[i] = String.fromCharCode(no_of_chars[i]);
// }

// for(let i=0; i<=pt.length-1; i++){
//     pt[i] = pt.split('');
//     if(pt[i] == no_of_chars[i]){

//     }
//     // cipher[i] = (pt[i] + key);
    
// }

export default Input;


