import React, {useState} from 'react'

const CheckboxComponent = () => {

const [inputs, setInputs] = useState({firstname:"", tomato:false, onion:false})

    const handleChange = (e) => {
        const target = e.target
        const value = target.type == 'checkbox' ? target.checked : target.value;
        const name = target.name
        setInputs(values => ({...values, [name]:value}))
    };
    const handleClick = (e) => {
        
    }
  return (
    <div className="flex w-screen h-screen items-center justify-center p-10">
      <form onClick={handleClick}>
        <label className="text-blue-800 font-bold">
          My name is:
          <input
            className="mx-2 px-4 py-2 border border-gray-400 rounded-md outline-none"
            type="text"
            name="firstname"
            value={inputs.firstname}
            onChange={handleChange}
          />
        </label>
        <p className="text-2xl text-blue-500 font-bold mt-6 mb-2">
          I want a burger with:
        </p>
        <label className="text-blue-800 font-bold">
          Tomato
          <input
            className="mx-1"
            type="checkbox"
            name="tomato"
            checked={inputs.tomato}
            onChange={handleChange}
          />
        </label>
        <label className="text-blue-800 font-bold mx-3">
          Onion
          <input
            className="mx-1"
            type="checkbox"
            name="onion"
            checked={inputs.onion}
            onChange={handleChange}
          />
        </label>
        <button className="bg-blue-400 px-4 py-2 rounded-md text-white font-bold" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CheckboxComponent
