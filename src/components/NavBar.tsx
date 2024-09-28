import { $filter } from '../store/'
import { MENU_ITEMS } from '../constants'

export default function NavBar () {

  const handleClick = (e: any) => {
    $filter.set(e.target.id)
  }

  return (
    <div className="my-6">
      <p className='text-xl text-center font-bold uppercase mb-2'>Nuestros productos</p>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 justify-around flex-wrap">
        {MENU_ITEMS.map(item => <button className='font-semibold hover:text-gray-500 p-2 bg-white rounded-md shadow-md' key={item.id} id={item.id} onClick={handleClick}>{item.name}</button>)}
        </ul>
    </div>
  )}