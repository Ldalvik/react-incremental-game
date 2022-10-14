import React, { useState, useEffect, useRef } from 'react';
import { getItem, getChance } from '../../config/LootTable';
import { allBoats } from '../../config/BoatTables'

const Boat = ({ id, name, price, fishingSpeed, storage, boat, lootTable,
    makeToast, saveGame, setSaveGame }) => {

    const [secondsRemaining, setSecondsRemaining] = useState(0)
    const [status, setStatus] = useState("Fish")
    const [onFishingTrip, setOnFishingTrip] = useState(false)
    const [statsEnabled, setStatsEnabled] = useState(false)
    const [ownsBoat, setOwnsBoat] = useState(false)

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
                goFishing()
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

    const goFishing = () => {
        const fishCaught = Math.round(Math.random() * (saveGame[boat].upgrades.storage + storage))
        let all = []
        for (var i = 0; i < fishCaught; i++) all.push(getItem(lootTable))
        const totalEarned = (all.reduce((accumulator, item) => {
            return accumulator + item.price;
        }, 0))

        const bonusCash = Math.ceil(
            totalEarned * ((saveGame[boat].level + saveGame[boat].upgrades.sellRate) * 0.1))

        const collection = all.map(({ name, price }) => `${name} ($${price})\n`)

        setSaveGame(state => {
            return {
                ...state,
                cash: state.cash + totalEarned + bonusCash,
            }
        })

        const fishCaughtMessage = collection !== null ? collection : "Nothing"
        
        setOnFishingTrip(false)
        setStatus("Fish")
        makeToast(`You caught:\n${fishCaughtMessage} and sold it for $${totalEarned + bonusCash} (This includes $${bonusCash} bonus cash)`)
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
        setSaveGame(state => {
            return {
                ...state,
                cash: state.cash - price,
                boatsOwned: state.boatsOwned + 1
            }
        })
        setOwnsBoat(true)
    }

    const canPurchase = saveGame.cash >= price

    let currentButton =
        <button onClick={purchaseBoat} className="button fish-btn" disabled={!canPurchase}>
            Purchase (${price})
        </button>

    if (saveGame.boatsOwned > id || ownsBoat) {
        currentButton =
            <button onClick={() => handleStart(fishingSpeed)} className="button fish-btn" disabled={onFishingTrip}>
                {status}
            </button>
    }

    const statsButtonHandler = () => setStatsEnabled(!statsEnabled)

    const catchableFishData = lootTable.map((item) => {
        const percent = (getChance(lootTable, item.name) * 100).toFixed(1)
        return (
            <li>
                {`${item.name} ($${item.price}): `}
                <span className="green">{`${percent}%`}</span>
            </li>
        )
    })

    let stats
    if (statsEnabled) {
        stats =
            <>
                <div className="boat-stats">Fishing speed: {fishingSpeed} seconds</div>
                <div className="boat-stats">Storage: {saveGame[boat].upgrades.storage + storage}</div>
                <div className="boat-stats">Can catch: <ul>{catchableFishData}</ul></div>
                <div className="boat-stats">Sell Rate: {saveGame[boat].upgrades.sellRate * 0.1}x</div>
                <div className="boat-stats">Level: 1 (0/150xp)</div>
            </>
    }

    return (
        <div className="cell medium-2 large-2">
            <div className="card boat-card">
                <div className="card-section">
                    <div className="text-center">
                        <h5>{name}</h5>
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

export default Boat