import Form from "../components/form/Form"

const Contact = () => {

    return (
        <>
            <section className="contact">
                <div className="contact__title">
                    <hr className="contact__title__lineLeft" />
                    <h2>CONTACT</h2>
                    <hr className="contact__title__lineRight" />
                </div>
            </section>

            <Form />
        </>
    )
}

export default Contact;