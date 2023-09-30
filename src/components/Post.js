import {Link} from 'react-router-dom';
import styles from './Post.module.scss'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

// describe the post prop
function Post ({post}){
    
    const PaperBackground = styled(Paper)(({theme}) => ({
        width: 1500,
        height: 600,
        padding: theme.spacing(2),
        ...theme.typography.body2,
        textAlign: 'left',
        
    }));

    return <div className={styles.postDetails}> 
            <h2>{post.company} 🗒️ </h2>
            <div class="MuiPaper-root">
                <PaperBackground elevation={8}>
                    <Link to={`/post/${post.id}`}>
                        <h4>Position:  {post.about}</h4>
                        <h4>Processes: {post.process}</h4>
                        <h4>Location: {post.remarks}</h4>
                        <h4>Company benefits: {post.companyBenefits}</h4>
                        <h4>Questions to ask during the interview: {post.questionsToAsk}</h4>
                        <h4>List of questions they may ask: {post.questionsToAnswer}</h4>
                        <h4>Technical skills to prep for the interview: {post.technicalSkills}</h4>
                        <h4>Highlighted soft skills on the job description: {post.softSkills}</h4>
                        <h4>Company culture: {post.cultureFit}</h4>
                        <h4>Job post link: {post.helpfulLinks}</h4>
                    </Link>
                </PaperBackground>
            </div>
    </div>
}

export default Post;