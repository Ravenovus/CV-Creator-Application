import "../styles/CVPreview.css";

function CVPreview({
    introduction,
    education,
    experience,
}) {
    function EducationLevelCheck(){
        if(education.fieldOfStudy != ""){
            return(
                (" in " + education.fieldOfStudy)
            );
        }
        return ("");
    }

    return(
        <section className="cvPreview">
            <div className="cvHeader">
                <h1>{introduction.name || "Your Name"}</h1>
                <div className="contactInfo">
                    <span>
                        {introduction.email || "your@email.com"}
                    </span>
                    <span>
                        {introduction.phone || "Your phone number"}
                    </span>
                </div>
            </div>
            <span className="elaboration">
                {/*check this section if looks weird*/}
                {introduction.intro || "Short about you here"}
            </span>
            <div className="cvSection">
                <h2>Education</h2>
                <div className="cvEntry">
                    <div className="cvEntryHeader">
                        <strong>{education.institute|| "School name"}</strong>
                        <span>
                            {education.educationStart || "Start Year"}{" - "}
                            {education.educationEnd || "End Year"}
                        </span>
                    </div>
                    <p>
                        {education.degreeType || "Degree Type"}
                        {EducationLevelCheck()}
                    </p>
                </div>
            </div>
            <div className="cvSection">
                <h2>Experience</h2>
                <div className="cvEntry">
                    <div className="cvEntryHeader">
                        <strong>{experience.companyName || "Company Name"}</strong>                      
                    </div>
                    <span>
                        {experience.position || "Position"}
                        {experience.yearsOfExperience || "amount of years"} years
                    </span>                      
                    <p className="elaboration">
                        Briefly about the role : {experience.brief || "..."}
                    </p>
                </div>
            </div>
        </section>
        
    )
}

export default CVPreview;