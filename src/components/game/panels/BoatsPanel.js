import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Boat from './boats/Boat';
import { allBoats } from '../config/BoatTables';

const BoatsPanel = ({ saveGame, setSaveGame }) => {
    const [boats, setBoats] = useState([])

    const makeToast = (text) => {
        toast.info(text, {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    }

    // const getBoats = () => {
    //     const boatsArr = []
    //     for (let i = 0; i <= saveGame.boatsOwned; i++) {
    //         boatsArr.push(<Boat
    //             id={boat.id}
    //             name={boat.name}
    //             price={boat.price}
    //             fishingSpeed={boat.fishingSpeed}
    //             storage={boat.storage}
    //             boat={boat.tag}
    //             setBoats={setBoats}
    //             lootTable={boat.lootTable}
    //             makeToast={makeToast}
    //             saveGame={saveGame}
    //             setSaveGame={setSaveGame}
    //         />)
    //     }
    //     setBoats(boatsArr)
    // }


    useEffect(() => {
        const currentBoats = allBoats.map((boat) => {
            if (boat.id <= saveGame.boatsOwned) {
                return <Boat
                    key={boat.id}
                    id={boat.id}
                    name={boat.name}
                    price={boat.price}
                    fishingSpeed={boat.fishingSpeed}
                    storage={boat.storage}
                    boat={boat.tag}
                    lootTable={boat.lootTable}
                    makeToast={makeToast}
                    saveGame={saveGame}
                    setSaveGame={setSaveGame}
                />
            }
        })
        setBoats(currentBoats)
    }, [saveGame.boatsOwned])

    let boatMessage
    if (!saveGame.trawlerBoatOwned) {
        boatMessage =
            <div className="cell medium-2 large-2">
                <div className="card boat-card">
                    <div className="card-section">
                        <p className="boat-stats">Purchase the previous boat to unlock this.</p>
                    </div>
                </div>
            </div>
    }

    //Eventually use map to only show the next purchaseable boat
    return (
        <div className="grid-x grid-padding-x grid-padding-y">
            <ToastContainer newestOnTop />
            {boats}
            {boatMessage}
        </div>
    )
}

export default BoatsPanel