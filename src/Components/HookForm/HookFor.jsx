import UseInputState from "../UseInputState/UseInputState";


const HookFor = () => {

    // let [name,setName] = UseInputState('Rojoni')
    let emailState = UseInputState('email')

const handleSubmit = e => {
    console.log('name:' , name)
    console.log('email:' , emailState.value)
    e.preventDefault() ;  
}

    return (
        <div>
                        <form action="" onSubmit={handleSubmit}>
                {/* <input value={name} onChange={setName} type="text" name="name" id="" />
                <br /> */}
                <input {...emailState} type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookFor;