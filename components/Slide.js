import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  UserIcon,
  LoginIcon,
  HomeIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline'
export default function Selected() {
  return (
    <div className="my-2 flex flex-col justify-center space-y-3 md:flex-row md:space-y-0 ">
      <button className="bg-gri-400 text-green mx-2 flex flex-col   items-center justify-center space-y-4 rounded border border-green-500 p-8 px-14 text-[17px]  font-semibold uppercase opacity-70 hover:bg-green-300 md:flex-[33.33%]   ">
        <UserIcon className=" w-20 pb-2" />
        Payement securise
      </button>
      <button className="bg-gri-400 text-green mx-2 flex   flex-col items-center justify-center space-y-4 rounded border border-green-500 p-8 px-14  text-[17px] font-semibold opacity-70 hover:bg-green-300 md:flex-[33.33%]   ">
        <ShoppingCartIcon className="w-20 pb-2" />
        LIVRAISON OFFERTE DÈS 100€ D’ACHAT*
      </button>
      <button className="bg-gri-400 text-green mx-2 flex   flex-col items-center justify-center space-y-4 rounded border border-green-500 p-8 px-14  text-[17px] font-semibold opacity-70 hover:bg-green-300 md:flex-[33.33%]   ">
        <UserIcon className="w-20 pb-2" />
        BESOIN D’AIDE ? CONTACTEZ-NOUS
      </button>
    </div>
  )
}
