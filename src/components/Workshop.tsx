import { useState, useEffect } from 'react'
import { URL_WORKSHOP } from '../constants'

export default function Card () {
  const [data, setData ] = useState([])

  useEffect(() => {
    fetch(URL_WORKSHOP)
      .then(response => response.text())
      .then(data => {
        const workshops = data.split(/\r?\n/g).map(row => {
            const [show, title, description, date, duration, location] = row.split('\t')
            return {show, title, description, date, duration, location }
          })
          setData(workshops.slice(1, workshops.length))
      })
  }, [])

  return (
    <>
    { data.every((product) => product.show === 'FALSE') && <p className='text-center font-semibold bg-yellow-300 rounded-md shadow-md p-2'>Actualmente no tenemos ningún taller programado, próximamente los anunciaremos en las redes.</p> }
    { data.map((product) => (
      product.show === 'TRUE' &&
      <div className="rounded-md p-5 max-h-42 shadow-md bg-white my-8 md:w-1/2" key={product.title}>
        <div className="flex flex-col gap-3 items-center">
          <div className="w-full flex flex-col gap-1 text-center">
            <h2 className="text-xl font-extrabold uppercase mb-2">{product.title}</h2>
            <p className="text-sm text-left">{product.description}</p>
            <p className='mt-2 font-semibold'>{product.date} | {product.duration}</p>
            <p className='uppercase'>{product.location}</p>
          </div>
          <p className='text-sm'>¡Si traes otra persona, obtienen un 10% de descuento!</p>
          <p>Contactános para más información</p>
        </div>
      </div>
    ))}

    </>
  )
}
