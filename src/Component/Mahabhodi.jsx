import React from "react";
const SectionImage = ({ src, source = "Canva" }) => (
    <div className="my-6">
        <img
            src={src}
            alt="mahabhodi temple"
            className="w-full h-[420px] object-cover rounded-lg"
        />
        <p className="text-sm text-blue-500 mt-2">
            Image Source: {source}
        </p>
    </div>
);
const Mahabhodi = () => {

    return (
        <div className="bg-gray-50 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow rounded-lg mt-12">

                {/* TITLE */}
                <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
                    Mahabodhi Temple, Bodh Gaya Bihar: The Sacred Place Where Lord Buddha Found Enlightenment
                </h1>

                {/* AUTHOR */}
                <p className="text-gray-600 mb-6">
                    By <span className="font-semibold">Kriti Singh</span>
                </p>

                {/* HERO */}
                <SectionImage src="/Image/mahabhodi-temple-01.jpg" />
                {/* INTRO */}
                <p className="text-gray-700 mb-6">
                    In the small spiritual town of Bodh Gaya, Bihar stands one of the most sacred places in the world - the Mahabodhi Temple.
                    This is the exact spot where Gautama Buddha attained enlightenment more than 2,500 years ago while meditating under the Bodhi Tree.
                </p>

                <p className="text-gray-700 mb-6">
                    Today, the temple attracts thousands of pilgrims, monks and travellers from across the world.
                    The peaceful atmosphere, ancient architecture and deep spiritual history make Mahabodhi Temple one of
                    the most meaningful places to visit in India. Whether you are a spiritual seeker, a history lover or
                    simply a curious traveller, the experience of standing at the place where Buddha achieved enlightenment
                    is truly unforgettable
                </p>

                {/* HISTORY */}
                <h2 className="text-2xl font-bold mt-10 mb-4">History/Background</h2>
                <SectionImage src="/Image/mahabhodi-temple-02.jpg" />

                <p className="text-gray-700 mb-6">
                    The story of Mahabodhi Temple begins when Prince Siddhartha Gautama came to Bodh Gaya in search of truth.
                    After years of spiritual practice, he meditated under a sacred fig tree and eventually
                    attained enlightenment, becoming the Buddha.
                </p>

                <p className="text-gray-700 mb-6">
                    In the 3rd century BCE, the great Mauryan ruler Ashoka visited this sacred site and built the first
                    temple to honour Buddha’s enlightenment.
                    Over centuries, the temple was restored and protected by different Buddhist communities.
                    Because of its immense religious and historical importance, the temple complex was recognised as
                    a World Heritage Site by UNESCO in 2002.

                </p>

                {/* ARCHITECTURE */}
                <h2 className="text-2xl font-bold mt-10 mb-4">What Makes This Place Special</h2>
                <SectionImage src="/Image/mahabhodi-temple-03.jpg" />
                <p className="text-gray-700 mb-6">What makes Mahabodhi Temple truly unique is the Bodhi Tree, located just behind the temple.
                    This sacred tree is believed to be a direct descendant of the original tree where Buddha attained enlightenment.</p>
                <p className="text-gray-700 mb-6">Another striking feature is the
                    55-metre-tall temple tower, which rises beautifully above the complex. Built in ancient Indian architectural style,
                    the temple is decorated with intricate carvings and statues that reflect centuries of devotion.
                    The entire temple complex is filled with ancient stupas,
                    prayer flags and meditation areas, creating an atmosphere that feels calm, sacred and timeless.</p>

                

                {/* TIMINGS */}
                <h2 className="text-2xl font-bold mt-10 mb-4">Things to See or Experience</h2>
                <SectionImage src="/Image/mahabhodi-temple-04.jpg" />
                <p className="text-gray-700 mb-6">
                    Visitors can spend time meditating near the Bodhi Tree, one of the most peaceful spots in the complex.
                    Inside the temple, you can see a beautiful statue of Buddha sitting in meditation posture.
                </p>

                <p className="text-gray-700 mb-6">
                    Walking around the temple reveals hundreds of small stupas built by pilgrims over centuries.
                    Many visitors also enjoy simply sitting quietly, listening to monks chanting prayers and experiencing
                    the serene environment.
                    The temple looks especially beautiful in the evening when soft lights illuminate the complex and
                    the atmosphere becomes even more peaceful.
                </p>

                {/* HOW TO REACH */}
                <h2 className="text-2xl font-bold mt-5 mb-4">How to Reach</h2>
                <SectionImage src="/Image/mahabhodi-temple-05.jpg" />
                <p className="text-gray-700 mb-6  mt-3">
                    Reaching Mahabodhi Temple is very easy as it is located in the heart of Bihar.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">

                    <li><span className="font-bold">By Air:</span> Gaya International Airport (10 km)</li>
                    <li><span className="font-bold">By Train:</span> Gaya Junction Railway Station (15 km)</li>
                    <li><span className="font-bold">By Road:</span> Bodh Gaya is also well connected by road with cities like Patna, Rajgir and Nalanda.</li>

                </ul>

                {/* BEST TIME */}
                <h2 className="text-2xl font-bold mt-10 mb-4">Best Time to Visit</h2>
                <SectionImage src="/Image/mahabhodi-temple-06.jpg" />

                <p className="text-gray-700 mb-6">
                    The best time to visit Mahabodhi Temple is between October and March,
                    when the weather is pleasant and comfortable.
                </p>
                <p>A particularly special time to visit is during “Buddha Purnima”. During this festival,
                    the temple is decorated with lights and flowers and thousands of pilgrims gather
                    to celebrate Buddha’s birth, enlightenment, and spiritual legacy.</p>

                {/* THINGS */}
                <h2 className="text-2xl font-bold mt-10 mb-6">
                    Travel Tips
                </h2>
                <SectionImage src="/Image/mahabhodi-temple-07.jpg" />
                <p>Entry to the temple complex is free for visitors. However,
                    mobile phones and electronic devices are not allowed inside the main temple
                    area and must be deposited at the entrance lockers.</p>

                <p>Visitors should dress modestly and maintain silence in
                    meditation areas to respect the spiritual environment.
                    Early morning and evening are the best times to visit if you want to experience
                    the temple in its most peaceful form.</p>

                {/* NEARBY */}
                <h2 className="text-2xl font-bold mt-10 mb-6">
                    Nearby Places to Visit
                </h2>

                <SectionImage src="/Image/mahabhodi-temple-08.jpg" />

                <div className="mt-12">
                    {/* Nearby Places Section */}
                    <h2 className="text-2xl font-semibold mb-4">Nearby Places to Visit</h2>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                        While visiting Bodh Gaya, travellers can also explore several nearby attractions.
                        The impressive Great Buddha Statue is one of the tallest Buddha statues in India
                        and a must-visit landmark.
                    </p>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

                        <div className="bg-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                            <h3 className="text-lg font-semibold mb-2">Great Buddha Statue</h3>
                            <p className="text-gray-600">
                                One of the tallest Buddha statues in India, known for its majestic presence and spiritual significance.
                            </p>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                            <h3 className="text-lg font-semibold mb-2">Thai Monastery</h3>
                            <p className="text-gray-600">
                                A beautifully designed monastery showcasing traditional Thai architecture and peaceful surroundings.
                            </p>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                            <h3 className="text-lg font-semibold mb-2">Japanese Temple</h3>
                            <p className="text-gray-600">
                                A serene temple reflecting Japanese style, offering a calm and meditative atmosphere.
                            </p>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition md:col-span-3">
                            <h3 className="text-lg font-semibold mb-2">Archaeological Museum Bodh Gaya</h3>
                            <p className="text-gray-600">
                                Home to ancient sculptures and relics that highlight the rich history and heritage of the region.
                            </p>
                        </div>

                    </div>
                    <SectionImage src="/Image/mahabhodi-temple-09.jpg" />

                    {/* Spiritual Section */}
                    <div className="border-t pt-8">
                        <h2 className="text-2xl font-semibold mb-4">
                            Spiritual Experience at Mahabodhi Temple
                        </h2>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                            The Mahabodhi Temple is not just a historical monument—it represents peace,
                            wisdom, and spiritual awakening. Standing near the sacred Bodhi Tree,
                            where Buddha attained enlightenment, visitors often feel a deep sense of
                            calm that is difficult to find elsewhere.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Whether you come for faith, history, or curiosity, a visit to Mahabodhi
                            Temple in Bodh Gaya is an experience that stays with you long after you leave.
                        </p>
                    </div>
                </div>



                <h2 className="text-2xl font-bold mt-10 mb-4"> FAQs </h2>
                <div className="space-y-4 text-gray-700">
                    <p> <b>Q1. Why is Mahabodhi Temple famous?
                    </b><br /> It is the place where Gautama Buddha attained enlightenment.
                    </p> <p>
                        <b>Q2. Is Mahabodhi Temple a UNESCO World Heritage Site?
                        </b><br /> Yes, it was declared in 2002.
                    </p> <p> <b>Q3. What is the best time to visit Mahabodhi Temple?
                    </b><br />October to March offers the most pleasant weather.
                    </p> <p> <b>Q4. What are the timings of Mahabodhi Temple?
                    </b><br /> It is usually open from 5:00 AM to 9:00 PM.
                    </p> <p> <b>Q5. Is there any entry fee for Mahabodhi Temple?</b><br /> No, entry is free for all visitors.
                    </p>
                    <p> <b>Q6. Can visitors go inside Mahabodhi Temple?
                    </b><br /> It is the place where Gautama Buddha attained enlightenment.
                    </p> <p>
                        <b>Q7. Is photography allowed inside the temple?
                        </b><br /> Photography is restricted inside but allowed in the outer premises.
                    </p> <p> <b>Q8. What is the Bodhi Tree in Mahabodhi Temple?
                    </b><br />It is the sacred tree under which Buddha attained enlightenment.
                    </p> <p> <b>Q9. Which is the main festival celebrated here?
                    </b><br /> Buddha Purnima is the most important festival.
                    </p> <p> <b>Q10. How to reach Mahabodhi Temple?
                    </b><br /> The nearest airport is Gaya and the nearest railway station is Gaya Junction.
                    </p>
                </div>


                {/* AUTHOR */}
                <div className="mt-8">
                    <h3 className="text-2xl font-semibold mb-6">About the Author</h3>

                    <div className="flex flex-col md:flex-row items-start gap-6">

                        {/* Author Image */}
                        <img
                            src="/Image/kritisingh.jpg"
                            alt="Pragya Singh"
                            className="w-44 h-44 md:w-40 md:h-40 object-cover rounded-md"
                        />

                        {/* Author Content */}
                        <p className="text-gray-800 leading-relaxed text-justify text-lg mt-4 md:mt-1">
                            <span className="font-semibold">Kriti Singh</span> started writing just to explore something new.
                            Somewhere between daily routines, she began noticing stories hidden in Delhi’s streets
                            and rooted deep in Bihar’s culture. She writes not as an expert but as someone
                            living the moments - real, simple and a little unfiltered.
                        </p>

                    </div>
                </div>




            </div>
        </div>
    );
};

export default Mahabhodi;