import AuthLayout from '../../components/layouts/AuthLayout'
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/inputs/input';
import { validateEmail } from '../../utils/helper';
import {  useState } from 'react'
import ProfilePhotoSelector from '../../components/inputs/ProfilePhotoSelector'
import axiosInstance from '../../utils/axiosinstance';
import { API_PATHS } from '../../utils/apiPaths';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import uploadImage from '../../utils/uploadImage';


const SignUp = () => {
    const [email,setEmail] = useState('');
    const [password,setpassword] = useState('');
    const [error, setError] = useState ();
    const [fullName,setFullName] = useState('');
    const navigate = useNavigate();
    const [profilePic, setEmailPicture] = useState (null);
    const {updateUser} = useContext(UserContext);

    const handleSignUp = async(e) =>{
        e.preventDefault();

        let profileImageUrl = ""; 

        if(!fullName){
                    setError("your full name is required.");
                    return;
                }
        if(!validateEmail(email)) {
                    setError("Please enter a valid email address.")
                    return;
                }
        
                if(!password){
                    setError("Password is required.");
                    return;
                }
                
                  setError ("");

                  try{

                    if(profilePic){
                        const imgUploadRes = await uploadImage(profilePic);
                        profileImageUrl = imgUploadRes.imageUrl || "";
                    }

                    const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
                        fullName,
                        email,
                        password,
                        profileImageUrl,
                    });

                    const {token, user} = response.data;

                    if(token){
                        localStorage.setItem("token", token);
                        updateUser(user);
                        navigate("/dashboard");
                    }
                  } catch(error) {
                    if(error.response && error.response.data.message){
                        setError(error.response.data.message);
                    }else{
                        setError("Something went wrong, please try again")
                    }
                  }
    }

  return (
    <AuthLayout >
<div className='lg:w-full h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center'>
    <h3 className='text-xl font-semibold text-black'>Create an Account</h3>
    <p className='text-xs text-slate-700 mt-[5px] mb-6'>Join us today by entering your details below.</p>

    <form onSubmit={handleSignUp}>

<ProfilePhotoSelector image={profilePic} setImage={setEmailPicture}/>

<div className='grpd grid-cols-1 md:grid-cols-2 gap-4'>
<Input value={fullName} type='text' placeholder='John Wick' label='Full name' onChange={({target}) =>{setFullName(target.value)}}/>

<Input value ={email} onChange={({target}) =>setEmail(target.value)} label="Email Address" placeholder="john@example.com" type="text"/>

<div className='col-span-2'>
    <Input value={password} placeholder='Min 8 characters' type="password" label='password' onChange={({target}) =>setpassword(target.value)}/>
</div>

</div>
{error && <p className='text-red-500 text-sx pb-2.5'>{error}</p>}
        <button type='submit' className='btn-primary'>
SIGNUP
        </button>
        <p className='text-[13px] text-slate-800 mt-3'>
            already have an account?
            <Link className='font-medium text-primary underline' to={'/login'}>LogIn</Link>
        </p>
    </form>
</div>
    </AuthLayout>
  )
}

export default SignUp