import { Progress } from "react-foundation"

const PlayerStatsPanel = ( { saveGame }) => {
    return (
        <div className="grid-x grid-padding-x grid-padding-y">
            <div className="cell large-12">
                <div className="card stats-card">
                    <div className="card-section">
                        <div class="grid-x">
                            <div class="cell small-3 text-center">Balance: ${saveGame.cash}</div>
                            <div class="cell small-3 text-center">Level: 1 (0/100xp)</div>
                            <div class="cell small-3 text-center">Scrap: 0</div>
                            <div class="cell small-3 text-center">Raw Material: 0</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerStatsPanel