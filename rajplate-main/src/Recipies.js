import React, { useEffect, useState } from "react";
import { firestore } from "./firebaseconfig";
function Recipies() {
    const [data, setdata] = useState(null);
    const [recipie, setrecipie] = useState(null);

    useEffect(() => {
        firestore
            .collection("recipies")
            .get()
            .then((res) => {
                var a = [];
                res.docs.forEach((r) => {
                    a.push(r.data());
                });
                setdata(a);
            });
    }, []);

    return (
        <div>
            <div className="p-5 shadow-lg border-2 m-5">
                {data?.map((r, index) => (
                    <div key={index} className="m-2 shadow-lg rounded p-2">
                        <span className="p-2 font-semibold text-lg">
                            {r.name}
                        </span>
                        <button
                            className="bg-blue-500 text-white py-1 px-2 mx-3"
                            onClick={() => setrecipie(r)}
                        >
                            view
                        </button>
                    </div>
                ))}
            </div>
            {recipie ? (
                <div class="p-5 shadow-lg border-2 rounded m-5">
                    <div class="grid grid-cols-1 lg:grid-cols-2">
                        <div class="p-2">
                            <h1
                                class="
                    text-4xl
                    font-bold
                    text-center
                    uppercase
                    text-gray-600
                "
                            >
                                {recipie?.name}
                            </h1>
                            <p class="text-center italic">
                                recipie by {recipie?.by}
                            </p>
                            <div
                                class="
                    flex
                    justify-center
                    items-center
                    text-gray-500 text-sm
                    py-3
                "
                            >
                                <span>
                                    course:
                                    <span class="font-bold text-black px-2">
                                        Main
                                    </span>
                                </span>
                                <span>
                                    difficulty:
                                    <span class="font-bold text-black px-2">
                                        easy
                                    </span>
                                </span>
                            </div>
                            <p class="text-yellow-800">BASIL PESTO</p>
                            <ul class="list-disc pl-10">
                                {recipie?.ingredients.map((i, index) => (
                                    <li key={index}>{i}</li>
                                ))}
                            </ul>
                        </div>
                        <div class="p-2">
                            <p class="text-yellow-800 mt-10 text-lg uppercase">
                                Directions
                            </p>
                            <ul class="list-disc pl-10">
                                {recipie?.directions.map((i, index) => (
                                    <li key={index}>{i}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default Recipies;
