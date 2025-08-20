import React, {useState} from 'react'

const CheckboxComponent = () => {
    const [inputs, setInputs] = useState({firstname: "", tomato:false, onion:false})

    const handleChange = (e) => {
        const target = e.target
        const value = target.type == 'checkbox' ? target.checked : target.value;
        const name = target.name
        setInputs(values=> ({...values, [name]: value}))
        
    }

    const handleSubmit = e => {
        let fillings = ''
        if(inputs.tomato) fillings += 'tomato'
        if (inputs.onion) {
            if (inputs.tomato) fillings += " and ";
            fillings += 'onion'
        }
        if (!fillings) fillings = 'no fillings'
        e.preventDefault()
        alert(`${inputs.firstname} wants a burger with ${fillings}`)
    }
  return (
    <form onSubmit={handleSubmit} className="p-10">
      <label htmlFor="" id="firstname">
        My name is:
        <input required
          className="border border-gray-400 py-2 px-6 rounded-lg mx-1"
          type="text"
          name="firstname"
          value={inputs.firstname}
          onChange={handleChange}
        />
      </label>
      <p className="text-lg font-bold mt-3 text-blue-500">
        I want a burger with:
      </p>
      <label id="tomato">
        Tomato
        <input
          className="mx-2"
          type="checkbox"
          name="tomato"
          checked={inputs.tomato}
          onChange={handleChange}
        />
      </label>
      <label id="tomato" className=" mx-5">
        Onion
        <input
          className="mx-2"
          type="checkbox"
          name="onion"
          checked={inputs.onion}
          onChange={handleChange}
        />
      </label>
      <button
        className="border border-gray-400 py-2 px-6 rounded-lg mx-5"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default CheckboxComponent
