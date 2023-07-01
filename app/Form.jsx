'use client';

import { useState } from 'react';

export default function Form () {
    const [count, setCount] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [buttonName, setButtonName] = useState('Genre');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setButtonName(option);
        setDropdownOpen(false);   // Close the dropdown after selecting an option
        console.log("inside handleOptionsSelect");
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
        console.log("inside toggleDropdown");
    };

    return (
    <>
        <form action="">
            <div className="content-center max-w-md m-auto space-y-6">

                <div className="pt-10 space-x-10 md:space-x-20">
                    <div className="dropdown dropdown-bottom columns-1">
                        <label tabIndex={0} className="btn m-1 w-52 text-neutral-100" onClick={toggleDropdown}>{buttonName}</label>
                        <ul tabIndex={0} className={`dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-neutral-300 ${dropdownOpen ? 'open' : ''}`}>
                            <li><a onClick={() => handleOptionSelect('Fiction')}>🛸  Fiction</a></li>
                            <li><a onClick={() => handleOptionSelect('Nonfiction')}>🧑‍🎓  Nonfiction</a></li>
                            <li><a onClick={() => handleOptionSelect('Romance novel')}>💑  Romance novel</a></li>
                            <li><a onClick={() => handleOptionSelect('Horror')}>🔪  Horror</a></li>
                            <li><a onClick={() => handleOptionSelect('Mystery')}>🔍  Mystery</a></li>
                            <li><a onClick={() => handleOptionSelect('Biography')}>⏳  Biography</a></li>
                            <li><a onClick={() => handleOptionSelect('Poetry')}>🎭  Poetry</a></li>
                        </ul>
                    </div>
                </div>

                <div className="form-control ">
                    <label className="label">
                        <span id="label-text">What kind of story would you like to read?</span>
                    </label>
                    <textarea id="textBox" className="textarea textarea-bordered h-24 text-neutral-100" maxLength={100} placeholder="A person solving the mystery of the Illuminati" onChange={e => setCount(e.target.value.length)}></textarea>
                    <label className="label">
                    <span className="label-text-alt"/>
                    <span className="label-text-alt">{count}/100</span>
                    </label>
                </div>

            </div>
        </form>   
    </>
    )
}