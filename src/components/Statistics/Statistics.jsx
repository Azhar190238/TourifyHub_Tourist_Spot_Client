

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
            <div className="radial-progress text-primary rotate-180" style={{ "--value": 87 }} role="progressbar"><span
                className="rotate-180">87%</span></div>
            <h3 className="text-blacked font-semibold">Prayer Facility</h3>
            <p className="text-text-body">We have 87% prayer facility more <br /> than other club. 95%.</p>
        </div>
        <div className="text-center space-y-3">
            <div className="radial-progress text-green-500 rotate-180" style={{ "--value": 95 }} role="progressbar"> <span
                className="rotate-180">95%</span></div>
            <h3 className="text-blacked font-semibold">Experienced Coach</h3>
            <p className="text-text-body">Opportunities for coaches to network<br />
                with other coaches.</p>
        </div>
        <div className="text-center space-y-3">
            <div className="radial-progress text-blue-700 rotate-180" style={{ "--value": 90 }} role="progressbar"><span
                className="rotate-180">90%</span></div>
            <h3 className="text-blacked font-semibold">Senior Player</h3>
            <p className="text-text-body">Senior hockey refers to amateur <br />
                ice hockey competition.</p>
        </div>
        <div className="text-center space-y-3">
            <div className="radial-progress text-accent rotate-180" style={{ "--value": 80 }} role="progressbar"><span
                className="rotate-180">80%</span></div>
            <h3 className="text-blacked font-semibold">Training Ground</h3>
            <p className="text-text-body">You can start training<br />
                to take your game.</p>
        </div>
    </div>
</section>

        </div>
    );
};

export default Statistics;