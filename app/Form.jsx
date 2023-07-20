'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Form () {
    const [buttonName, setButtonName] = useState('Genre');
    const [text, setText] = useState('');
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    
    // send the data to route
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // set the loading spinner once the button is clicked
        localStorage.clear();  // make sure localstorage is empty so it doesn't use old data in case the API fails

        const response = await fetch(`/api/story`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // set the content type to JSON
            },
            body: JSON.stringify({ buttonName, text }),
            cache: 'force-cache',
        });
            
        const result = await response.json();

        // if API works properly, save the response in localstorage
        if (result.message == "Success") {
            window.localStorage.setItem("reqResult", JSON.stringify(result.reqResult.replace(/(\r\n|\n|\r)/gm, "").replace("  \\", "\\")));  // replace is needed due to how the response comes from chatgpt's API
        }

        router.push("/books");  // redirects user to page /books
        
    };

    return (
    <>
        <form onSubmit={handleSubmit}>

            {isLoading ? "" : (
                <div className="content-center max-w-md m-auto ">
                    <h1 className="text-center text-xl pt-16 pb-3 sm:text-3xl text-orange-200 font-semibold">Find the story you want to read</h1>

                    {/* dropdown button component */}
                    <Dropdown buttonName={buttonName} setButtonName={setButtonName}/>

                    {/* input for user type the story they want to read */}
                    <div className="form-control ">
                        <textarea 
                            id="textBox" 
                            className="textarea textarea-bordered h-36 text-orange-200 bg-orange-950 placeholder-yellow-600/40" 
                            maxLength={100} 
                            placeholder="What kind of story would you like to read?  e.g. 'A person solving the mystery of the Illuminati'" 
                            onChange={e => setText(e.target.value)}
                            required>
                        </textarea>
                        <label className="label">
                            <span className="label-text-alt"/>
                            <span className="label-text-alt text-orange-200 font-light">{text.length}/100</span>
                        </label>
                    </div>

                    {/* submit button */}
                    <div className="form-control">
                        <button className="btn bg-orange-950 hover:bg-orange-200 text-orange-200 hover:text-orange-950 mt-6" type="submit">Submit</button>
                    </div>

                </div>
            )}

            {/* if form submitted, display loading spinner */}
            {isLoading ? <div className='flex justify-center'>
                <span className="loading loading-bars loading-lg text-orange-950"></span>
            </div> : ''}

        </form>   
    </>
    )
}

function Dropdown({ buttonName, setButtonName }) {
    const [activeMenu, setActiveMenu] = useState('main'); 
    const [open, setOpen] = useState(false);

    function DropdownItem(props) {
        return (
            // apply to each dropdown option. changes the name of the button according to the chosen option
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
                <label tabIndex={0}  className="btn m-1 w-52 text-orange-200 bg-orange-950 hover:bg-orange-900">{buttonName}</label>
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