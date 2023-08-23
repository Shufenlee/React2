
import {ZodError, z} from "zod";
import {useFormik} from 'formik';
import React from "react";

export const RegisterSchema = z.object ({
    email: z.string().email(),
    password: z.string().min(8).max(12),
    name: z.string().min(3).max(50),
})

export function Register(){
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            name: "",
        },
        onSubmit: (values) => {
            
            const validV : {
                success: boolean;
                data?: any;
                error?: ZodError;
            
            } = RegisterSchema.safeParse(values);
            console.log({validV});
        },
        validate: (values) => {

            const validV : {
                success: boolean;
                error?: ZodError;
            } = RegisterSchema.safeParse(values);
            
            if (validV.error){
                const error = validV.error.issues.reduce((acc, curr) =>{
                    return {
                        ...acc,
                        [curr.path[0]]: curr.message
                    };
                }, {});
                console.log(error);
                return error;
            }
        },
    });

    return (

        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="email">email</label>
                    <input style={{
                        border: 
                        formik.errors.email && formik.touched.email ?
                        "1px solid red" : "1px solid #fff",
                    }}
                    
                    id="email" type="email" name="email"
                    value={formik.values.email} onChange={formik.handleChange}
                    onBlur={formik.handleBlur}/>
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input id="password" type="password" name="password"
                    value={formik.values.password} onChange={formik.handleChange}
                    onBlur={formik.handleBlur}/>
                </div>
                <div>
                    <label htmlFor="name">name</label>
                    <input id="name" type="text" name="name"
                    value={formik.values.name} onChange={formik.handleChange}
                    onBlur={formik.handleBlur}/>
                </div>
                <button type='submit'>Send</button>
            </form>
        </div>
    )
}