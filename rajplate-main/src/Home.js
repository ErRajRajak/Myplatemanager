import React, { useEffect, useState } from "react";
import "react-slideshow-image/dist/styles.css";
import { firestore } from "./firebaseconfig";
import CountUp from "react-countup";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
function Home() {
    const [info, setinfo] = useState(null);

    useEffect(() => {
        firestore
            .collection("home")
            .doc("home")
            .get()
            .then((res) => {
                console.log(res.data());
                setinfo(res.data());
            });
    }, []);

    return (
        <div>
            <div class="lg:p-5 flex flex-wrap items-center justify-center text-center">
                <div
                    class="
                    lg:w-72
                    w-full
                    h-44
                    m-2
                    backimage
                    flex
                    justify-center
                    items-center
                    rounded
                "
                >
                    <span class="m-2 uppercase text-3xl text-white">
                        Eating disorders
                    </span>
                </div>
                <div
                    class="
                    lg:w-72
                    w-full
                    h-44
                    m-2
                    shadow-md
                    wieght-loss
                    flex
                    justify-center
                    items-center
                    rounded
                "
                >
                    <span class="m-2 uppercase text-3xl text-white text-center">
                        Weight management
                    </span>
                </div>
                <div
                    class="
                    lg:w-72
                    w-full
                    h-44
                    m-2
                    shadow-md
                    medical
                    flex
                    justify-center
                    items-center
                    rounded
                "
                >
                    <span class="m-2 uppercase text-3xl text-white text-center">
                        MEDIcal nutrition therapy
                    </span>
                </div>
                <div
                    class="
                    lg:w-72
                    w-full
                    h-44
                    m-2
                    shadow-md
                    keto
                    flex
                    justify-center
                    items-center
                    rounded
                "
                >
                    <span class="m-2 uppercase text-3xl text-white text-center">
                        KETO
                    </span>
                </div>
                <div
                    class="
                    lg:w-72
                    w-full
                    h-44
                    m-2
                    shadow-md
                    backimage
                    flex
                    justify-center
                    items-center
                    rounded
                "
                >
                    <span class="m-2 uppercase text-3xl text-white text-center">
                        Eating disorders
                    </span>
                </div>
                <div
                    class="
                    lg:w-72
                    w-full
                    h-44
                    m-2
                    shadow-md
                    backimage
                    flex
                    justify-center
                    items-center
                    rounded
                "
                >
                    <span class="m-2 uppercase text-3xl text-white text-center">
                        Eating disorders
                    </span>
                </div>
                <div
                    class="
                    lg:w-72
                    w-full
                    h-44
                    m-2
                    shadow-md
                    backimage
                    flex
                    justify-center
                    items-center
                    rounded
                "
                >
                    <span class="m-2 uppercase text-3xl text-white text-center">
                        Eating disorders
                    </span>
                </div>
                <div
                    class="
                    lg:w-72
                    w-full
                    h-44
                    m-2
                    shadow-md
                    backimage
                    flex
                    justify-center
                    items-center
                    rounded
                "
                >
                    <span class="m-2 uppercase text-3xl text-white text-center">
                        Eating disorders
                    </span>
                </div>
            </div>
            <div class="">
                <h1 class="text-center font-semibold text-5xl italic my-7">
                    what we've been upto...
                </h1>
            </div>
            {info ? (
                <div class="flex flex-wrap justify-center items-center">
                    <div class="shadow-lg rounded p-2 border lg:w-72 w-48 h-44 italic m-3">
                        <h1 class="text-5xl font-semibold text-center py-8">
                            <CountUp end={info?.cs} />
                        </h1>
                        <p class="text-center">clients served</p>
                    </div>
                    <div class="shadow-lg rounded p-2 border lg:w-72 w-48  h-44 italic m-3">
                        <h1 class="text-5xl font-semibold text-center py-8">
                            <CountUp end={info?.lrr} />
                        </h1>
                        <p class="text-center">lab results read</p>
                    </div>
                    <div class="shadow-lg rounded p-2 border lg:w-72 w-48 h-44 italic m-3">
                        <h1 class="text-5xl font-semibold text-center py-8">
                            <CountUp end={info?.pr} />
                        </h1>
                        <p class="text-center">periods repaired</p>
                    </div>
                    <div class="shadow-lg rounded p-2 border lg:w-72 w-48 h-44 italic m-3">
                        <h1 class="text-5xl font-semibold text-center py-8">
                            {info?.coffee}
                        </h1>
                        <p class="text-center">the coffee</p>
                    </div>
                </div>
            ) : null}

            <section>
                <h1 className="text-5xl font-semibold text-center lg:py-10">
                    ABOUT US
                </h1>
                <About />
            </section>
            <section>
                <h1 className="text-5xl font-semibold text-center uppercase lg:py-10">
                    services
                </h1>
                <Services />
            </section>
            <section>
                <h1 className="text-5xl font-semibold text-center uppercase lg:py-10">
                    contact us
                </h1>
                <Contact />
            </section>
        </div>
    );
}

export default Home;
