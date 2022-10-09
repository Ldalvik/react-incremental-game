import React, { useState, useEffect, useRef } from 'react';
import 'react-toastify/dist/ReactToastify.css';

const StarterBoat = ({ makeToast }) => {
    const fishingTime = 3

    const [secondsRemaining, setSecondsRemaining] = useState(0)
    const [status, setStatus] = useState("Fish")
    const [btnDisabled, setBtnDisabled] = useState(false)

    const secondsToDisplay = secondsRemaining % 60
    const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60
    const minutesToDisplay = minutesRemaining % 60
    const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60
    const twoDigits = (num) => String(num).padStart(2, '0')

    useInterval(
        () => {
            if (secondsRemaining > 0) {
                setSecondsRemaining(secondsRemaining - 1)
                setStatus(
                    `${twoDigits(hoursToDisplay)}:${twoDigits(minutesToDisplay)}:${twoDigits(secondsToDisplay)}`
                )
            } else {
                setBtnDisabled(false)
                setStatus("Fish")
                makeToast("You caught fish!")
            }
        }, btnDisabled ? 1000 : null
    )

    function useInterval(callback, delay) {
        const savedCallback = useRef()
        useEffect(() => {
            savedCallback.current = callback
        }, [callback])

        useEffect(() => {
            function tick() {
                savedCallback.current()
            }
            if (delay !== null) {
                let id = setInterval(tick, delay)
                return () => clearInterval(id)
            }
        }, [delay])
    }

    const handleStart = (time) => {
        const secondsToDisplay = time % 60
        const minutesRemaining = (time - secondsToDisplay) / 60
        const minutesToDisplay = minutesRemaining % 60
        const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60
        setStatus(
            `${twoDigits(hoursToDisplay)}:${twoDigits(minutesToDisplay)}:${twoDigits(secondsToDisplay)}`
        )
        setSecondsRemaining(time - 1)
        setBtnDisabled(true)
    }

    return (
            <div className="card stats-card">
                <div className="card-section">
                    <h5 class="text-center">Dilapidated Boat</h5>
                    <div className="divider" />
                    <div class="boat-stats">Fishing speed: 3 seconds</div>
                    <div class="boat-stats">Storage: 5</div>
                    <div class="boat-stats">Level: 1 (0/150xp)</div>
                    <button onClick={() => handleStart(fishingTime)} class="button fish-btn" disabled={btnDisabled}>
                        {status}
                    </button>
                </div>
            </div>
    )

}

export default StarterBoat