import React from 'react'

function AddArthorForm({match}) {
    return <div>
        <h1>Add Author</h1>
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
            </div>
        </form>
    </div>;
}

export default AddArthorForm;