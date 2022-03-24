import logo from './logo.svg';
import './App.css';
// import writers from './writers';
import ProfileCard  from './ProfileCard';
import { useEffect, useState } from 'react';


function App() {
  const[data, setData] = useState({
    writers: [],
    loading: false,
  });

const handleClick = () => {
  setData(prevData => ({
    ...prevData,
    loading: true,
  }));
}
  setTimeout(() => {
    const getwriters = async () => {
      const response = await fetch("/writers.json");
      const data= await response.json();
      console.log (data)
      setData({
        writers: data,
        loading: false,
      });
      
    };
    getwriters();
   }, 2000);

   if(data.loading) {
     return(
       <div>
         <h1>Writer Profiles</h1>
         <div className='continer'>
           <div className='Card action'>
             <p className='infoText'>loading... </p>

           </div>
         </div>
       </div>
     );
  }     
  
  return (
    <div>
      <h1>write profiles</h1>

      <div className="container">
        {data.writers.length=== 0 ? (
      <div className='card action'>
        <p className='infoText'> oops... no writer profile found</p>
        <button className='actionBtn' onClick={handleClick}>
          Get writers
          </button>
          </div>
        ) : (
          data.writers.map((writer) => (
          <ProfileCard key={writer.id} writer={writer}/>
          ))
        )}
      </div>
    </div>

        
  );
}

export default App;
