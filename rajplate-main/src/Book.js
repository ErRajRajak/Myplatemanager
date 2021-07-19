import React, { useRef, useState } from "react";
import { firestore } from "./firebaseconfig";
function Book() {
    const [book, setbook] = useState({});
    let nameref = useRef();
    let email = useRef();
    let weight = useRef();
    let age = useRef();
    let height = useRef();
    let mediStatus = useRef();
    let ff = useRef();
    let fod = useRef();

    const savebooking = (e) => {
        e.preventDefault();
        if (nameref.current.value.length < 3) {
            return alert("need name");
        } else if (email.current.value.length < 4) {
            return alert("need email");
        } else if (weight.current.value === "") {
            return alert("need weight");
        } else if (age.current.value === "") {
            return alert("need age");
        } else if (height.current.value === "") {
            return alert("need height");
        } else if (mediStatus.current.value === "") {
            return alert("need medical status");
        } else {
            setbook({
                ...book,
                name: nameref.current.value,
                email: email.current.value,
                weight: weight.current.value,
                age: age.current.value,
                height: height.current.value,
                mediStatus: mediStatus.current.value,
            });

            firestore
                .collection("bookings")
                .add(book)
                .then((res) => {
                    alert("your booking is submitted successfully");
                })
                .catch((e) => {
                    alert(e.messge);
                });
        }
    };
    return (
        <div className="p-5 flex flex-col  justify-center items-center capitalize">
            <p className="text-3xl font-semibold text-center py-10">
                Book Your Diet Plan
            </p>

            <form
                onSubmit={(e) => savebooking(e)}
                className="lg:w-2/3 border shadow-lg p-3 rounded"
            >
                <p className="px-2">
                    name <span className="text-red-600">*</span>
                </p>
                <input
                    ref={nameref}
                    type="text"
                    placeholder="name"
                    className="h-12 border rounded w-full appearance-none px-2 py-1 lg:w-72 m-2"
                />
                <p className="px-2">
                    email <span className="text-red-600">*</span>
                </p>

                <input
                    ref={email}
                    type="text"
                    placeholder="email"
                    className="h-12 border rounded w-full appearance-none px-2 py-1 lg:w-72 m-2"
                />
                <div className="py-4 px-2">
                    <p className="">Gender</p>
                    <input
                        type="radio"
                        name="gender"
                        onChange={() => setbook({ ...book, gender: "male" })}
                    />
                    Male &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <input
                        type="radio"
                        name="gender"
                        onChange={() => setbook({ ...book, gender: "female" })}
                    />
                    Female
                </div>
                <input
                    type="text"
                    ref={weight}
                    placeholder="weight"
                    className="h-12 border rounded w-full appearance-none px-2 py-1 lg:w-72 m-2"
                />
                <input
                    type="text"
                    ref={age}
                    placeholder="age"
                    className="h-12 border rounded w-full appearance-none px-2 py-1 lg:w-72 m-2"
                />
                <input
                    type="text"
                    ref={height}
                    placeholder="height "
                    className="h-12 border rounded w-full appearance-none px-2 py-1 lg:w-72 m-2"
                />
                <input
                    type="text"
                    ref={mediStatus}
                    placeholder="currentlly on any medication "
                    className="h-12 border rounded w-full appearance-none px-2 py-1 lg:w-72 m-2"
                />
                <div className="p-2">
                    <p className=" font-semibold">
                        how do you come to know about me ?
                        <span className="text-red-600">*</span>
                    </p>
                    <input
                        type="radio"
                        name="know"
                        onChange={() =>
                            setbook({ ...book, hykab: "instagram" })
                        }
                    />
                    <span className="pr-10">instagram</span>
                    <input
                        type="radio"
                        name="know"
                        onChange={() =>
                            setbook({ ...book, hykab: "client referal" })
                        }
                    />
                    <span className="">Client referal</span>
                </div>
                <div className="p-2">
                    <p className=" font-semibold">
                        have you been in gym before ?
                        <span className="text-red-600">*</span>
                    </p>
                    <input
                        type="radio"
                        name="gymbefore"
                        onChange={() => setbook({ ...book, beenGym: "yes" })}
                    />
                    <span className="pr-10">yes</span>
                    <input
                        type="radio"
                        name="gymbefore"
                        onChange={() => setbook({ ...book, beenGym: "no" })}
                    />
                    <span className="">no</span>
                </div>
                <div className="p-2">
                    <p className="font-semibold">Membership type</p>
                    <input
                        type="radio"
                        name="gym"
                        onChange={() =>
                            setbook({ ...book, membership: "1 month 3000 Rs" })
                        }
                    />
                    <span className="pr-10">1 month 3000 Rs</span>
                    <input
                        type="radio"
                        name="gym"
                        onChange={() =>
                            setbook({ ...book, membership: "2 month 5000 Rs" })
                        }
                    />
                    <span className="pr-10">2 month 5000 Rs</span>
                    <input
                        type="radio"
                        name="gym"
                        onChange={() =>
                            setbook({ ...book, membership: "3 month 7000 Rs" })
                        }
                    />
                    <span className="pr-10">3 month 7000 Rs</span>
                    <input
                        type="radio"
                        name="gym"
                        onChange={() =>
                            setbook({
                                ...book,
                                membership:
                                    "only phone consultation : 500Rs(only per half an hour)",
                            })
                        }
                    />
                    <span className="pr-10">
                        only phone consultation : 500Rs(only per half an hour)
                    </span>
                </div>
                <div className="p-2">
                    <p className="font-semibold">
                        Dietry habits <span className="text-red-600">*</span>
                    </p>
                    <p className="py-2">
                        <input
                            type="radio"
                            name="diet"
                            className=""
                            onChange={() =>
                                setbook({
                                    ...book,
                                    diet: "Vegetarian",
                                })
                            }
                        />
                        Vegetarian
                    </p>
                    <p className="py-2">
                        <input
                            type="radio"
                            name="diet"
                            className=""
                            onChange={() =>
                                setbook({
                                    ...book,
                                    diet: "non-veg",
                                })
                            }
                        />
                        Non-Vegetarian
                    </p>
                    <p className="py-2">
                        <input
                            type="radio"
                            name="diet"
                            className=""
                            onChange={() =>
                                setbook({
                                    ...book,
                                    diet: "non-veg (but egg)",
                                })
                            }
                        />
                        Non-Vegetarian (but no egg)
                    </p>
                    <p className="py-2">
                        <input
                            type="radio"
                            name="diet"
                            className=""
                            onChange={() =>
                                setbook({
                                    ...book,
                                    diet: "veg with egg",
                                })
                            }
                        />
                        Vegetarian (but consumes egg)
                    </p>
                    <p className="py-2">
                        <input
                            type="radio"
                            name="diet"
                            className=""
                            onChange={() =>
                                setbook({
                                    ...book,
                                    diet: "Vegetarian but no egg",
                                })
                            }
                        />
                        Vegetarian (but consumes egg)
                    </p>
                    <p className="py-2">
                        <input
                            type="radio"
                            name="diet"
                            className=""
                            onChange={() =>
                                setbook({
                                    ...book,
                                    diet: "other",
                                })
                            }
                        />
                        other
                    </p>
                </div>
                <div className="p-2">
                    <p className="font-semibold">
                        current activity level
                        <span className="text-red-600">*</span>
                    </p>
                    <p className="py-2">
                        <input
                            type="radio"
                            name="al"
                            className=""
                            onChange={() =>
                                setbook({
                                    ...book,
                                    al: "sedantry (not really active)",
                                })
                            }
                        />
                        sedantry (not really active)
                    </p>
                    <p className="py-2">
                        <input
                            type="radio"
                            name="al"
                            className=""
                            onChange={() =>
                                setbook({
                                    ...book,
                                    al: "low activity (light exercise or walking once a week)",
                                })
                            }
                        />
                        low activity (light exercise or walking once a week)
                    </p>
                    <p className="py-2">
                        <input
                            type="radio"
                            name="al"
                            className=""
                            onChange={() =>
                                setbook({
                                    ...book,
                                    al: " moderate activity (workout 3- 4 times a week)",
                                })
                            }
                        />
                        moderate activity (workout 3- 4 times a week)
                    </p>
                </div>
                <div className="p-2">
                    <p className="font-semibold">
                        Goal <span className="text-red-600">*</span>
                    </p>
                    <p className="py-2">
                        <input
                            type="radio"
                            name="goal"
                            className=""
                            onChange={() =>
                                setbook({
                                    ...book,
                                    goal: " loss weight",
                                })
                            }
                        />
                        Lose weight
                    </p>
                    <p className="py-2">
                        <input
                            type="radio"
                            name="goal"
                            className=""
                            onChange={() =>
                                setbook({
                                    ...book,
                                    al: " improve health",
                                })
                            }
                        />
                        improve health
                    </p>
                    <p className="py-2">
                        <input
                            type="radio"
                            name="goal"
                            className=""
                            onChange={() =>
                                setbook({
                                    ...book,
                                    goal: " improve sleep",
                                })
                            }
                        />
                        improve sleep
                    </p>
                    <p className="py-2">
                        <input
                            type="radio"
                            name="goal"
                            className=""
                            onChange={() =>
                                setbook({
                                    ...book,
                                    goal: " improve skin",
                                })
                            }
                        />
                        improve skin
                    </p>
                    <p className="py-2">
                        <input
                            type="radio"
                            name="goal"
                            className=""
                            onChange={() =>
                                setbook({
                                    ...book,
                                    goal: " maintain weight",
                                })
                            }
                        />
                        maintain weight
                    </p>
                    <p className="py-2">
                        <input
                            type="radio"
                            name="goal"
                            className=""
                            onChange={() =>
                                setbook({
                                    ...book,
                                    goal: " other",
                                })
                            }
                        />
                        other
                    </p>
                </div>
                <div className="p-2">
                    <p className="font-semibold">Current sleeping pattern</p>
                    <p className="py-2">
                        <input
                            type="radio"
                            name="sp"
                            className=""
                            onChange={() =>
                                setbook({
                                    ...book,
                                    sp: " sleep by 10 AM",
                                })
                            }
                        />
                        sleep by 10 AM
                    </p>
                    <p className="py-2">
                        <input
                            type="radio"
                            name="sp"
                            className=""
                            onChange={() =>
                                setbook({
                                    ...book,
                                    sp: " sleep by 12 AM",
                                })
                            }
                        />
                        sleep by 12 AM
                    </p>
                    <p className="py-2">
                        <input
                            type="radio"
                            name="sp"
                            className=""
                            onChange={() =>
                                setbook({
                                    ...book,
                                    sp: " sleep by 2 AM",
                                })
                            }
                        />
                        sleep by 2 AM
                    </p>
                    <p className="py-2">
                        <input
                            type="radio"
                            name="sp"
                            className=""
                            onChange={() =>
                                setbook({
                                    ...book,
                                    sp: " no time to sleep late night owl",
                                })
                            }
                        />
                        no time to sleep late night owl
                    </p>
                </div>

                <p className="font-semibold">
                    Favourite Food <span className="text-red-600">*</span>
                </p>
                <input
                    type="text"
                    ref={ff}
                    placeholder="Favourite food"
                    className="h-12 border rounded w-full appearance-none px-2 py-1 lg:w-72 m-2"
                />
                <p className="font-semibold">
                    Food you would hate to eat on diet plan
                    <span className="text-red-600">*</span>
                </p>
                <input
                    type="text"
                    ref={fod}
                    placeholder="name a food"
                    className="h-12 border rounded w-full appearance-none px-2 py-1 lg:w-72 m-2"
                />
                <br />
                <div className="text-center">
                    <button
                        type="submit"
                        className="h-12 w-44 mt-10 bg-blue-600 text-white "
                    >
                        Apply
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Book;
