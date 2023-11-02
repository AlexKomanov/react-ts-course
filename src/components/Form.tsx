import {FormEvent, useRef} from "react";
import {FieldValues, useForm} from "react-hook-form";
import {date, z} from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";


const schema = z.object({
    name: z.string().min(3),
    age: z.number().min(18)
});

type FormData = z.infer<typeof schema>

const Form = () => {

    const {register, handleSubmit, formState : {errors}} = useForm();

    const onSubmit = (data: FieldValues) => console.log(data)



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input {...register('name', {required: true, minLength: 3})}
                       id="name" type={"text"} className="form-control"/>
                {errors.name?.type === 'required' && <p className={"text-danger"}>The value is required</p> }
                {errors.name?.type === 'minLength' && <p className={"text-danger"}>The value should be at least 3 chars</p> }
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input {...register('age')} id="age" type="number" className="form-control"/>
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>

        </form>
    );
};

export default Form;