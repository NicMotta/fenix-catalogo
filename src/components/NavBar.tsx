import { $filter } from '../store/'
import { MENU_ITEMS } from '../constants'

export default function NavBar () {

  const handleClick = (e: any) => {
    $filter.set(e.target.id)
  }

  return (
    <div className="p-4 bg-white my-6 rounded-md shadow-md">
      <ul className="flex gap-2 justify-around flex-wrap">
        {MENU_ITEMS.map(item => <button className='font-semibold hover:text-gray-500' key={item.id} id={item.id} onClick={handleClick}>{item.name}</button>)}
        </ul>
    </div>
  )}