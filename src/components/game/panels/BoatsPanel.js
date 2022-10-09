import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StarterBoat from './boats/StarterBoat';

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

    return (
        <div className="cell large-2">
            <ToastContainer newestOnTop limit={2} />
            <StarterBoat makeToast={makeToast} />
        </div>
    )
}

export default BoatsPanel