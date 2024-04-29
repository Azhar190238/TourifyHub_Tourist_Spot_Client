import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { authContext } from "../../Providers/AuthProvider";
import UseTitle from "../../Title/UseTitle";



const MyList = () => {
    UseTitle("MyList");
    // const tourists = useLoaderData();
    const { user } = useContext(authContext);
    const [tourism, setTourism] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myList/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setTourism(data)
                console.log(data)
            })
    }, [])


    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/addSpot/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Tourist Spot been deleted.",
                                icon: "success"
                            })
                            const remaining = tourism.filter(cof => cof._id !== _id)
                            setTourism(remaining);
                        }

                    });
            }
        });
    }
    return (

        <div className="overflow-x-auto">
            <div>
        
            </div>
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="md:text-xl">
                        <th>Image</th>
                        <th>Spot Name</th>
                        <th>Location</th>
                        <th>Seasonality</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tourism.map(tourist =>
                        <tr
                            key={tourist._id}>
                            <td>
                                <div className="flex items-center md:gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={tourist.photo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>
                                {tourist.spot_name}

                            </td>
                            <td>{tourist.location}</td>
                            <td>{tourist.seasonality}</td>
                            <td>
                                <div className=" space-y-2 lg:space-x-2 ">
                                    <Link to={`/updated/${tourist._id}`}>
                                        <button className="btn">Update</button>
                                    </Link>

                                    <button onClick={() => handleDelete(tourist._id)} className="btn">Delete</button>
                                </div>
                            </td>
                        </tr>
                    )


                    }

                </tbody>



            </table>
        </div>
    );
};


export default MyList;

