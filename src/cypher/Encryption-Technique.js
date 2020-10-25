// import React, { Component } from 'react';
import React from 'react';

let cipherText = []
var pt_ch=[]
var key_ch =[]

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
            
            <div>
                <h1>Your CipherText is : {cipherText}</h1>
            </div>
            
        );
    }
  export function Decrtyption(){
       let decryptCypher;
       return (
           <div>
           <button onClick={decryptCypher = () => {
              decryptCypher = myDecrypt_technique()
              console.log("decryptCypher", decryptCypher)
              return decryptCypher
           }}>Decript It?</button>
           {decryptCypher}
           
           </div>
       )
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
                cipherText[i] = key_ch[i] + pt_ch[i];   //Step1
                
                if(cipherText[i]>128){
                      cipherText[i] = cipherText[i]-128;     //Step2
                }
                //   cipherText[i] = parseInt(key_ch[i] * cipherText[i]) % 128;
                console.log("OldcipherText", cipherText[i]);

                myEncrypt_technique(cipherText, key_ch, i);
               
              }
              return cipherText;
        }
        var integral_val, deci = [];
      
        const myEncrypt_technique = (cipherText, key_ch, i) => {
            // cipherText[i] = parseInt(key_ch[i] * cipherText[i]) % 128;
            integral_val = parseInt(key_ch[i] * cipherText[i] / 128);   //Step3
            deci[i] = parseFloat(((key_ch[i] * cipherText[i]) / 128));  //Step4
            cipherText[i] = parseInt((deci[i]-integral_val) * 128);     //Step5
 
            return cipherText[i] = String.fromCharCode(cipherText[i]);
        }

        const myDecrypt_technique  = () => {
            let tempCipherText;
            let oldcipherText = [];
            tempCipherText = cipherText.toString();
            tempCipherText = tempCipherText.replace(/,/g, "")
            for(let i=0; i<=pt_ch.length-1; i++){
                
                cipherText[i] = parseInt(tempCipherText.charCodeAt(i))
                integral_val =  cipherText[i] / 128;
                oldcipherText[i] = parseInt(deci[i]) + integral_val;

                oldcipherText[i] = (128 * oldcipherText[i]) / key_ch[i];
                cipherText[i] = oldcipherText[i] - key_ch[i];

                if(cipherText[i] < 0){
                    cipherText[i] = cipherText[i] + 128;
                }
                cipherText[i] = String.fromCharCode(cipherText[i]);
      
                
            }
            return cipherText;
        }

export default inp;