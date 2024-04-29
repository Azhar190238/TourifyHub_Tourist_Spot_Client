import { useLoaderData  } from "react-router-dom";
import Swal from "sweetalert2";
import UseTitle from "../../Title/UseTitle";



const UpdatedSpot = () => {
    UseTitle("Updated Spot");
    const tourist= useLoaderData() ;
    const {_id, country_name, spot_name, description, seasonality,cost,time,visitors_per_year,location, photo } = tourist;
    const handleUpdatedSpot = event => {
        event.preventDefault();
        const form = event.target;
        const spot_name = form.spot_name.value;
        const country_name = form.country_name.value;
        const description = form.description.value;
        const seasonality = form.seasonality.value;
        const cost = form.cost.value;
        const time = form.time.value;
        const visitors_per_year = form.visitors_per_year.value;
        const location = form.location.value;
        const photo = form.photo.value;
        const newSpot = {country_name,  spot_name, description, seasonality,cost,time,visitors_per_year,location, photo };
        console.log(newSpot);

      // Send data to the server side
      fetch(`http://localhost:5000/addSpot/${_id}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(newSpot)
      })
      .then(res => res.json())
      .then(data => {
          console.log(data);
          if(data.modifiedCount >0){
              Swal.fire({
                  title: "Good job!",
                  text: "Tourist Spot Updated Successfully",
                  icon: "success",
                  button: "Okay!",
                });
          }
      })
   
  };

    return (

<div>
<form onSubmit={handleUpdatedSpot} className="bg-[#F4F3F0] mx-10 md:mx-20 lg:mx-40 my-10">
    <h1 className="pt-10 text-center font-sans text-2xl md:text-5xl">Updated Existing Tourist Spot</h1>
    <p className="pt-4 text-center px-10 md:px-20 lg:px-40"> You can modify the table row to display a truncated version of the description. In this modification, I have added a check it from all tourist spot </p>
    <div className="flex gap-4 md:gap-10 mx-5 md:mx-20 my-8">
        <div className="md:w-1/2">
            <p>Country Name</p>
            <input type="text" placeholder="Enter Country name" name="country_name" defaultValue={country_name} className="input input-bordered w-full" />
        </div>
        <div className="w-1/2">
            <p>Spot Name</p>
            <input type="text" placeholder="Enter Spot Name" name="spot_name" defaultValue={spot_name} className="input input-bordered w-full" />
        </div>
    </div>
    <div className="flex gap-4 md:gap-10 mx-5 md:mx-20 my-10">
        <div className="md:w-1/2">
            <p>Short Description</p>
            <input type="text" placeholder="Enter Description" name="description" defaultValue={description} className="input input-bordered w-full" />
        </div>
        <div className="w-1/2">
            <p>Seasonality</p>
            <input type="text" placeholder="Enter Seasonality" name="seasonality" defaultValue={seasonality} className="input input-bordered w-full" />
        </div>
    </div>
    <div className="flex gap-4 md:gap-10 mx-5 md:mx-20 my-10">
        <div className="md:w-1/2">
            <p>Average Cost</p>
            <input type="text" placeholder="Enter Average Cost" name="cost" defaultValue={cost} className="input input-bordered w-full" />
        </div>
        <div className="w-1/2">
            <p>Travel Time</p>
            <input type="text" placeholder="Travel Time" name="time" defaultValue={time} className="input input-bordered w-full" />
        </div>
    </div>
    <div className="flex gap-4 md:gap-10 mx-5 md:mx-20 my-10">
        <div className="md:w-1/2">
            <p>Visitors Per Year</p>
            <input type="text" placeholder="Enter Visitors Per Year " name="visitors_per_year" defaultValue={visitors_per_year} className="input input-bordered w-full" />
        </div>
        <div className="w-1/2">
            <p>Location</p>
            <input type="text" placeholder="Enter Location" name="location" defaultValue={location} className="input input-bordered w-full" />
        </div>
    </div>
    <div className="gap-10 mx-20">
        <div className="mw-full">
            <p>Photo URL</p>
            <input type="text" placeholder="Photo URL" name="photo" defaultValue={photo} className="input input-bordered w-full" />
        </div>
    </div>
    <div className="mx-20 pb-32 py-10">
        <input type="submit" value="Updated" className="btn btn-block bg-[#D2B48C]" />
    </div>
</form>
</div>
    );
};
export default UpdatedSpot;