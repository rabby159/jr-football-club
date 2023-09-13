import './App.css'
import Blogs from './components/Blogs/Blogs'
import ExerciseDetails from './components/ExerciseDetails/ExerciseDetails'

function App() {

  return (
    <>
      
      <div className='container mx-auto md:flex justify-between mt-3 gap-10'>
        <Blogs></Blogs>
        <ExerciseDetails></ExerciseDetails>
      </div>
     
    </>
  )
}

export default App
