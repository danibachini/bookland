'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Form () {
    const [buttonName, setButtonName] = useState('Genre');
    const [text, setText] = useState('');
    const router = useRouter();
    
    // send the data to route
    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`/api/story`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // set the content type to JSON
            },
            body: JSON.stringify({ buttonName, text }),
            cache: 'force-cache',
        });
            
        const result = await response.json();
        console.log("Response from server:", result);

        if (result.message == "Success") {
            console.log("inside success message");
            window.localStorage.setItem("reqResult", JSON.stringify(result.reqResult.replace(/(\r\n|\n|\r)/gm, "").replace("  \\", "\\")));  // replace is needed due to how the response comes from chatgpt's API
            router.push("/books");
   
        } else {
            console.log("got into the if Error");
            // return err;
        }
    };

    return (
    <>
        <form onSubmit={handleSubmit}>
            <div className="content-center max-w-md m-auto ">
                {/* space-y-4 */}

                {/* dropdown button component */}
                <Dropdown buttonName={buttonName} setButtonName={setButtonName}/>

                <div className="form-control ">
                    {/* input for user type the story they want to read */}
                    <textarea 
                        id="textBox" 
                        className="textarea textarea-bordered h-36 text-orange-200 bg-orange-950 placeholder-orange-800/40" 
                        maxLength={100} 
                        placeholder="What kind of story would you like to read?  e.g. 'A person solving the mystery of the Illuminati'" 
                        onChange={e => setText(e.target.value)}
                        required>
                    </textarea>
                    <label className="label">
                        <span className="label-text-alt"/>
                        <span className="label-text-alt  text-orange-200 font-light">{text.length}/100</span>
                    </label>
                </div>

                {/* submit form button */}
                <div className="form-control">
                    <button className="btn bg-orange-950 hover:bg-orange-200 text-orange-200 hover:text-orange-950 mt-6"  type="submit">Submit</button>
                </div>

                {/* ===================== */}
                {/* ADD A LOADING SPINNER */}
                {/* ===================== */}

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
            href="javascript:void(0);" 
            className='menu-item p-2 hover:bg-orange-900 rounded' 
            onClick={() => setButtonName(props.value) && props.goToMenu && setActiveMenu(props.goToMenu)}>
                {props.children}
            </a>

        )
    }

    return (
        // dropdown options
        <div className="space-x-10 md:space-x-20">
            <div className='dropdown dropdown-bottom columns-1'>
                <label tabIndex={0} className="btn m-1 w-52 text-orange-200 bg-orange-950 hover:bg-orange-900">{buttonName}</label>
                    <div className='menu' onClick={() => setOpen(!open)}>
                        <ul tabIndex={0} className="dropdown-content menu -mt-4 p-2 shadow rounded-box w-52 text-orange-200 bg-orange-950">
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