import { useState } from "react";
import "../styles/Introduction.css";

function Education({data, setData}){
    const [isEditing, setIsEditing] = useState(true);

    function handleChange(event){
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
                    <h2>Education</h2>
                    <button type="button" onClick={handleEdit}>Edit</button>
                </div>
                <div className="submittedInfo">
                    <p>
                        <strong>Education establishment name:</strong> {data.institute}
                    </p>
                    <p>
                        <strong>{data.degreeType}</strong>{data.fieldOfStudy =="" ? "": " in " + data.fieldOfStudy}
                    </p>
                    <p>
                        <strong>Years of study:</strong> {data.educationStart} - {data.educationEnd}
                    </p>
                </div>
            </section>
        );
    }

    return(
        <section className="formSection">
            <h2>Education</h2>
            <form onSubmit={handleSubmit}>
                <div className="formGroup">
                    <label htmlFor="institute">Education establishment name</label>
                    <input 
                        type="text"
                        name="institute"
                        id="institute"
                        value={data.institute}
                        onChange={handleChange}
                        placeholder="University of Examples" 
                        />
                </div>

                <div className="formGroup">
                    <label htmlFor="degreeType">Type of degree</label>
                    <input 
                        type="text"
                        name="degreeType"
                        id="degreeType"
                        value={data.degreeType}
                        onChange={handleChange}
                        placeholder="Bsc."
                         />
                </div>

                <div className="formGroup">
                    <label htmlFor="fieldOfStudy">Field of study</label>
                    <input 
                        type="text"
                        name="fieldOfStudy"
                        id="fieldOfStudy"
                        value={data.fieldOfStudy}
                        onChange={handleChange}
                        placeholder="Computer Science"
                         />
                </div>

                <div className="formGroup">
                    <label htmlFor="yearsOfStudy">Years of study</label>
                    <div className="inputPair">
                        <label htmlFor="educationStart">Start</label>
                        <input 
                            type="text"
                            inputmode="numeric"
                            pattern="[0-9]*"
                            name="educationStart"
                            id="educationStart"
                            value={data.educationStart}
                            onChange={handleChange}
                            placeholder="2020"
                            min="1950"
                            max= "2028"
                         />
                        <label htmlFor="educationEnd">End</label>
                        <input 
                            type="text"
                            inputmode="numeric"
                            pattern="[0-9]*"
                            name="educationEnd"
                            id="educationEnd"
                            value={data.educationEnd}
                            onChange={handleChange}
                            placeholder="2024"
                            min="1950"
                            max="2040"
                         />
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );

}

export default Education;