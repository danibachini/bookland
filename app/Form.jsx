'use client';

import { useState } from 'react';

export default function Form () {
    const [count, setCount] = useState(0);

    return (
    <>
        <form action="">
            <div className="content-center max-w-md m-auto space-y-6">

                <div className="pt-10 space-x-10 md:space-x-20">
                    <div className="dropdown dropdown-bottom columns-1">
                        <label tabIndex={0} className="btn m-1 text-neutral-100">Genre</label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-neutral-300">
                            <li><a>🛸  Fiction</a></li>
                            <li><a>🧑‍🎓  Nonfiction</a></li>
                            <li><a>💑  Romance novel</a></li>
                            <li><a>🔪  Horror</a></li>
                            <li><a>🔍  Mystery</a></li>
                            <li><a>⏳  Biography</a></li>
                            <li><a>🎭  Poetry</a></li>
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