import { useState } from "react"
import { TabItem, Tabs, TabPanel, TabsContent } from "react-foundation"
import RentalBoatUpgrades from "./upgrades/RentalBoatUpgrades"
import StarterBoatUpgrades from "./upgrades/StarterBoatUpgrades"

const UpgradesPanel = ({ saveGame, setSaveGame }) => {
    const [activeTab, setActiveTab] = useState({
        boat: true,
        nets: false
    })

    const boatTabHandler = () => setActiveTab({ boat: true, nets: false })

    const netsTabHandler = () => setActiveTab({ boat: false, nets: true })

    //Eventually use map to only show puchased boat upgrades
    return (
        <div className="cell">
            <Tabs>
                <TabItem isActive={activeTab.boat}>
                    <a className="tab-text" onClick={boatTabHandler} href="#boat">Boat Upgrades</a>
                </TabItem>
                <TabItem isActive={activeTab.nets}>
                    <a className="tab-text" onClick={netsTabHandler} href="#nets">Fishing Net Upgrades</a>
                </TabItem>
            </Tabs>
            <TabsContent>
                <TabPanel isActive={activeTab.boat} id="boat">
                    <div className="grid-x grid-padding-x grid-padding-y">
                        <StarterBoatUpgrades saveGame={saveGame} setSaveGame={setSaveGame} />
                        <RentalBoatUpgrades  saveGame={saveGame} setSaveGame={setSaveGame} />
                    </div>
                </TabPanel>
                <TabPanel isActive={activeTab.nets} id="nets">

                </TabPanel>
            </TabsContent>
        </div>
    )
}

export default UpgradesPanel