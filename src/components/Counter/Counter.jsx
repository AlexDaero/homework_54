import React, { useEffect, useState } from "react";
import './Counter.css'

const Counter = (props) => {
    const [count, setCount] = useState({ value: 0 })

    useEffect(() => {
        const copyCount = { ...count }
        copyCount.value = 0
        for (let i = 0; i < props.array.length; i++) {
            if (props.array[i].background !== props.value) {
                copyCount.value++
            }
        }
        setCount(copyCount)
    }, [props.amount])

    return (
        <div className='counter'>Попытки - {count.value}</div>
    )
}

export default Counter