import Friend from "../Friend/Friend";

const Cousin = ({name,asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <section>
                {name}
            </section>
            {asset && <h3>{'Has: Ring'}</h3>}
            {
                name === 'Mim' && <Friend></Friend>
            }
        </div>
    );
};

export default Cousin;