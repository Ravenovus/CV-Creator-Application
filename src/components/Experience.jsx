import { useState } from "react";
import "../styles/Experience.css";

function Experience({data,setData}){
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
                    <h2>Experience</h2>
                    <button type="button" onClick={handleEdit}>Edit</button>
                </div>
                <div className="submittedInfo">
                    <p>
                        <strong>Company Name:</strong> {data.company}
                    </p>
                    <p>
                        <strong>Position:</strong> {data.position}
                    </p>
                    <p>
                        <strong>Years of Experience:</strong> {data.yearsOfExperience}
                    </p>
                    <p>
                        <strong>Brief role recap:</strong> {data.brief}
                    </p>
                </div>
            </section>
        )
    }

    return(
        <section className="formSection">
            <h2>Experience</h2>
            <form onSubmit={handleSubmit}>
                <div className="formGroup">
                    <label htmlFor="companyName">Company name</label>
                    <input
                        type="text" 
                        name="companyName" 
                        id="companyName" 
                        value={data.companyName} 
                        onChange={handleChange} 
                        placeholder="Example LLC" 
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="position">Position</label>
                    <input 
                        type="text" 
                        id="position" 
                        name="position" 
                        value={data.position} 
                        onChange={handleChange} 
                        placeholder="System Administrator"
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="yearsOfExperience">Years of experience</label>
                    <input 
                        type="text"
                        inputmode="numeric"
                        pattern="[0-9]*"
                        name="yearsOfExperience"
                        id="yearsOfExperience"
                        value={data.yearsOfExperience}
                        onChange={handleChange}
                        placeholder="0"
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="brief">Short role brief</label>
                    <textarea 
                        name="brief" 
                        id="brief" 
                        value={data.brief} 
                        onChange={handleChange} 
                        placeholder="About the role, what i did, what i was responsible for"
                        rows="5" 
                    />
                </div> 
                <button type="submit">Submit</button>               
            </form>
        </section>
    )

}

export default Experience;