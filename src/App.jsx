import './App.css'
import Grandpa from './Components/Grandpa/Grandpa'
import HookFor from './Components/HookForm/HookFor'
import RefForm from './Components/RefForm/RefForm'
import ReUsableForm from './Components/ReUsableForm/ReUsableForm'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import StateForm from './Components/StateForm/StateForm'

function App() {

  const handleSubmit = (data) => {
    console.log(data)
  }

  const handleUpdateProfile = (data) => {
    console.log(data)
  }

  return (
    <>
      {/* <h1>Vite + React</h1> */}
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateForm></StateForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookFor></HookFor> */}
      {/* <ReUsableForm
        formTitle={'Sign UP'}
        handleSubmit={handleSubmit}
      >
        <div>
          <h2>Sign Up</h2>
          <p>Dont have an account. sign up now</p>
        </div>
      </ReUsableForm>


      <ReUsableForm
        formTitle={'Profile Update'}
        submitBtnTxt={'Update'}
        handleSubmit={handleUpdateProfile}
      >
        <div>
          <h2>Update Profile</h2>
          <p>Always stay upto date</p>
        </div>
      </ReUsableForm> */}

<Grandpa></Grandpa>

    </>
  )
}

export default App
