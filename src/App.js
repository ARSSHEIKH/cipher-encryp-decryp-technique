import React from 'react';
// import ArrowFirstCompo from './components/funccompo';
// import ClassA from './components/classcompo';
import Encryption, {Decrtyption} from './cypher/Encryption-Technique'
// import Input from './cypher/cesar'

function App() {
  return (
    <div className="App">
        
        {/* <ClassA/> */}
        <h3><Encryption/></h3> 
        <Decrtyption />
        {/* <Input/> */}
    </div>)
}


export default App;
