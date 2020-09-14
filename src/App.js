import React from 'react';
// import ArrowFirstCompo from './components/funccompo';
// import ClassA from './components/classcompo';
import Encryption from './cypher/Encryption-Technique'

function App() {
  return (
    <div className="App">
        
        {/* <ClassA/> */}
        <h3>Your cipher is : <Encryption/></h3>
        <br/>
        <button id="btnDecryp" onClick={Decryption_Click()}>For Decryption for any input</button>

        <script src="./cypher/Encryption-Technique.js"></script>


    </div>)

function Decryption_Click(){
  var encryp = <Encryption/>
  alert("chal gaya", encryp);
  return encryp;
}

    
}
export default App;
