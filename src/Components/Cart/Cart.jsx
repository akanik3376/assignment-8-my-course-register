
const Cart = ({ name }) => {
    // console.log({ name })
    return (
        <div>
            <h1 className="text-2xl text-left pl-4  border-b-2 pb-2 text-blue-600 font-semibold">Credit Hour Remaining { }</h1>
            <h1 className="text-2xl text-left pl-4 mb-4 mt-2">Course Name</h1>
            {
                name.map(item => (
                    <ol type="1" key={item.id}>
                        <li className="text-left pl-4">{item.titel}</li>
                    </ol>
                ))
            }
        </div >
    );
};

export default Cart;