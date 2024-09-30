import { useState, useEffect } from 'react'
import { URL_KIT } from '../constants'
import { getDescription } from '../utility/helpers'

export default function Card () {
  const [data, setData ] = useState([])

  useEffect(() => {
    fetch(URL_KIT)
      .then(response => response.text())
      .then(data => {
        const workshops = data.split(/\r?\n/g).map(row => {
            const [show, id, title, description, oldPrice, price] = row.split('\t')
            return {show, id, title, description, oldPrice, price }
          })
          setData(workshops.slice(1, workshops.length))
      })
  }, [])

  return (
    <>
    { data.every((product) => product.show === 'FALSE') && <p className='text-center font-semibold bg-yellow-300 rounded-md shadow-md p-2'>Actualmente no tenemos ningún kit armado, pronto anunciaremos.</p> }
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-8'>
      { data.map((product) => (
        product.show === 'TRUE' &&
        <div className="flex flex-col gap-2 justify-between rounded-md p-4 text-center shadow-md bg-white border border-black" key={product.title}>
          <div>
            <h2 className="text-xl font-extrabold uppercase mb-2">{`# ${product.id} - ${product.title}`}</h2>
            {getDescription(product.description).map((item, index) => <p key={index} className="text-sm uppercase">{item}</p>)}
          </div>
          <div className='flex flex-col flex- gap-2 items-center border-t border-black'>
            <p className='font-semibold mt-2'>Antes: <span className='line-through'>{product.oldPrice}</span></p>
            <p className='text-xl font-semibold'>Ahora: {product.price}</p>
            <p className='text-sm'>¡Incluye un 10% de descuento en moldes de stock!</p>
          </div>
        </div>
      ))}
    </div>

    </>
  )
}
