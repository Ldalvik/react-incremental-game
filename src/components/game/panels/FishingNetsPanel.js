import StarterNet from "./nets/StarterNet"

const FishingNetsPanel = ({ saveGame, setSaveGame }) => {


    let netMessage
    if (!saveGame.ownsSeaweedNet) {
        netMessage =
            <div className="cell medium-2 large-2">
                <div className="card boat-card">
                    <div className="card-section">
                        <p className="boat-stats">Purchase the previous net to unlock this.</p>
                    </div>
                </div>
            </div>
    }
    return (
        <div className="grid-x grid-padding-x grid-padding-y">
            <StarterNet saveGame={saveGame} setSaveGame={setSaveGame} />
            {netMessage}
        </div>
    )

}

export default FishingNetsPanel