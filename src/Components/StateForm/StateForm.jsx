import { useState } from "react";


const StateForm = () => {

const [email,setEmail] = useState('Name') ;
const [name,setName] = useState('Email') ;
const [pass,setPass] = useState('') ;
const [error,setError] = useState('')

const handleSubmit = e => {
    e.preventDefault() ;
    if(pass.length<6){
        setError('password must be at least 6 characters')
    }
    else{
        setError('')
    }
    console.log(email,name,pass) ;
}
const handleEmail = (e) => {
    // console.log(e.target.value) ;
    setEmail(e.target.value) ;
}

const handleName = (e) => {
    setName(e.target.value) ;
}

const handlePassword = e => {

    setPass(e.target.value) ;

}

    return (
        <div>
              <form action="" onSubmit={handleSubmit}>
                <input value={name} onChange={handleName} type="text" name="name" id="" />
                <br />
                <input value={email} onChange={handleEmail} type="email" required name="email" id="" />
                <br />
                <input onChange={handlePassword} type="password" name="password" required id="" />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateForm;