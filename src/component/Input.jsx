const Input = (props) => {
    return (
    <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
        
    </label>
    <input 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        id={props.value[0]}
        type="text" 
        placeholder={props.value[0]}
        value={props.value[1]}
        onChange={(e) => {props.value[2](e.target.value)}} />
</div>);
}

export default Input;