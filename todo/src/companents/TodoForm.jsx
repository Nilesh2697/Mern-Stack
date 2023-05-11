const TodoForm = () => {

    const onFormSubmit = () => {

    }
    const onInputChange = (e) => {
        console.log(e.target.value)
    }

    return (
        <from className="form" onSubmit={onFormSubmit}>
            <input
                placeholder="Enter new Todo..."
                className="input"
                onChange={onInputChange}
            />
        </from>
    )
}

export default TodoForm