import { $filter } from '../store/'
import { MENU_ITEMS } from '../constants'

export default function NavBar () {

  const handleClick = (e: any) => {
    const selectedItem = e.target.id

    if(selectedItem === 'kit') {
      window.location.href = '/kit-armado'
    }

    $filter.set(selectedItem)
  }

  return (
    <div className="my-6">
      <p className='text-xl text-center font-bold uppercase mb-2'>Nuestros productos</p>
      {/* <div className='my-4 text-center'>
      <a href='/kit-armado' className='font-semibold bg-black text-white py-2 px-3 hover:bg-transparent border border-black hover:text-black rounded-md'>¡Mirá nuestros KITS ARMADOS!</a>
      </div> */}
      <ul className="flex flex-col md:flex-row gap-3 flex-wrap">
        {MENU_ITEMS.map(item => <button className='font-semibold bg-black text-white py-1 px-3 hover:bg-transparent border border-black hover:text-black rounded-md' key={item.id} id={item.id} onClick={handleClick}>{item.name}</button>)}
        </ul>
    </div>
  )}