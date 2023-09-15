import { useEffect } from "react";
import { useState } from "react";
import '../Cart/Cart'
import Cart from "../Cart/Cart";

// tost 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Courses = () => {

    const [Courses, setCourses] = useState([])
    const [name, setName] = useState([])
    // credit set
    const [credit, setCredit] = useState(0)

    // remainingTime set
    const [remainingTime, setRemainingTime] = useState(0)
    const [addTotal, setAddTotal] = useState(0)

    const totalHour = 20;

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    const HandelSelectbtn = (course) => {

        const isExist = name.find(item => item.id == course.id)
        let time = course.credit
        let total = course.price
        // console.log(total)
        if (isExist) {
            // return alert('Added')
            return toast('Already Exist');
        } else {
            name.forEach(element => {
                time = time + element.credit
                // console.log(time)
                total = total + element.price
            });

            const newName = [...name, course]
            setName(newName)
            // console.log(time)

        }
        let remaining = totalHour - time;

        // console.log(sum)
        if (remaining < 0) {
            // return alert('You don`t have available money')
            return toast("Your Credit Is Over");
        } else {
            setCredit(time)
            setRemainingTime(remaining)
            setAddTotal(total)
        }



    }

    return (
        <div className="mt-5 flex flex-col md:flex-row lg:flex-row container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-2/3 mx-auto">

                {
                    Courses.map((course) => <div key={course.id}>
                        <div className="card space-y-4 rounded-xl bg-base-100 shadow-xl px-2 py-4">
                            <figure className="">
                                <img src={course.image} alt="" className="rounded w-full" />
                            </figure>
                            <div className="card-body  items-center text-center">
                                <h2 className="card-title w-48 font-semibold text-start ">{course.titel}</h2>
                                <p className='text-start  '><small>{course.cours_details}.</small></p>
                                <div className="my-2 flex justify-between">
                                    <p>$ Price :{course.price}</p>
                                    <p>Credit : {course.credit} hr</p>
                                </div>
                                <div className="card-actions bg-blue-700 rounded-lg py-2 text-white   ">
                                    <div onClick={() => HandelSelectbtn(course)}>
                                        <button className="btn btn-primary">Select</button>
                                        <ToastContainer />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>

            <div className=" shadow-md  lg:w-1/3 mt-5">
                <Cart name={name} credit={credit}
                    remainingTime={remainingTime}
                    addTotal={addTotal}
                ></Cart>
            </div>
        </div>
    );
};

export default Courses;