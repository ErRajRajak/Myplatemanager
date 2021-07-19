import React from "react";
import blacklogo from "./images/blacklogo.png";
function Footer() {
    return (
        <footer class="bg-gray-800 mt-10">
            <div class="p-5 flex flex-wrap justify-center">
                <div class="p-10">
                    <img src={blacklogo} width="200px " alt="" />
                </div>
                <div class="text-white p-10 w-96 flex flex-col text-left">
                    <p class="text-2xl">Useful Links</p>
                    <ul>
                        <li>Home</li>
                        <li>Book Your Diet Plan</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div class="text-white p-10">
                    <p class="text-2xl py-2">Contact Us</p>
                    <input
                        type="text"
                        placeholder="email"
                        className="bg-white h-12 rounded w-full px-2 m-2"
                    />
                    <input
                        type="text"
                        placeholder="message"
                        className="bg-white h-12 rounded w-full px-2 m-2"
                    />

                    <button className="bg-blue-700 rounded h-12 w-32 m-2">
                        Send
                    </button>
                </div>
            </div>
            <p class="text-center text-sm text-white py-5">
                copyright @2007 belongs to
            </p>
        </footer>
    );
}

export default Footer;
