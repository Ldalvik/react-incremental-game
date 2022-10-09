const STORAGE = {
    price: 100,
    modifier: 1.9
}

const RentalBoatUpgrades = ({ saveGame, setSaveGame }) => {
    const storageUpgradePrice = STORAGE.price + 
        (saveGame.rentalBoat.upgrades.storage * STORAGE.price * STORAGE.modifier)

        const upgradeStorage = () => {

        }
    
        
        const canPurchaseStorage = saveGame.cash >= storageUpgradePrice
        let storageButton =
            <button onClick={upgradeStorage} class="button fish-btn" disabled={!canPurchaseStorage}>
                +1 Storage (${storageUpgradePrice})
            </button>

    return (
        <div className="cell medium-2 large-2">
            <div className="card boat-card">
                <div className="card-section">
                    <h5 className="text-center">Rental Boat</h5>
                    <div className="divider" />
                    {storageButton}
                    <button className="button fish-btn">+0.1x XP gain</button>
                    <button className="button fish-btn">+0.1x fish sell rate</button>
                </div>
            </div>
        </div>
    )
}

export default RentalBoatUpgrades