import { Link, useLoaderData, Form } from "react-router-dom";
import styles from './Show.module.scss'

function Show(props) {
  const post = useLoaderData()
    return <>
    <div className={styles.showDetails}>
        <h2>Update Interview Details</h2>
        <Form method="post" action={`/update/${post.id}`}>
        Company:<input
            type="text"
            name="company"
            placeholder="Name of the company"
            defaultValue={post.company}
          />
          Position: <input
            type="text"
            name="about"
            placeholder="Position you're applying to"
            defaultValue={post.about}
          />
           Process: <input
            type="text"
            name="process"
            placeholder="Interview process"
            defaultValue={post.process}
          />
           Location: <input
            type="text"
            name="remarks"
            placeholder="Location of the company office/remote"
            defaultValue={post.remarks}
          />
           Benefits: <input
            type="text"
            name="companyBenefits"
            placeholder="What benefits do they offer?"
            defaultValue={post.companyBenefits}
          />
           Questions to Ask: <input
            type="text"
            name="questionsToAsk"
            placeholder="Questions to ask the interviewer"
            defaultValue={post.questionsToAsk}
          />
           Questions to Answer: <input
            type="text"
            name="questionsToAnswer"
            placeholder="List any questions they may ask"
            defaultValue={post.questionsToAnswer}
          />
           Technical skills:<input
            type="text"
            name="technicalSkills"
            placeholder="Technical skills to prepare for the interview"
            defaultValue={post.technicalSkills}
          />
           Soft skills: <input
            type="text"
            name="softSkills"
            placeholder="List any soft skills they'd like you to have"
            defaultValue={post.softSkills}
          />
           Culture fit: <input
            type="text"
            name="cultureFit"
            placeholder="What is their company culture like?"
            defaultValue={post.cultureFit}
          />
           Job site link: <input
            type="text"
            name="helpfulLinks"
            placeholder="Link to the job posting"
            defaultValue={post.helpfulLinks}
          />
          <button>Update Interview Details</button>
        </Form>

        <Form method="post" action={`/delete/${post.id}`}>
            <button>Delete Interview Details</button>
        </Form>
      </div>

      <Link to="/">Back to Index</Link>
      </>
}

export default Show;
