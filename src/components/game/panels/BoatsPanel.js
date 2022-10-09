import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StarterBoat from './boats/StarterBoat';
import RentalBoat from './boats/RentalBoat';

const BoatsPanel = ({ saveGame, setSaveGame }) => {

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

    let boatMessage
    if (!saveGame.ownsTrawlerBoat) {
        boatMessage =
            <div className="card boat-card">
                <div className="card-section">
                    <p className="boat-stats">Purchase the previous boat to unlock this.</p>
                </div>
            </div>
    }

    return (
        <>
            <div className="cell medium-2 large-2">
                <StarterBoat makeToast={makeToast} saveGame={saveGame} setSaveGame={setSaveGame} />
            </div>
            <div className="cell medium-2 large-2">
                <RentalBoat makeToast={makeToast} saveGame={saveGame} setSaveGame={setSaveGame} />
            </div>
            <div className="cell medium-2 large-2">
                {boatMessage}
            </div>
        </>
    )
}

export default BoatsPanel