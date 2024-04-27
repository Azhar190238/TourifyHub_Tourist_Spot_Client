

const AddSpot = () => {
    const handleAddSpot = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const country_name = form.country_name.value;
        const spot_name = form.spot_name.value;
        const description = form.description.value;
        const seasonality = form.seasonality.value;
        const cost = form.cost.value;
        const time = form.time.value;
        const visitors_per_year = form.visitors_per_year.value;
        const location = form.location.value;
        const photo = form.photo.value;
        const newCoffee = { name, email, country_name, spot_name, description, seasonality,cost,time,visitors_per_year,location, photo };
        console.log(newCoffee);
    }
    return (
        <div>
            <form onSubmit={handleAddSpot} className="bg-[#F4F3F0] mx-40 my-10">
                <h1 className="pt-10 text-center font-sans text-5xl">Add New Tourist Spot</h1>
                <p className="pt-4 text-center px-40"> Exploring a new tourist spot is like unwrapping a gift filled with surprises. May each adventure bring you joy, wonder, and unforgettable memories</p>

                <div className="flex gap-10 mx-20 my-8">
                    <div className="md:w-1/2">
                        <p>User Name</p>
                        <input type="text" placeholder="User Name" name="name" className="input input-bordered w-full" />
                    </div>
                    <div className="w-1/2">
                        <p>User Email</p>
                        <input type="email" placeholder="Enter User Email" name="email" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="flex gap-10 mx-20 my-8">
                    <div className="md:w-1/2">
                        <p>Country Name</p>
                        <input type="text" placeholder="Enter Country name" name="country_name" className="input input-bordered w-full" />
                    </div>
                    <div className="w-1/2">
                        <p>Spot Name</p>
                        <input type="text" placeholder="Enter Spot Name" name="spot_name" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="flex gap-10 mx-20 my-10">
                    <div className="md:w-1/2">
                        <p>Short Description</p>
                        <input type="text" placeholder="Enter Description" name="description" className="input input-bordered w-full" />
                    </div>
                    <div className="w-1/2">
                        <p>Seasonality</p>
                        <input type="text" placeholder="Enter Seasonality" name="seasonality" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="flex gap-10 mx-20 my-10">
                    <div className="md:w-1/2">
                        <p>Average Cost</p>
                        <input type="text" placeholder="Enter Average Cost" name="cost" className="input input-bordered w-full" />
                    </div>
                    <div className="w-1/2">
                        <p>Travel Time</p>
                        <input type="text" placeholder="Travel Time" name="time" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="flex gap-10 mx-20 my-10">
                    <div className="md:w-1/2">
                        <p>Visitors Per Year</p>
                        <input type="text" placeholder="Enter Visitors Per Year " name="visitors_per_year" className="input input-bordered w-full" />
                    </div>
                    <div className="w-1/2">
                        <p>Location</p>
                        <input type="text" placeholder="Enter Location" name="location" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="gap-10 mx-20">
                    <div className="mw-full">
                        <p>Photo URL</p>
                        <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="mx-20 pb-32 py-10">
                    <input type="submit" value="Add Spot" className="btn btn-block bg-[#D2B48C]" />
                </div>
            </form>
        </div>
    );
};

export default AddSpot;