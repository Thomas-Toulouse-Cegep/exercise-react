import React ,{useState,useCallback } from 'react';
function generateError(){
    try {
        throw new Error("test")
    } catch (error) {
        for (let index = 0; index < 100; index++) {
           alert(error)
            
        }
        
    }
    ;
}

function TestError(){
    return(
    <button onClick={()=>{generateError()}}>penis</button>
    )
}
export default TestError