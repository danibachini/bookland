'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export default function Form () {
    const [buttonName, setButtonName] = useState('Genre');
    const [text, setText] = useState('');
    const router = useRouter();
    const pathname = usePathname();
    
    // send the data to route
    const handleSubmit = async (e) => {
        e.preventDefault();

        // const response = JSON.stringify({buttonName, text});
        // console.log("this is the response: ", response);
        // router.push({
        //     pathname: '/books',
        //     query: { response },
        // });

        // await fetch(`/api/story`, {
        const response = await fetch(`/api/story`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // set the content type to JSON
            },
            body: JSON.stringify({ buttonName, text }),
            cache: 'force-cache',
        });
            
        // router.push('/books'); // send user to books page

        // if (response) {
        //     console.log(response);
        //     router.push('/books');
        // };

        // if (!response) {
        //     console.log(response);
        //     throw new Error('Failed to fetch data')
        // };


        const result = await response.json();
        console.log("Response from server:", result);

        // router.push({
        //     pathname:'/books',
            
        // })




        // console.log("right after push");

        if (result.message == "Success") {
            console.log("inside success message");
            window.localStorage.setItem("reqResult", JSON.stringify(result.reqResult));
            router.push("/books");
            
            // redirect to the books' page with the API response as a query parameter
            // console.log("got the result, let's send it to books");
            // router.push(`/books/page?response=${result.data}`); 
            // const reqResult = result.reqResult;
            // console.log("checking reqResult back in the form: ", reqResult);
            // // router.push('/books');
            // router.push({
            //     pathname: '/books',
            //     query: { reqResult },
            //     // query: { response: JSON.stringify(reqResult) },
            // })

        } else {
            console.log("got into the if Error");
            // return err;
        }
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