import Bro from "../Bro/Bro";
import Myself from "../Myself/Myself";
import Sis from "../Sis/Sis";


const Father = ({asset}) => {
    return (
        <div>
            <h2>Father</h2>
           <section className="flex">
           <Myself asset={asset}></Myself>
            <Sis></Sis>
        <Bro></Bro>
           </section>
        </div>
    );
};

export default Father;