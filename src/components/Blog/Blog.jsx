/* eslint-disable react/prop-types */

const Blog = ({exercise}) => {
    const {title, cover, short_description, age, time} = exercise;
    return (
        <div className="">
            <div className="card bg-base-100 shadow-xl mx-2">
            <figure><img className="h-[250px]" src={cover} alt="exercise" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{short_description}</p>
                <h3 className="font-semibold">Age: {age}</h3>
                <p className="mb-5">Exercise Time: {time} min</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Added to List</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Blog;