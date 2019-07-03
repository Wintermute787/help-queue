import React from 'react';
import {Input} from "semantic-ui-react";


function NewTicketForm() {
    return(
        <div>
            <form>
                <input
                    type='text'
                    id='names'
                    placeholder='Pair Names'/>
                <input
                    type='text'
                    id='location'
                    placeholder='Location'/>
                <textarea
                    id='issue'
                    placeholder='Describe your Issue'/>
                    <button type='submit'>Help!</button>
            </form>
        </div>
    )
}

export default NewTicketForm;