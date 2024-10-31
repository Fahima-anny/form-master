import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Special = ({asset}) => {
    const gift = useContext(AssetContext) ;
    return (
        <div>
          <h2>Special</h2>  
          {asset && <h3>{'Has: Ring'}</h3>}
<h3>Gift: {gift}</h3>
        </div>
    );
};

export default Special;