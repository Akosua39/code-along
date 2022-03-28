import logo from './logo.svg';
import './App.css';
// import writers from './writers';
import ProfileCard  from './ProfileCard';
import { useEffect, useState } from 'react';
import { getDefaultNormalizer } from '@testing-library/react';
import Profileform from './Components/Profileform';


function App() {
   const[allProfile, setAllProfile] = useState([
     {
       firstName: "Louisa",
       lastName: "Mills",
       email: "millslouisa39@gmail.com",
       phone: "+233 054 318 0514",
     },

    ]);
    
    const submit = (profile) => {
      setAllProfile(state => ([profile, ...state]));
    }
   
  return (
    <div>
      <h1>write profiles</h1>

      <div className="container">
        <Profileform  submit={submit}/>
        {allProfile.map((writer)  => (
          <ProfileCard key={writer.id} writer={writer}/>
          ))
        }
      </div>
    </div>

        
  );
}

export default App;
