import logo from './logo.svg';
import './App.css';
import writers from './writers';
import { ProfileCard } from './ProfileCard';

function App() {
  return (
    <div>
      <h1>write profiles</h1>
      <div className="container">
        {writers.map(writer => (
          <ProfileCard writer={writer}/>
          ))}
          </div>
          </div>
/
        {/* //     width="300px"
        //     height="300px"
        //     alt=""
        //   />
        //   <div className='textGroup'>
        //   <h3>{writer.name}</h3>
        //   <p>{writer.email}</p>
        //   <p>{writer.phone}</p>

        //   </div>
        // </div>
     ))}
      </div>
    </div> */}

  );
}

export default App;
