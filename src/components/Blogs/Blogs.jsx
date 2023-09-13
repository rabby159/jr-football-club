/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleExerciseTime}) => {
    const [addExercise, setExercise] = useState([]);

    useEffect(()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setExercise(data))
    }, [])

    return (
        <div className="md:w-3/4 mt-10">
            <h1 className="text-5xl font-bold">Jr Football Club</h1>
            <p className="text-2xl mt-2">Select todays exercise</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                {
                addExercise.map(exercise => <Blog key={exercise.id} exercise={exercise} handleExerciseTime={handleExerciseTime}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;