// // import React, { Component } from 'react';
// // import React from 'react';


//    function inp() {
//         // alert("cipherText and Key that you will enter should be same length, Ok?");

//         // var cipherText = (prompt("Enter cipher text"));
//         // var key_str = prompt("Enter key");
//         let pt_str=[pt_str.length];

//         if(pt_str.length === key_str.length){
           
//             pt_str = convert_to_charArray(cipherText, key_str)
//             console.log(pt_str);
//         }
//         else{
//             return "Plain Text and Key size not matched ! please reload" 
//         }
//         return (
//             pt_str
            
//         );

//     }
//     function convert_to_charArray(cipherText, key_str){
//         var cipherText = [cipherText.length];
//         var key_ch = [key_str.length];
        
//         for(let i=0; i<=cipherText.length-1; i++){
//             cipherText[i] = cipherText.charCodeAt(i);
//         }
//         for(let i=0; i<=key_str.length-1; i++){
//             key_ch[i] = key_str.charCodeAt(i);
//         }
//         console.log(key_ch)
//         return one_Time_Pad (cipherText,key_ch);
//     }
    
//     function one_Time_Pad (cipherText,key_ch) {
//             var pt_str = [cipherText.length];
//             for(let i=0; i<=cipherText.length-1; i++){
//                 pt_str[i] = key_ch[i] - pt_str[i];
                
//                 if(cipherText[i]>127){
//                     pt_str[i] = pt_str[i]+127;
//                 }
//                 //   pt_str[i] = parseInt(key_ch[i] / pt_str[i]) % 127;
//                 mytechnique(cipherText, key_ch, i);
        
//               }
//               return pt_str;
//         }
//         const mytechnique = (cipherText, key_ch, i) => {
//             console.log(parseInt(key_ch[i] * cipherText[i]) % 127);
//             return String.fromCharCode(parseInt(key_ch[i] * cipherText[i]) % 127);
//         }
    
// // export default inp;