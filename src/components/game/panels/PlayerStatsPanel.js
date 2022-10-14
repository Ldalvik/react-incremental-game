const PlayerStatsPanel = ( { saveGame }) => {
    return (
        <div className="grid-x grid-padding-x grid-padding-y">
            <div className="cell large-12">
                <div className="card stats-card">
                    <div className="card-section">
                        <div className="grid-x">
                            <div className="cell small-3 text-center">Balance: ${saveGame.cash}</div>
                            <div className="cell small-3 text-center">Level: 1 (0/100xp)</div>
                            <div className="cell small-3 text-center">Scrap: 0</div>
                            <div className="cell small-3 text-center">Raw Material: 0</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerStatsPanel