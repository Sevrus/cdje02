import { useForm } from "react-hook-form";

const Form = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <form onSubmit={handleSubmit(data => console.log(data))} className="form" action="" method="post">
            <div className="form__lastname">
                <label htmlFor="lastname">Nom</label>
                <input
                    {...register("lastName", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/ })}
                    type="text"
                />
                {errors.lastName?.type === 'required' && <span role="alert">Nom Requis</span>}
            </div>
            <div className="form__firstname">
                <label htmlFor="firstname">Prénom</label>
                <input
                    {...register("firstName", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })}
                    type="text"
                />
                {errors.firstName?.type === 'required' && <span role="alert">Prénom Requis</span>}
            </div>
            <div className="form__email">
                <label htmlFor="email">Email</label>
                <input
                    {...register("email", { required: true, maxLength: 40 })}
                    type="email"
                />
                {errors.email?.type === 'required' && <span role="alert">Email Requis</span>}
            </div>
            <div className="form__message">
                <label htmlFor="message">Message</label>
                <textarea
                    {...register("message", { required: true, maxLength: 250 })}
                    cols="30" rows="10"
                >
                </textarea>
                {errors.message?.type === 'required' && <span role="alert">Message Requis</span>}
            </div>
            <div className="form__btn">
                <button>Envoyer</button>
            </div>
        </form>
    )
}

export default Form;