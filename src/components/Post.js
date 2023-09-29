import {Link} from 'react-router-dom';

// describe the post prop
function Post ({post}){

    const div = {
        textAlign: 'left',
        border: `1px solid`,
        margin: "10px auto",
        width: "80%"
    }


    return <div style={div}> 
        <Link to={`/post/${post.id}`}>
            <h3>Company: {post.company}</h3>
            <h4>About: {post.about}</h4>
            <h4>Process: {post.process}</h4>
            <h4>Remarks: {post.remarks}</h4>
            <h4>Company benefits: {post.companyBenefits}</h4>
            <h4>Questions to ask during the interview: {post.questionsToAsk}</h4>
            <h4>List of questions they may ask: {post.questionsToAnswer}</h4>
            <h4>Technical skills to prep for the interview: {post.technicalSkills}</h4>
            <h4>Highlighted soft skills on the job description: {post.softSkills}</h4>
            <h4>Company culture: {post.cultureFit}</h4>
            <h4>Useful links: {post.helpfulLinks}</h4>
        </Link>
    </div>
}

export default Post;