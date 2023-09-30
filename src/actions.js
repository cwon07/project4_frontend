import url from './url'
import {redirect} from 'react-router-dom';

// create action
export const createAction = async({request}) => {
    const formData = await request.formData();
    const newTodo = {
        company: formData.get("company"),
        about: formData.get("about"),
        process: formData.get("process"),
        remarks: formData.get("remarks"),
        companyBenefits: formData.get("companyBenefits"),
        questionsToAsk: formData.get("questionsToAsk"),
        questionsToAnswer: formData.get("questionsToAnswer"),
        technicalSkills: formData.get("technicalSkills"),
        softSkills: formData.get("softSkills"),
        cultureFit: formData.get("cultureFit"),
        helpfulLinks: formData.get("helpfulLinks")
    }

    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTodo)
    })
    return redirect("/")
}

// update action
export const updateAction = async({request, params}) => {
    const id = params.id
    const formData = await request.formData();
    const updatedTodo = {
        company: formData.get("subject"),
        about: formData.get("about"),
        process: formData.get("process"),
        remarks: formData.get("remarks"),
        companyBenefits: formData.get("companyBenefits"),
        questionsToAsk: formData.get("questionsToAsk"),
        questionsToAnswer: formData.get("questionsToAnswer"),
        technicalSkills: formData.get("technicalSkills"),
        softSkills: formData.get("softSkills"),
        cultureFit: formData.get("cultureFit"),
        helpfulLinks: formData.get("helpfulLinks")
    }

    await fetch(url + id, {
        method: 'put',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedTodo)
    })
    return redirect('/')
}

// delete action
export const deleteAction = async({params}) => {
    const id = params.id
    await fetch(url + id, {
        method: "delete"
    })
    return redirect('/')
}