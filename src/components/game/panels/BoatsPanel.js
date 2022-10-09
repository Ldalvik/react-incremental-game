import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
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
            <div className="cell medium-2 large-2">
                <div className="card boat-card">
                    <div className="card-section">
                        <p className="boat-stats">Purchase the previous boat to unlock this.</p>
                    </div>
                </div>
            </div>
    }

    return (
        <div className="grid-x grid-padding-x grid-padding-y">
            <ToastContainer newestOnTop />
            <StarterBoat makeToast={makeToast} saveGame={saveGame} setSaveGame={setSaveGame} />
            <RentalBoat makeToast={makeToast} saveGame={saveGame} setSaveGame={setSaveGame} />
            {boatMessage}
        </div>
    )
}

export default BoatsPanel