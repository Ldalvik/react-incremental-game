/* THIS IS A REFERENCE FILE, SEE UPGRADES.JS */
const STORAGE = {
    price: 60,
    modifier: 1.6
}

const StarterBoatUpgrades = ({ saveGame, setSaveGame }) => {
    const currentStorageUpgradeLevel = saveGame.starterBoat.upgrades.storage
    const storageUpgradePrice = STORAGE.price + 
        (currentStorageUpgradeLevel * STORAGE.price * STORAGE.modifier)

        const upgradeStorage = () => {
            //Nested state is a such a big no-no... oh well, ill refactor it later.
            setSaveGame({
                ...saveGame,
                cash: saveGame.cash - storageUpgradePrice, 
                starterBoat: {
                    ...saveGame.starterBoat, 
                    upgrades: { 
                        ...saveGame.starterBoat.upgrades,
                        storage: currentStorageUpgradeLevel + 1
                    }}  
            })
        }
        
        const canPurchaseStorage = saveGame.cash >= storageUpgradePrice
        let storageButton =
            <button onClick={upgradeStorage} className="button fish-btn" disabled={!canPurchaseStorage}>
                +1 Storage (${storageUpgradePrice})
            </button>

    return (
        <div className="cell medium-2 large-2">
            <div className="card boat-card">
                <div className="card-section">
                    <h5 className="text-center">Dilapidated Boat</h5>
                    <div className="divider" />
                    {storageButton}
                    <button className="button fish-btn">+0.1x XP gain</button>
                    <button className="button fish-btn">+0.1x fish sell rate</button>
                </div>
            </div>
        </div>
    )
}

export default StarterBoatUpgrades