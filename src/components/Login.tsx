import { useState } from "react"

export default function Login ({code, storage, redirect}) {
  const [value, setValue] = useState("")
  const [ isError, setIsError ] = useState(false)

  const handleSubmit = () => {
    const valueUpperCase = value.toUpperCase()
    if (valueUpperCase === code) {
      setIsError(false)
      localStorage.setItem(storage, valueUpperCase);
      window.location.href = redirect;
    }

    if (valueUpperCase !== code) {
      setIsError(true)
    }
  }

  return (
    <div className="text-center">
      <h1 className="font-bold mt-10 mb-10 m-auto text-center">Para continuar, ingresá el código.</h1>
      <input
        className="text-center w-44 border-2 border-black rounded-md p-1 bg-transparent uppercase focus:outline-none"
        type="text"
        id="code"
        name="code"
        required
        autoFocus
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setIsError(false);
          }
        }/>
      {isError && <p className="text-red-500 font-bold">El código es incorrecto</p>}
      <div className="text-center text-xl mb-12">
        <button className="text-sm font-bold border-2 border-black rounded-md mt-4 p-2 hover:bg-black bg-transparent text-black hover:text-white" onClick={handleSubmit}>CONFIRMAR</button>
      </div>
    </div>

)};