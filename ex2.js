import { useState } from "react";

export default function Panier () {
    const [arts, setArts] = useState([
        {id: 1, nom: "aa", prix: 25, quantite: 1},
        {id: 2, nom: "bb", prix: 70, quantite: 1},
        {id: 3, nom: "cc", prix: 55, quantite: 2}
    ]);

    function ajt() {
        const newArt = {id: arts.length + 1, nom: "dd", prix: 10, quantite: 3};
        setArts([...arts, newArt]);
    };
    
    const tot = arts.reduce((sum , {prix, quantite}) => sum + prix * quantite, 0)

    return (
        <div>
            <ul>
                {arts.map(({id, nom, prix ,quantite}) => (
                    <li key={id}> 
                        {nom} - prix : {prix * quantite}
                    </li>
                ))}
            </ul>

            <h3> Total : {tot} </h3>
            <p>{tot > 100 ? "Livraison gratuite !" : "Frais de livraison appliqués"}</p>

            <button onClick={ajt}>Ajouter Article</button>
            
        </div>
    )
}





