import { useState, useEffect } from 'react'
import { useStore } from '@nanostores/react'
import { $filter } from '../store'
import Card from './Card'
import Loader from './Loader.tsx'
import { NAMES, URL_LIST } from '../constants'
import Mancheta from './Mancheta'

export default function Products () {
  const filter = useStore($filter)
  const [data, setData ] = useState([])
  const [productList, setProductList] = useState(data)

  useEffect(() => {
    setProductList(data.filter((product) => filter === 'all' ? data : product.category === filter))
  }, [filter, data])

  useEffect(() => {
    fetch(URL_LIST)
      .then(response => response.text())
      .then(data => {
        const products = data.split(/\r?\n/g).map(row => {
            const [show, code, image, category, name, medida, description, colors, m, price, stock, promotion] = row.split('\t')
            return { show, code, image, category, name, medida, description, colors, m, price, stock, promotion }
          })
          setData(products.slice(1, products.length))
      })
  }, [])

  return (
    <div>
      <h2 className='text-3xl text-center font-bold my-3'>{NAMES[filter]}</h2>
      { filter === 'resina' && <Mancheta /> }
      <ul className="grid grid-cols-1 gap-6">
        {
        productList.length <= 0 ? <Loader />
        : productList.map((product, index) => (
          product.show === 'TRUE' &&
          <Card
            key={index}
            title={product.name}
            medida={product.medida}
            code={product.code}
            description={product.description}
            price='0'
            priceEf={product.price}
            colors={product.colors && product.colors.split(',')}
            image={product.code}
            promotion={product.promotion}
            stock={product.stock}
          />
        ))
      }
    </ul>
    </div>
  )
}