import { useEffect } from "react";
import { useState } from "react";
import '../Cart/Cart'
import Cart from "../Cart/Cart";

const Courses = () => {

    const [Courses, setCourses] = useState([])
    const [name, setName] = useState([])


    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    const HandelSelectbtn = (course) => {
        const newName = [...name, course]
        setName(newName)


    }
    console.log(name)

    return (
        <div className="mt-5 flex">
            <div className="grid grid-cols-3 gap-3 w-2/3 mx-auto">

                {
                    Courses.map((course) => <div key={course.id}>
                        <div className="card   bg-base-100 shadow-xl px-4 py-4">
                            <figure className="">
                                <img src={course.image} alt="" className="rounded" />
                            </figure>
                            <div className="card-body h-48 items-center text-center">
                                <h2 className="card-title  font-semibold text-start ">{course.titel}</h2>
                                <p className='text-start  '><small>{course.cours_details}.</small></p>
                                <div className=" flex justify-evenly">
                                    <p>$ Price :{course.price}</p>
                                    <p>Credit : {course.credit} hr</p>
                                </div>
                                <div className="card-actions bg-blue-700 rounded-lg py-2 text-white   ">
                                    <div onClick={() => HandelSelectbtn(course)}>
                                        <button className="btn btn-primary">Select</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>

            <div className="border w-1/3 h-96 mt-5">
                <Cart name={name}></Cart>
            </div>
        </div>
    );
};

export default Courses;