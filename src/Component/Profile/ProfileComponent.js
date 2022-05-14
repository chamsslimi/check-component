import PropTypes from 'prop-types';
function ProfileComponent({fullName,bio,Profession,handleName,children}){
    return(
        <>
        <h2>{fullName}</h2>
        <p>{Profession} </p>
        <div> {bio}  </div>
        {children}
        <button onClick={()=> handleName(fullName)} style={{width:'150px'}}>alert</button>
        
        </>

    )}
    ProfileComponent.defaultProps={
        fullName:"wejden chihi",
        Profession:"Doctorante en géodésie",
        bio:<p> ... </p>
        
      }
      ProfileComponent.propTypes={
        fullName: PropTypes.string,
        Profession:PropTypes.string,
        bio:PropTypes.string,
        handleName:PropTypes.func
      }
export default ProfileComponent;