

const Statistics = () => {
    return (
        <div>
            <section>
    {/* <div className="w-full h-[1px] bg-[#13131833]"></div> */}
    <div className="text-center mt-8 space-y-4">
        <h2 className="text-3xl font-extrabold">Tourism trends and Ageing </h2>
        <p className="text-text-body">Tourism Trends and Ageing" refers to the intersection of two significant
        <br /> topics: the evolving trends in tourism and the impact of <br />
         ageing populations on the tourism industry </p>
    </div>
    <div className="flex flex-col lg:flex-row justify-center gap-8 mt-14">
        <div className="text-center space-y-3">
            <div className="radial-progress text-primary rotate-180" style={{ "--value": 15 }} role="progressbar"><span
                className="rotate-180">15%</span></div>
            <h3 className="text-blacked font-semibold">Child <br />
            (Under 18 years old)</h3>
            <p className="text-text-body">Common types of travel: <br /> Family vacations, school trips, and visiting relatives.</p>
        </div>
        <div className="text-center space-y-3">
            <div className="radial-progress text-green-500 rotate-180" style={{ "--value": 30 }} role="progressbar"> <span
                className="rotate-180">30%</span></div>
            <h3 className="text-blacked font-semibold">Young Adult <br /> (18-34 years old)</h3>
            <p className="text-text-body">Common types of travel: Backpacking trips, adventure travel,  <br />  solo travel, and weekend getaways with friends.</p>
        </div>
        <div className="text-center space-y-3">
            <div className="radial-progress text-blue-700 rotate-180" style={{ "--value": 40 }} role="progressbar"><span
                className="rotate-180">40%</span></div>
            <h3 className="text-blacked font-semibold">Adult <br />(35-64 years old)</h3>
            <p className="text-text-body">Common types of travel: <br /> Family vacations, business travel, cultural trips,  and beach holidays.</p>
        </div>
        <div className="text-center space-y-3">
            <div className="radial-progress text-accent rotate-180" style={{ "--value": 15 }} role="progressbar"><span
                className="rotate-180">15%</span></div>
            <h3 className="text-blacked font-semibold">Older Adult <br /> (65 years old and above)</h3>
            <p className="text-text-body">Common types of travel:  <br />  Retirement travel, <br /> senior tours, cruises, and visiting grandchildren.</p>
        </div>
    </div>
</section>

        </div>
    );
};

export default Statistics;