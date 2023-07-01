'use client';

import { useState } from 'react';

export default function TextArea ({name}) {
    const [count, setCount] = useState(0);

    return (
    <>
    <div className="form-control">
        <label className="label">
            <span id="label-text">More precisely?</span>
        </label>
        <textarea id="textBox" name={name} className="textarea textarea-bordered h-24 text-neutral-100" maxLength={100} placeholder="A person solving the mystery of the Illuminati" onChange={e => setCount(e.target.value.length)}></textarea>
        <label className="label">
            <span className="label-text-alt"/>
            <span className="label-text-alt">{count}/100</span>
        </label>
    </div>
    </>
    )
}