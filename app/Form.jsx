'use client';

import { useState } from 'react';

export default function Form () {
    const [buttonName, setButtonName] = useState('Genre');
    const [text, setText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`/api/story`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // Set the content type to JSON
            },
            body: JSON.stringify({ buttonName, text }),
        });

        const result = await response.json();
        console.log("Success:", result);

        console.log("Data sent to API: ", JSON.stringify({ buttonName, text }));
    };

    return (
    <>
        <form onSubmit={handleSubmit}>
            <div className="content-center max-w-md m-auto space-y-6">

                {/* dropdown button component */}
                <Dropdown buttonName={buttonName} setButtonName={setButtonName}/>

                <div className="form-control ">
                    {/* input for user type the story they want to read */}
                    <textarea 
                        id="textBox" 
                        className="textarea textarea-bordered h-36 text-neutral-100" 
                        maxLength={100} 
                        placeholder="What kind of story would you like to read?  e.g. 'A person solving the mystery of the Illuminati'" 
                        onChange={e => setText(e.target.value)}
                        required>
                    </textarea>
                    <label className="label">
                        <span className="label-text-alt"/>
                        <span className="label-text-alt font-semibold text-gray-900">{text.length}/100</span>
                    </label>
                </div>

                {/* submit form button */}
                <div className="form-control">
                    <button className="btn hover:text-neutral-100" type="submit">Submit</button>
                </div>

            </div>
        </form>   
    </>
    )
}

function Dropdown({ buttonName, setButtonName }) {
    const [activeMenu, setActiveMenu] = useState('main'); 
    const [open, setOpen] = useState(false);

    function DropdownItem(props) {
        return (
            // apply to each dropdown option. changes the name of the button according to the chosen option and closes the dropdown
            <a 
            href="#" 
            className='menu-item p-2 hover:bg-slate-700 rounded' 
            onClick={() => setButtonName(props.value) && props.goToMenu && setActiveMenu(props.goToMenu)}>
                {props.children}
            </a>
        )
    }

    return (
        // dropdown options
        <div className="pt-10 space-x-10 md:space-x-20">
            <div className='dropdown dropdown-bottom columns-1'>
                <label tabIndex={0} className="btn m-1 w-52 text-neutral-100">{buttonName}</label>
                    <div className='menu' onClick={() => setOpen(!open)}>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-neutral-100">
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