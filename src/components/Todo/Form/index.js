import { useState, useEffect } from 'react'

const initialFormValues = {
    name: "",
    checked: false
}

function Form({ setTodo, todos }) {

    const [form, setForm] = useState(initialFormValues);

    const onChangeInput = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.name === '') {
            alert("An unexpected error occured..");
            return false;
        }

        setTodo([...todos, form])
        console.log("güncel todos => ", todos);
    }

    useEffect(() => {
        setForm(initialFormValues);
    }, [todos]);

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input
                    placeholder="Add To Do"
                    value={form.name}
                    name="name"
                    id="addInput"
                    onChange={onChangeInput}
                    autoComplete="off"
                />
                <button className="addTodo">Ekle</button>
            </div>
        </form>
    )
}

export default Form
