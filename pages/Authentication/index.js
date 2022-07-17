

import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from './../../context/AuthUserContext';
import { GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../lib/firebase';
// import 2 from '../Components/2';

export default function Example() {

  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const router = useRouter();
  const [error, setError] = useState(null);
  const [ok,setok]= useState(null)
  const {login , authUser, loading ,user ,signup  , logout , Glogin} = useAuth();
  //console.log(user)
  const handleSignIn =  (e) => {
    e.preventDefault()
  

     login(email, passwordTwo)
    .then(result=>{setok(result); router.back()})
    .catch((err)=>{
     
      alert(`${err.message}`)
      setError(err)
      router.reload()
      
      setok(false)

      
     
    })
  }

  const provider = new GoogleAuthProvider();
  const onGoogleSubmit= async (e) => {
    e.preventDefault()
    
     try {
     Glogin(auth, provider)
    //  await setok(result)
    //  //console.log(user)
    } catch (err) {
      // //console.log(err)
      setError(err)

      // setok(false)
    }
   



  }



  const handleSignup =  (e) => {
    e.preventDefault()

    signup(email, passwordTwo)
    .then(result=>{setok(result); router.back()})
    .catch((err)=>{
     
      alert(`${err.message}`)
      setError(err)
      setok(false)

      router.reload()
     
    })

  

  }


//console.log(error)

// if(ok==true){router.back()}

//console.log(ok)

  return (
    <>
<div className="min-h-screen flex items-center  justify-center bg-gray-50   " >
    <div className="border-2 ">

    
  <div className="max-w-md w-full h-full space-y-8 px-10 py-10 " >
    <div>
      
      <img className="mx-auto h-16 w-auto" src="https://media-exp1.licdn.com/dms/image/C5622AQGk-hTJsfKfig/feedshare-shrink_800/0/1658073743016?e=1660780800&v=beta&t=Vdahiwctpfgdl-8wJB_4PCymiNceWCqU9pctrwJ5vFw" alt="Workflow"/>
      <h2 className="mt-6 text-center text-xl font-extrabold text-gray-900">
        Subscribe with a made up password only for this website  😀	
      </h2>
      
    </div>
    <form className="mt-8 space-y-6" >
    { error && <alert color="danger">{error}</alert>}

      <div className="rounded-md">
      <div className="">
          <label for="email-address" className="sr-only">Email address</label>
          <input id="email-address" name="email"  type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autocomplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
        </div>
        {/* <div className="mb-2">
          <label for="email-address" className="sr-only">Password</label>
          <input id="email-address" name="Password"  type="password" 
           value={passwordOne}
           onChange={(event) => setPasswordOne(event.target.value)}          
          required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Your Name"/>
        </div> */}
        <div className="my-2">
          <label for="password" className="sr-only">Retype Password</label>
          <input id="password" name="retypePassword"  type="password" 
          value={passwordTwo}
          onChange={(event) => setPasswordTwo(event.target.value)}
          required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
        </div>

      </div>
     {/* <b className="text-red-900"></b> :       <br/> */}

 {/* <b className="text-green-500">successfuly Loged in</b>  */}
      <div>

        <button onClick={handleSignup} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg className="h-5 w-5 text-gray-800 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>
          Subscribe
        </button>
        
       
      {/* <p className="text-gray-800 mt-1 font-extrabold"><span className="text-red-400">Register</span> to subscribe ?</p> */}
      </div>
      <div>
        <button onClick={onGoogleSubmit} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
           

          </span>
          Sign in with GOOGLE
        </button>
      </div>
      <hr/>
      <span className="text-gray-500 "> <small>or</small> simply just log in </span> 
      <button  onClick={handleSignIn} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg className="h-5 w-5 text-gray-800 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>
          Login
        </button>

  
     


      <div className="separator my-5 " >
               
                <div className="line bg-gray-400"></div>
               
                <div className="line bg-gray-400"></div>
     </div>

    </form>
  </div>
  </div>
</div> 
    </>
  )
}
