import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";


const Friend = () => {
    const gift = useContext(AssetContext) ;
    return (
        <div>
            <h3>Friend</h3>
            <h3>Gift: {gift}</h3>
        </div>
    );
};

export default Friend;