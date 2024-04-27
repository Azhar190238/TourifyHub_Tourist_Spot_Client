

const ClientQuestion = () => {
    return (
        <div>
            <div className="text-center mt-16 mb-10 space-y-4 p-8">
                <h2 className="text-3xl font-extrabold">Clients Question</h2>
                <p className="text-text-body">Apr 14, 2016 · 90 Questions to Ask to Improve Your Client Relationships Previous<br />Marketing (Performance & Goals 1)</p>
            </div>
            <div className="border-2 rounded-xl">
                <div className="flex flex-col lg:flex-row gap-5 p-8">
                    <div>
                        <img className="lg:h-full" src="images/11.png" alt="" />
                    </div>
                    <div>
                        <div className="collapse collapse-plus">
                            <input type="radio" name="my-accordion-3" checked="checked" />
                            <div className="collapse-title text-xl font-bold">
                            What is Tourism?
                            </div>
                            <div className="collapse-content">
                                <p> Tourism is a social, cultural and economic phenomenon which entails the movement of people to countries or places
                                 outside their usual environment for personal or business/professional purposes</p>
                            </div>
                            <div className="w-full h-[1px] bg-[#13131833]"></div>
                        </div>

                        <div className="collapse collapse-plus ">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-bold">
                            Definition of Tourist and Excursionist?
                            </div>
                            <div className="collapse-content">
                                <p>
                                Building on the definition of tourism, a commonly accepted description of a tourist is “someone who travels at least 80 km from his or her home for at least 24 hours, for business or leisure or other reasons” (LinkBC, 2008, p.8).
                                </p>
                            </div>
                            <div className="w-full h-[1px] bg-[#13131833]"></div>
                        </div>

                        <div className="collapse collapse-plus">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-bold">
                            Travel, and Hospitality: What are the Differences?
                            </div>
                            <div className="collapse-content">
                                <p>
                                It is common to confuse the terms tourism, travel, and hospitality or to define them as the same thing. While tourism is the all-encompassing umbrella term for the activities and industry that create the tourist experience
                                </p>
                            </div>
                            <div className="w-full h-[1px] bg-[#13131833]"></div>
                        </div>
                        <div className="collapse collapse-plus">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-bold">
                            What are the benefits of tourism??


                            </div>
                            <div className="collapse-content">
                                <p>
                                Tourism generates income and employment opportunities for local communities through spending on accommodation, food, transportation, and attractions.

                                </p>
                            </div>
                            <div className="w-full h-[1px] bg-[#13131833]"></div>
                        </div>
                        <div className="collapse collapse-plus ">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-bold">
                            What are the challenges of tourism?


                            </div>
                            <div className="collapse-content">
                                <p>
                                Popular destinations may face overcrowding, environmental degradation, and strain on resources due to excessive tourist numbers.

                                </p>
                            </div>
                            <div className="w-full h-[1px] bg-[#13131833]"></div>
                        </div>
                        <div className="collapse collapse-plus">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-bold">
                            How can tourism be made more sustainable?



                            </div>
                            <div className="collapse-content">
                                <p>
                                Sustainable tourism aims to minimize negative impacts on the environment, culture, and economy while maximizing benefits for local communities and preserving resources for future generations.
                                </p>
                            </div>
                            <div className="w-full h-[1px] bg-[#13131833]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientQuestion;