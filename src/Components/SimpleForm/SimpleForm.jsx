

const SimpleForm = () => {

    const handleSubmit = e => {
        e.preventDefault() ;
        console.log(e.target.name.value) ;
        console.log(e.target.email.value) ;
        console.log(e.target.phone.value) ;
        console.log('submitted')
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="name" id="" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;