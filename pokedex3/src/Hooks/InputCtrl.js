import { useState } from 'react';

export default function useInput(initInput){

    const [input, setInput] = useState(initInput)

    const onChange = (event)=>{

        setInput(event.target.value)
    }

    return [input , onChange]
}