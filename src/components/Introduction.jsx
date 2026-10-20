import { useState } from "react";
import "../styles/Introduction.css";

function Introduction({data, setData}){
    const [isEditing, setIsEditing] = useState(true);

    function handleChange(event) {
        const {name, value} = event.target;
        setData({...data, [name]: value,});
    }

    function handleSubmit(event){
        event.preventDefault();
        setIsEditing(false);
    }

    function handleEdit(){
        setIsEditing(true);
    }

    if(!isEditing){
        return(
            <section className="formSection">
                <div className="sectionHeader">
                    <h2>Introduction</h2>
                    <button type="button" onClick={handleEdit}>Edit</button>
                </div>
                <div className="submittedInfo">
                    <p>
                        <strong>Name:</strong> {data.name}
                    </p>
                    <p>
                        <strong>Email:</strong> {data.email}
                    </p>
                    <p>
                        <strong>Phone:</strong> {data.email}
                    </p>
                    <p className="elaboration">
                        <strong>Short Introduction:</strong> {data.intro}
                    </p>
                </div>
            </section>
        );
    }

    return(
        <section className="formSection">
            <h2>Introduction</h2>
            <form onSubmit={handleSubmit}>
                <div className="formGroup">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text" 
                        name="name" 
                        id="name" 
                        value={data.name} 
                        onChange={handleChange} 
                        placeholder="John Doe" 
                        maxLength={30}
                        required
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={data.email} 
                        onChange={handleChange} 
                        placeholder="johnathan@example.com"
                        required
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="phone">Phone</label>
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={data.phone} 
                        onChange={handleChange} 
                        placeholder="555-555-5555"
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="intro">Introduction</label>
                    <textarea
                        name="intro" 
                        id="intro" 
                        value={data.intro} 
                        onChange={handleChange} 
                        placeholder="Short about me, who am i, what am i looking for"
                        rows="3" 
                        required
                    />
                </div>
                <button type="submit">Submit</button>                
            </form>
        </section>
    );
}

export default Introduction;