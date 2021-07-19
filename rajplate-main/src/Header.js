import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./images/logo.png";

function Header() {
    const location = useLocation();
    const [toggled, settoggled] = useState(false);
    console.log(toggled);

    const active = "px-5 py-3 text-red-400";
    const passive = "px-5 py-3";
    return (
        <header>
            <nav class="border-b shadow-lg lg:block hidden">
                <div class="flex justify-center items-center">
                    <div class="flex-1 text-right pt-6">
                        <Link
                            to="/"
                            class={
                                location.pathname.endsWith("/")
                                    ? active
                                    : passive
                            }
                        >
                            HOME
                        </Link>
                        <Link
                            to="#about"
                            class={
                                location.pathname.includes("about")
                                    ? active
                                    : passive
                            }
                        >
                            ABOUT
                        </Link>
                        <Link
                            to="#services"
                            class={
                                location.pathname.includes("services")
                                    ? active
                                    : passive
                            }
                        >
                            SERVICES
                        </Link>
                    </div>
                    <div class="w-44 flex justify-center">
                        <img src={logo} alt="" width="120px" />
                    </div>
                    <div class="flex-1 flex-col text-left">
                        <div class="text-right px-10">
                            <span class="fab fa-instagram px-2"></span>
                            <span class="fab fa-whatsapp px-2"></span>
                        </div>
                        <div class="text-left">
                            <Link
                                to="recipies"
                                class={
                                    location.pathname.includes("recipies")
                                        ? active
                                        : passive
                                }
                            >
                                RECIPES
                            </Link>
                            <Link
                                to="book"
                                class={
                                    location.pathname.includes("book")
                                        ? active
                                        : passive
                                }
                            >
                                BOOK YOUR DIET PLAN
                            </Link>
                            <Link
                                to="#contact"
                                class={
                                    location.pathname.includes("contact")
                                        ? active
                                        : passive
                                }
                            >
                                CONTACT
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <nav class="border-b shadow-lg lg:hidden block">
                <div class="flex justify-center items-center flex-col">
                    <div className="flex justify-between  w-full items-center">
                        <div class="px-5 flex justify-center">
                            <img src={logo} alt="" width="120px" />
                        </div>
                        <div class="text-center px-5">
                            <button onClick={() => settoggled(!toggled)}>
                                <span class="fas fa-hamburger fa-2x"></span>
                            </button>
                        </div>
                    </div>

                    <div class="flex-col text-left">
                        {toggled ? (
                            <div
                                id="navbar"
                                class="
                        
                            absolute
                            left-0
                            flex-col
                            flex
                            text-center
                           z-50
                            bg-white
                            w-full
                        "
                            >
                                <Link
                                    to="/"
                                    class={
                                        location.pathname.endsWith("/")
                                            ? active
                                            : passive
                                    }
                                >
                                    HOME
                                </Link>
                                <Link
                                    to="#about"
                                    class={
                                        location.pathname.includes("about")
                                            ? active
                                            : passive
                                    }
                                >
                                    ABOUT
                                </Link>
                                <Link
                                    to="#services"
                                    class={
                                        location.pathname.includes("services")
                                            ? active
                                            : passive
                                    }
                                >
                                    SERVICES
                                </Link>
                                <Link
                                    to="recipies"
                                    class={
                                        location.pathname.includes("recipies")
                                            ? active
                                            : passive
                                    }
                                >
                                    RECIPES
                                </Link>
                                <Link
                                    to="book"
                                    class={
                                        location.pathname.includes("book")
                                            ? active
                                            : passive
                                    }
                                >
                                    BOOK YOUR DIET PLAN
                                </Link>
                                <Link
                                    to="#contact"
                                    class={
                                        location.pathname.includes("contact")
                                            ? active
                                            : passive
                                    }
                                >
                                    CONTACT
                                </Link>
                            </div>
                        ) : null}
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
