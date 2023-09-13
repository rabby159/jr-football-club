import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import ExerciseDetails from './components/ExerciseDetails/ExerciseDetails'

function App() {
  const [exerciseTime, setExerciseTime] = useState(0);

  const handleExerciseTime = time => {
    const newExerciseTime = exerciseTime + time;
    setExerciseTime(newExerciseTime);
  }

  return (
    <>
      
      <div className='container mx-auto md:flex justify-between mt-3 gap-10'>
        <Blogs handleExerciseTime={handleExerciseTime}></Blogs>
        <ExerciseDetails exerciseTime={exerciseTime}></ExerciseDetails>
      </div>
     
    </>
  )
}

export default App
