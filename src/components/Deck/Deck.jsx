import React, { useEffect, useState } from "react";
import './Deck.css'
import Square from "./Square/Square";
import Button from "../UI/Button/Button";
import Counter from "../Counter/Counter";

function Deck() {
    const [gameTrue, setGameTrue] = useState(true)
    const [squareArray, setSquareArray] = useState([])
    const [toggleValue, setToggleValue] = useState(false)

    const [item, setItem] = useState({
        circle: '',
        background: '',
        hasItem: ''
    })

    const fillArraySquare = () => {
        const copySquareArray = [...squareArray]
        const randomNum = Math.floor(Math.random() * 35)

        if (squareArray.length > 0) {
            copySquareArray.splice(0, copySquareArray.length)
            setGameTrue(true)
        }

        if (toggleValue === false) {
            setToggleValue(true)
        } else {
            setToggleValue(false)
        }

        for (let i = 0; i < 36; i++) {
            const copyItem = { ...item }
            copyItem.circle = ''
            copyItem.background = 'gray'
            copyItem.hasItem = false
            copySquareArray.push(copyItem)
        }
        copySquareArray[randomNum].circle = 'O'
        copySquareArray[randomNum].hasItem = true
        setSquareArray(copySquareArray)
    }

    const backgroundNone = (index) => {
        if (gameTrue === true) {
            const copyState = [...squareArray]
            copyState[index].background = 'none'
            setSquareArray(copyState)
        }
    }

    useEffect(() => {
        squareArray.map((square) => {
            if (square.hasItem === true && square.background !== 'gray') {
                setGameTrue(false)
            }
        })
        if (gameTrue === false) {
            alert('Вы выиграли!')
        }
    }, [backgroundNone])


    useEffect(() => {
        fillArraySquare()
    }, [])

    return (
        <div>
            <div className="deck">
                {squareArray.map((square, index) => {
                    return (
                        <Square
                            key={index}
                            circle={square.circle}
                            background={square.background}
                            gameTrue={gameTrue}
                            hasItem={square.hasItem}
                            click={() => backgroundNone(index)}
                            reset={toggleValue}
                        />
                    )
                })}
            </div>
            <Button
                click={fillArraySquare}
            />
            <Counter
                amount={backgroundNone}
                array={squareArray}
                value='gray'
            />
        </div>
    )
}

export default Deck