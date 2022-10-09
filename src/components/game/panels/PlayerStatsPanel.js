const PlayerStatsPanel = () => {
    return (
        <div className="cell large-12">
            <div className="card stats-card">
                <div className="card-section">
                    <div class="grid-x">
                        <div class="cell small-3 text-center">Balance: $0</div>
                        <div class="cell small-3 text-center">Level: 1 (0/100xp)</div>
                        <div class="cell small-3 text-center">Scrap: 0</div>
                        <div class="cell small-3 text-center">Raw Material: 0</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerStatsPanel