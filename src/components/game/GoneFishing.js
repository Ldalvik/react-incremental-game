import PlayerStatsPanel from "./panels/PlayerStatsPanel"
import GridContainer from "./panels/GridContainer"
import BoatsPanel from "./panels/BoatsPanel"
import { useState, useEffect } from "react"

const SAVE_FREQUENCY = 10000
const GoneFishing = () => {
  const [saveGame, setSaveGame] = useState({

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
      <BoatsPanel saveGame={saveGame} setSaveGame={setSaveGame} />
    </GridContainer>
  )
}

export default GoneFishing