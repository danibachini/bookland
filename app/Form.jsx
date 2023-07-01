'use server';

import { redirect } from "next/dist/server/api-utils";
import TextArea from "./TextArea.jsx" 

export async function handleSubmit (event) {
    'use server';
    const 
        genre= event.get('genre'), 
        description  =event.get('description')
    
    console.log(genre, description);

    // maintenant je pense qu'il faut save sur la base de donnée
    // et puis rediriger vers la page de lecture
    // and create a new page for the story

    //example
    // const id = await db.collection('stories').insertOne({
    //     genre,
    //     description
    // });
    // redirect('/stories/' + id);

    // or, dont use server side rendering, and just use the client side rendering
    // on form validation send data to api, return what got from openai
    // and render all on client side once received
}

export default async function Form () {


    return (
        <form action={handleSubmit}>
            <div className="content-center max-w-md m-auto space-y-6">
                <div className="pt-10">
                    <label className="label">What kind of story would you like to read?</label>
                    <select name="genre" id="genre" className='menu p-2 shadow bg-base-100 rounded-box w-52 text-neutral-300'>
                        <option value="Genre">Select genre</option>
                        <option value="Fiction">🛸  Fiction</option>
                        <option value="Nonfiction">🧑‍🎓  Nonfiction</option>
                        <option value="Romance novel">💑  Romance novel</option>
                        <option value="Horror">🔪  Horror</option>
                        <option value="Mystery">🔍  Mystery</option>
                        <option value="Biography">⏳  Biography</option>
                        <option value="Poetry">🎭  Poetry</option>
                    </select>
                </div>

                <TextArea name={"description"}/>

                <div className="form-control">
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>

            </div>
        </form>
    )
}