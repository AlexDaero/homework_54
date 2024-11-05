import React, { useEffect, useRef, useState } from "react";
import './Square.css'

function Square(props) {
    const [styles, setStyles] = useState({ background: props.background })

    const backgroundNone = () => {
        props.click()
        if (props.gameTrue === true) {
            const copyState = { ...styles }
            copyState.background = 'rgb(255,255,255,0.1)'
            setStyles(copyState)
        }

    }

    useEffect(() => {
        const copyState = { ...styles }
        copyState.background = 'gray'
        copyState.color = 'gray'
        setStyles(copyState)
    }, [props.reset])

    return (
        <div onClick={backgroundNone} className="square" style={styles}>
            <div>{props.circle}</div>
        </div>
    )
}

export default Square