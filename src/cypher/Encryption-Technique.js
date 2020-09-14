// import React, { Component } from 'react';
// import React from 'react';


    var cipherText = [];
    var pt_ch = [];
    var key_ch = []
   function inp() {
        alert("Plain Text and Key that you will enter should be same length, Ok?");

        var pt_str = (prompt("Enter plain text"));
        var key_str = prompt("Enter key");
        cipherText=[pt_str.length];

        if(pt_str.length === key_str.length){
           
            cipherText = convert_to_charArray(pt_str, key_str)
            console.log(cipherText);
        }
        else{
            return "Plain Text and Key size not matched ! please reload" 
        }
        console.log(cipherText);
        return (
            cipherText, 
            '<br/>  <button>Decrypt it<button/>'
            );
        

    }
    function convert_to_charArray(pt_str, key_str){
        pt_ch = [pt_str.length];
        key_ch = [key_str.length];
        
        for(let i=0; i<=pt_str.length-1; i++){
            pt_ch[i] = pt_str.charCodeAt(i);
        }
        for(let i=0; i<=key_str.length-1; i++){
            key_ch[i] = key_str.charCodeAt(i);
        }
        console.log(pt_ch)
        console.log(key_ch)
        return one_Time_Pad (pt_ch,key_ch);
    }
    
   
    function one_Time_Pad (pt_ch,key_ch) {
            cipherText = [pt_ch.length];
            for(let i=0; i<=pt_ch.length-1; i++){
                cipherText[i] = key_ch[i] + pt_ch[i];
                
                if(cipherText[i]>127){
                      cipherText[i] = cipherText[i]-128;
                }
                //   cipherText[i] = parseInt(key_ch[i] * cipherText[i]) % 127;
                mytechnique(cipherText, key_ch, i);

  
                
              }
              console.log(cipherText);
              return cipherText;
        }
        var div;
        var deci;
        const mytechnique = (cipherText, key_ch, i) => {
            
            // cipherText[i] = parseInt(key_ch[i] * cipherText[i]) % 127;
            div = parseInt(key_ch[i] * cipherText[i]) / 127;
            deci = ((key_ch[i] * cipherText[i]) / 127) - div;
            cipherText[i] = deci*127;
            console.log(cipherText[i]);
            return cipherText[i] = String.fromCharCode(cipherText[i]);
        }

        Decryption_Click = () => {

        }
    
export default inp;