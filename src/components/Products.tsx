import { useState, useEffect } from 'react'
import { useStore } from '@nanostores/react'
import { $filter } from '../store'
import Card from './Card'
import Mancheta from './Mancheta'
import STOCK from '../constants/stock.json'

export default function Products () {
  const filter = useStore($filter)
  const [productList, setProductList] = useState(STOCK.products)

  useEffect(() => {
    setProductList(STOCK.products.filter((product) => filter === 'all' ? STOCK : product.categoria === filter))
  }, [filter])

  return (
    <div>
      <ul className="grid grid-cols-1 gap-6">
        {
        productList.length <= 0 ? <Mancheta />
        : productList.map((product) => (
          <Card
            key={product.id}
            title={product.name}
            medida={product.medida}
            description={product.description}
            price={product.price}
            priceEf={product.priceEf}
            colors={product.colors}
            image={product.image}
          />
        ))
      }
    </ul>
    </div>
  )
}