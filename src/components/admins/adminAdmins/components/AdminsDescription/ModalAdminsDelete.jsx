import { useState } from "react";
import { clearErrorAfterDelay } from "../../../../../utilities/clearErrorAfterDelay.js";
import { ReloadAfterDelay } from "../../../../../utilities/ReloadAfterDelay.js";
//import { dataFilter } from "../../../../../utilities/dataFilter.js";

const ModalAdminsDelete = ({ closeModal, adminData }) => {
    const [datas, setDatas] = useState([]);
    const [message, setMessage] = useState('');

    const handleDelete = (id) => {
        console.log(id);
        fetch("http://localhost:3000/api/users/" + id, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then(resp => {
                if (resp.ok) {
                    setMessage(`L'administrateur a bien été supprimé.`);
                    ReloadAfterDelay(setMessage, 3000);
                    //dataFilter(setDatas, datas, id);
                    return resp.json();

                } else {
                    setMessage(`La suppression de l'administrateur a échoué.`);
                    clearErrorAfterDelay(setMessage, 3000);
                    throw new Error("Erreur lors de la suppression de l'administrateur.");
                }
            })
            .then(datas => {
                console.log(`La suppression de l'utilisateur a réussi.`, datas);
            })
            .catch(error => {
                console.error('Erreur lors de la requête de suppression', error);
            })
    }
    
    return (
        <>

            <div className="modalAdminsDelete" onClick={closeModal}></div>

            <div className="modalAdminsDelete__content">
                <div className="modalAdminsDelete__content__close" onClick={closeModal}></div>
                <p className="modalAdminsDelete__content__question">Êtes vous surs de vouloir supprimer {adminData.email} ?</p>
                <button className="modalAdminsDelete__content__yes" onClick={() => handleDelete(adminData.id)}>Oui</button>
                <button className="modalAdminsDelete__content__no" onClick={closeModal}>Non</button>
                <p className="modalAdminsDelete__content__message">{message}</p>
            </div>

        </>
    )
}

export default ModalAdminsDelete;