/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import profile from '../../assets/images/profile.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ExerciseDetails = ({exerciseTime}) => {
    const [breakTime, setBreakTime] = useState(0);

    const handleBreakTime = seconds =>{
        setBreakTime(seconds);
    }

    const handleToast = () =>{
        toast.success('Your activity complete', {
            position: 'top-center'
        })
    }
    return (
        <div className="md:w-1/4">
            <div className='flex gap-4'>
                <img src={profile} alt="" />
                <div>
                    <h2 className='text-xl font-semibold'>Gazi Faria</h2>
                    <small>Dhaka, Bangladesh</small>
                </div>
            </div>
            <div className='flex gap-5 justify-evenly mt-5 bg-slate-200 p-3 rounded-lg'>
                <div>
                    <h2 className='font-semibold text-center '>75kg</h2>
                    <p>Weight</p>
                </div>
                <div>
                    <h2 className='font-semibold text-center'>6.5</h2>
                    <p>Height</p>
                </div>
                <div>
                    <h2 className='font-semibold text-center'>23yrs</h2>
                    <p>Age</p>
                </div>
            </div>
            <h2 className='mt-7 text-xl font-semibold'>Add a break</h2>
            <div className='flex gap-3 justify-around mt-2 bg-slate-300 p-3 rounded-lg'>
                <div>
                    <button className='bg-white p-1 rounded-full hover:bg-cyan-500' onClick={()=> handleBreakTime(10)}>10s</button>
                </div>
                <div>
                    <button className='bg-white p-1 rounded-full hover:bg-cyan-500' onClick={()=> handleBreakTime(20)}  >20s</button>
                </div>
                <div>
                    <button className='bg-white p-1 rounded-full hover:bg-cyan-500' onClick={()=> handleBreakTime(30)}>30s</button>
                </div>
                <div>
                    <button className='bg-white p-1 rounded-full hover:bg-cyan-500' onClick={()=> handleBreakTime(40)}>40s</button>
                </div>
                <div>
                    <button className='bg-white p-1 rounded-full hover:bg-cyan-500' onClick={()=> handleBreakTime(50)}>50s</button>
                </div>
            </div>

             <h2 className='mt-16 text-xl font-semibold'>Exercise Details</h2>
            <div>
                <div className='bg-slate-300 flex justify-around items-center mt-2'>
                    <h4 className='p-3'>Exercise Time</h4>
                    <p>{exerciseTime} min</p>
                </div>
                <div className='bg-slate-300 flex justify-around items-center mt-2'>
                    <h4 className='p-3'>Break Time</h4>
                    <p>{breakTime} sec</p>
                </div>
            </div>

            <div className='mt-10'>
                <button className="btn btn-primary w-full" onClick={handleToast}>Activity Complete</button>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ExerciseDetails;