import Father from "../Father/Father"
import Uncle from "../Uncle/Uncle"
import Aunty from "../Aunty/Aunty"
import './Grandpa.css'
import { createContext, useState } from "react";

export const MoneyContext = createContext(1000) ;
export const AssetContext = createContext('gold') ;

const Grandpa = () => {

    const asset = 'Diamond-ring' ;

const [money, setMoney] = useState(1000) ;

    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <h3>Net Money: {money}</h3>
          <MoneyContext.Provider value={[money,setMoney]}>
          <AssetContext.Provider value='gold'>
           <section className="flex">
                <Father asset={asset}></Father>
                <Uncle asset={asset}></Uncle>
                <Aunty></Aunty>
            </section>
           </AssetContext.Provider>
          </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;