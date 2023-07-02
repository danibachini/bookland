'use client';

import { useState, useEffect } from 'react';


export default function Form () {
    const [buttonName, setButtonName] = useState('Genre');
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(buttonName, text);
    }

    return (
    <>
        <form onSubmit={handleSubmit} >
            <div className="content-center max-w-md m-auto space-y-6">

                <Dropdown buttonName={buttonName} setButtonName={setButtonName}/>

                <div className="form-control ">
                    <label id="label-text" className="label">
                        What kind of story would you like to read?
                    </label>
                    <textarea id="textBox" 
                        maxLength={100} 
                        onChange={(e) => setText(e.target.value)}
                        className="textarea textarea-bordered h-24 text-neutral-100" 
                        placeholder="A person solving the mystery of the Illuminati"/>
                    <label className="label justify-end label-text-alt">
                        {text.length}/100
                    </label>
                </div>

                <div className="form-control">
                    <button className="btn hover:text-neutral-100" type="submit">Submit</button>
                </div>

            </div>
        </form>   
    </>
    )
}

function Dropdown({ buttonName, setButtonName }) {
    const [open, setOpen] = useState(false);

    const  DropdownItem= ({icon, value}) =>
        <li>
            <button className='menu-item' onClick={() => {setButtonName(value);setOpen(!open)}}>
                {icon} {value}
            </button>
        </li>

    return (
        <div className='dropdown dropdown-bottom columns-1 pt-10 space-x-10 md:space-x-20'>
            <label tabIndex={0} className="btn m-1 w-52 text-neutral-100">{ buttonName }</label>
            <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 text-neutral-100" >
                <DropdownItem value="Fiction" icon="🛸"/>
                <DropdownItem value="Nonfiction" icon="🧑‍🎓"/>
                <DropdownItem value="Romance novel" icon="💑"/>
                <DropdownItem value="Horror" icon="🔪"/>
                <DropdownItem value="Mystery" icon="🔍"/>
                <DropdownItem value="Biography" icon="⏳"/>
                <DropdownItem value="Poetry" icon="🎭"/>
            </ul>
        </div>
    )
}