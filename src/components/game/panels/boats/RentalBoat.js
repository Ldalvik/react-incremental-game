import React, { useState, useEffect, useRef } from 'react';

const FISHING_TIME = 5
const PURCHASE_PRICE = 50


const RentalBoat = ({ makeToast, saveGame, setSaveGame }) => {
    const [secondsRemaining, setSecondsRemaining] = useState(0)
    const [status, setStatus] = useState("Fish")
    const [onFishingTrip, setOnFishingTrip] = useState(false)
    const [statsEnabled, setStatsEnabled] = useState(false)

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
                setOnFishingTrip(false)
                setStatus("Fish")
                makeToast("You caught more fish!")
            }
        }, onFishingTrip ? 1000 : null
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
        setOnFishingTrip(true)
    }

    const purchaseBoat = () => {
        setSaveGame({
            ...saveGame,
            ownsRentalBoat: true,
            cash: saveGame.cash - PURCHASE_PRICE
        })
    }

    const canPurchase = saveGame.cash >= PURCHASE_PRICE

    let currentButton =
        <button onClick={purchaseBoat} class="button fish-btn" disabled={!canPurchase}>
            Purchase (${PURCHASE_PRICE})
        </button>

    if (saveGame.ownsRentalBoat) {
        currentButton =
            <button onClick={() => handleStart(FISHING_TIME)} class="button fish-btn" disabled={onFishingTrip}>
                {status}
            </button>
    }

    const statsButtonHandler = () => setStatsEnabled(!statsEnabled)

    let stats
    if (statsEnabled) {
        stats =
            <>
                <div class="boat-stats">Fishing speed: {FISHING_TIME} seconds</div>
                <div class="boat-stats">Storage: 5</div>
                <div class="boat-stats">Level: 1 (0/150xp)</div>
            </>
    }

    return (
        <div className="cell medium-2 large-2">
            <div className="card boat-card">
                <div className="card-section">
                    <div className="text-center">
                        <h5>Rental Boat</h5>
                        <a onClick={statsButtonHandler}>{statsEnabled ? "Hide Stats" : "Show Stats"}</a>
                    </div>
                    <div className="divider" />
                    {stats}
                    {currentButton}
                </div>
            </div>
        </div>
    )

}

export default RentalBoat