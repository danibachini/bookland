'use client';

import { useState, useEffect } from 'react';


export default function Form () {
    const [count, setCount] = useState(0);

    return (
    <>
        <form action="">
            <div className="content-center max-w-md m-auto space-y-6">

                <Dropdown/>

                <div className="form-control ">
                    <label className="label">
                        <span id="label-text">What kind of story would you like to read?</span>
                    </label>
                    <textarea id="textBox" className="textarea textarea-bordered h-24 text-neutral-100" maxLength={100} placeholder="A person solving the mystery of the Illuminati"></textarea>
                    <label className="label">
                    <span className="label-text-alt"/>
                    <span className="label-text-alt">{count}/100</span>
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

function Dropdown() {
    const [activeMenu, setActiveMenu] = useState('main'); 
    const [open, setOpen] = useState(false);
    const [buttonName, setButtonName] = useState('Genre');

    function DropdownItem(props) {
        return (
            <a href="#" className='menu-item' onClick={() => setButtonName(props.value) && props.goToMenu && setActiveMenu(props.goToMenu)}>
                {props.children}
            </a>
        )
    }

    return (
        <div className="pt-10 space-x-10 md:space-x-20">
            <div className='dropdown dropdown-bottom columns-1'>
                <label tabIndex={0} className="btn m-1 w-52 text-neutral-100">{ buttonName }</label>
                    <div className='menu' onClick={() => setOpen(!open)}>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-neutral-100" >
                            <DropdownItem value="Fiction">🛸 Fiction</DropdownItem>
                            <DropdownItem value="Nonfiction">🧑‍🎓 Nonfiction</DropdownItem>
                            <DropdownItem value="Romance novel">💑 Romance novel</DropdownItem>
                            <DropdownItem value="Horror">🔪 Horror</DropdownItem>
                            <DropdownItem value="Mystery">🔍 Mystery</DropdownItem>
                            <DropdownItem value="Biography">⏳ Biography</DropdownItem>
                            <DropdownItem value="Poetry">🎭 Poetry</DropdownItem>
                        </ul>
                    </div>
            </div>
        </div>
    )
}