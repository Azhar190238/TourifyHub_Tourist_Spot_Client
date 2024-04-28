
const Country = ({country}) => {
    const {country_name, photo}= country;
    return (
<div className=" relative
 w-96  shadow-xl image-full p-2">
  <figure><img src={photo} alt="Shoes" /></figure>
  <div className="">
    <h2 className="card-title  text-4xl justify-center text-white absolute top-20 left-24">{country_name}</h2>
    
    <div className="card-actions justify-center">
      <button className="btn btn-primary absolute text-center top-40">Explore all the tourist spot</button>
    </div>
  </div>
</div>
    );
};

export default Country;