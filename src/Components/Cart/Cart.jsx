/* eslint-disable react/prop-types */

const Cart = ({ name, credit, remainingTime }) => {
    // console.log({ credit })
    return (
        <div className="text-left">
            <div className="mx-4 border-b-2 pb-2">
                <h1 className="text-2xl text-left pl-4  text-blue-600 font-semibold">Credit Hour Remaining: {remainingTime}</h1>
            </div>
            <div className="mx-4 border-b-2 pb-3">

                <h1 className="text-2xl text-left pl-4 mb-4 mt-2">Course Name</h1>
                {
                    name.map((item, idx) => (
                        <ol type="1" key={item.id}>
                            <li className="text-left pl-4">{++idx}. {item.titel}</li>
                        </ol>
                    ))
                }

            </div >
            <div className="text-left ml-7 mt-3">
                <h2>Total Credit Hour: {credit}</h2>
            </div>
        </div>
    );
};

export default Cart;