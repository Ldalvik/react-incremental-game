import PlayerStatsPanel from "./panels/PlayerStatsPanel"
import GridContainer from "./panels/GridContainer"
import BoatsPanel from "./panels/BoatsPanel"
import FishingNetsPanel from "./panels/FishingNetsPanel"
import UpgradesPanel from "./panels/UpgradesPanel"

import { useState, useEffect } from "react"

const SAVE_FREQUENCY = 10000
const GoneFishing = () => {
  const [saveGame, setSaveGame] = useState({
    cash: 50,
    starterBoat: {
      level: 1,
      xp: 0,
      upgrades: {
        sellRate: 1,
        storage: 1,
        xpGain: 1
      }
    },
    rentalBoat: {
      level: 1,
      xp: 0,
      upgrades: {
        sellRate: 1,
        storage: 1,
        xpGain: 1
      }
    },
    ownsRentalBoat: false
  })

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Saves every 10 seconds');
    }, SAVE_FREQUENCY);

    return () => clearInterval(interval)
  }, [])

  return (
    <GridContainer>
      <PlayerStatsPanel saveGame={saveGame} />
      <h4>Boats</h4>
      <BoatsPanel saveGame={saveGame} setSaveGame={setSaveGame} />
      <div className="divider" />
      <h4>Fishing Nets</h4>
      <FishingNetsPanel saveGame={saveGame} setSaveGame={setSaveGame} />
      <div className="divider" />
      <UpgradesPanel saveGame={saveGame} setSaveGame={setSaveGame} />
    </GridContainer >
  )
}

export default GoneFishing