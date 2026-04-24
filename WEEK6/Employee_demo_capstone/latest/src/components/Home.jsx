import {useContext} from 'react'
import { counterContextObj} from '../context/ContextProvider'
import {userCouterStore} from '../store/CouterStore'

function Home() {
  const {newCounter,increaseCounter,decreaseCounter}=userCouterStore();

  const { counter,changeCounter} = useContext(counterContextObj);
  return (
    <div className='text-center'>
      <h1 className='font-bond text-5xl mb-4'>Welcome to Our Employee Hub</h1>
      <p className='text-2xl mt-4'>This website is designed to simplify how we manage and access employee information. It acts as a digital repository to securely store, organize, and update the details of our team members. Whether you need to find a colleague's contact information, onboard a new hire, or update employment records, this platform ensures everything is just a click away. </p>
    </div>
  )
}

export default Home
