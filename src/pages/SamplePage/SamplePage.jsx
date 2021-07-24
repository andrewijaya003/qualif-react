import React, { useState, useEffect } from 'react'

function SamplePage(){
    const [counter, setCounter] = useState(0)

    // ketika counter berubah maka semuanya akan dirender ulang
    useEffect(() => {
        document.title = `You've clicked ${counter} times`
    }, [counter])

    if(counter % 2 == 0){
        var element = <div>Counter Genap</div>
    } else {
        var element = <div>Counter Ganjil</div>
    }

    const handleButton = () => {
        setCounter(counter + 1)
    }

    return (
        // hanya boleh ada satu parent element
        // biar bikin pembungkus pake aja react fragment
        <React.Fragment>
            <h3>
                You've clicked {counter} times        
            </h3>
            <h3>{element}</h3>
            {/* kalo mau ada value di functionnya () => handleButton(value) */}
            <button onClick={handleButton}>
                Click me
            </button>
        </React.Fragment>
    )
}

export default SamplePage