import { Link, useLoaderData, Form } from "react-router-dom";

function Show(props) {
  const post = useLoaderData();

  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
      <h1>{post.subject}</h1>
      <h2>{post.details}</h2>
      <div style={{ textAlign: "center" }}>
        <h2>Update Company Details</h2>
        <Form method="post" action={`/update/${post.id}`}>
          <input
            type="text"
            name="company"
            placeholder="Name of the company"
            defaultValue={post.company}
          />
          <input
            type="text"
            name="about"
            placeholder="About the company"
            defaultValue={post.about}
          />
           <input
            type="text"
            name="process"
            placeholder="Interview process"
            defaultValue={post.process}
          />
           <input
            type="text"
            name="remarks"
            placeholder="Anything notable about the company"
            defaultValue={post.remarks}
          />
           <input
            type="text"
            name="companyBenefits"
            placeholder="What benefits do they offer?"
            defaultValue={post.companyBenefits}
          />
           <input
            type="text"
            name="questionsToAsk"
            placeholder="Questions to ask the interviewer"
            defaultValue={post.questionsToAsk}
          />
           <input
            type="text"
            name="questionsToAnswer"
            placeholder="List any questions they may ask"
            defaultValue={post.questionsToAnswer}
          />
           <input
            type="text"
            name="technicalSkills"
            placeholder="Technical skills to prepare for the interview"
            defaultValue={post.technicalSkills}
          />
           <input
            type="text"
            name="softSkills"
            placeholder="List any soft skills they'd like you to have"
            defaultValue={post.softSkills}
          />
           <input
            type="text"
            name="cultureFit"
            placeholder="What is their company culture like?"
            defaultValue={post.cultureFit}
          />
           <input
            type="text"
            name="helpfulLinks"
            placeholder="Links to sites that may help you prepare"
            defaultValue={post.helpfulLinks}
          />
          <button>Update Company Details</button>
        </Form>

        <Form method="post" action={`/delete/${post.id}`}>
            <button>Delete Company Details</button>
        </Form>
      </div>
      
      <Link to="/">Back to Index</Link>
    </div>    
  );
}

export default Show;
