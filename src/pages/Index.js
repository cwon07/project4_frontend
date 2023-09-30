import Post from '../components/Post';
import { useLoaderData, Form } from 'react-router-dom';
import styles from './Index.module.scss'

function Index (props){
    const todos = useLoaderData()
    return <>
    <div className={styles.interviewDetails}>
        <h2 className='title'>👩🏽‍💻 Interview Tracker 🧑🏻‍💻</h2>
        <img src='https://miro.medium.com/v2/resize:fit:1400/format:webp/1*sMGslGWsF7NX9plhHRKFog.png' alt='interview image'/>
        <h4 className='subtitle'>Interview Details 🔍 </h4>
        <Form method="post" action="/create">
            Company: <input type="text" name="company" placeholder="Name of the company"/>
            Position: <input type="text" name="about" placeholder="Position you're applying to"/>
            Process: <input type="text" name="process" placeholder="Interview processes"/>
            Location: <input type="text" name="remarks" placeholder="What city/country is the company located? Remote?"/>
            Benefits: <input type="text" name="companyBenefits" placeholder="What benefits do they offer?"/>
            Questions to Ask: <input type="text" name="questionsToAsk" placeholder="Questions to ask the interviewer"/>
            Questions to Expect: <input type="text" name="questionsToAnswer" placeholder="List any questions they may ask"/>
            Technical Skills: <input type="text" name="technicalSkills" placeholder="Technical skills to prepare for the interview"/>
            Soft Skills: <input type="text" name="softSkills" placeholder="List any soft skills they'd like you to have"/>
            Culture Fit: <input type="text" name="cultureFit" placeholder="What is their company culture like?"/>
            Job Post Link: <input type="text" name="helpfulLinks" placeholder="The job posting link"/>
            <button>Save the Details</button>
        </Form>
        </div>
    {todos.map((todo) => <Post key={todo.id} post={todo}/>)}
    </>
}
export default Index;