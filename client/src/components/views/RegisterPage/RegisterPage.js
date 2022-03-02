
import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { RegisterUser } from '../../../actions/user_action'
import { useNavigate } from 'react-router-dom';
import Auth from '../../../hoc/auth';

function RegisterPage(props) {
    
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const [Email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");


    const onEmail = (event) =>{
        setEmail(event.currentTarget.value);
    }
    
    const onPassword = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onName = (event) =>{
        setName(event.currentTarget.value);
    }  
    
    const onConfirmPassword = (event) =>{
        setConfirmPassword(event.currentTarget.value);
    }   

    const onSubmit = (event) =>{
        event.preventDefault();

        if(Password !== ConfirmPassword){

            return alert('비밀번호 일치하지않습니다.')
        }
        
        let body ={
            email: Email,
            password: Password,
            name: Name
        }

        dispatch(RegisterUser(body))
        .then(response => {
            if(response.payload.success){
                navigate('/')
            }
            else{
                alert('Failed to Sign up');
            }
        })
    }

    return (
        <div style ={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'}}>

        <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={onSubmit}>

            <label>Email</label>
            <input type="email" value={Email} onChange={onEmail}/>

            <label>Name</label>
            <input type="text" value={Name} onChange={onName} />

            <label>Password</label>
            <input type="password" value={Password} onChange={onPassword} />

            <label>Comfirm Password</label>
            <input type="password" value={ConfirmPassword} onChange={onConfirmPassword} />

            <br />
            <button>
                Register
            </button>
        </form>
         </div>
    )
}


export default Auth(RegisterPage, false);