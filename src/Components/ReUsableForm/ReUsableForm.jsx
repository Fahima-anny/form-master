const ReUsableForm = ({formTitle, submitBtnTxt='Submit', handleSubmit, children}) => {

const handleLocalChange = (e) => {
e.preventDefault() ;
const data = {
    name: e.target.name.value,
    email: e.target.email.value,
    password: e.target.password.value,
}
handleSubmit(data) ;
}

    return (
        <div>
            {children}
            <form action="" onSubmit={handleLocalChange}>
                <input type="text" name="name" id="" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value={submitBtnTxt} />
            </form>
        </div>
    );
};

export default ReUsableForm;