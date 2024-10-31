import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";


const Aunty = () => {
    const [money, setMoney] = useContext(MoneyContext) ;
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
<Cousin name={'Jihad'}></Cousin>
<Cousin name={'Tonmoy'}></Cousin>
            </section>
<h3>Money: {money}</h3>
<button onClick={ () =>setMoney(money+1000) }>Add 1000 tk</button>
        </div>
    );
};

export default Aunty;