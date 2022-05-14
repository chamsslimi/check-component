
import ProfileComponent from './Component/Profile/ProfileComponent.js';
import './App.css';

function App() {
  const fullName="Slimi Chams"
   const bio=<p>Je suis diplomée de l’Ecole Supérieure des Ingénieurs de 
   Medjez El Bab, je me suis spécialisée en génie 
   topographie et géomatique.j assiste  à une 
    formation au sein d'une start up nommée gomycode. </p>
     
 
   const Profession=" Ingénieure en génie topographie et géomatique"
     
   
   const handleName=()=>{
     alert("Chams Slimi")
   }
   
  return (
    <div className="App" style={{boxSizing:'borderBox' ,
    borderRadius: '10px',
    borderStyle:'double',
    width: '500px',
    height: '500px',
    color :'black',
    backgroundColor: 'rgb(227, 223, 223)',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:'370px'
    }}>
     
     <ProfileComponent  
      fullName={fullName}
      Profession={Profession} 
      bio={bio}
      
      handleName={handleName}  
       >
      
      <img src='images.jpg' alt='children' />
      </ProfileComponent>
    </div>
  );
}

export default App;
