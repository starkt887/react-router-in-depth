import { redirect } from "react-router-dom";

export const contactSubmit = async (request) => {

    try {
        const data = await request.formData();
        let submission = { email: data.get('email'), msg: data.get('msg') }
        console.log(submission)
        if (!submission.email.includes('@'))
            return { error: 'Please enter the valid email!' }
        return redirect('/');
    } catch (error) {
        throw new Error('Unable to send contact message!');
    }


}