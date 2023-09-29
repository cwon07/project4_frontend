import Post from '../components/Post';
import { useLoaderData, Form } from 'react-router-dom';

function Index (props){
    const todos = useLoaderData()
    return <>
    <div style={{textAlign: "center"}}>
        <h2>Interview Preparation</h2>
        <h4>Company Details</h4>
        <Form method="post" action="/create">
            <input type="text" name="company" placeholder="Name of the company"/>
            <input type="text" name="about" placeholder="About the company"/>
            <input type="text" name="process" placeholder="Interview process"/>
            <input type="text" name="remarks" placeholder="Anything notable about the company"/>
            <input type="text" name="companyBenefits" placeholder="What benefits do they offer?"/>
            <input type="text" name="questionsToAsk" placeholder="Questions to ask the interviewer"/>
            <input type="text" name="questionsToAnswer" placeholder="List any questions they may ask"/>
            <input type="text" name="technicalSkills" placeholder="Technical skills to prepare for the interview"/>
            <input type="text" name="softSkills" placeholder="List any soft skills they'd like you to have"/>
            <input type="text" name="cultureFit" placeholder="What is their company culture like?"/>
            <input type="text" name="helpfulLinks" placeholder="Links to sites that may help you prepare"/>
            <button>Save the Details</button>
        </Form>
        </div>
    {todos.map((todo) => <Post key={todo.id} post={todo}/>)}
    </>
}
export default Index;