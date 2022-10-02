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
    return(

  
  <div className="flex justify-center">
    <button className=" my-2 mx-4 flex justify-center rounded border border-green-500 bg-gri-400 p-2 px-5 py-10 text-sm font-semibold text-green hover:bg-green-600   "
    >
         <UserIcon/>
    Payement securise 
    </button>
    <button className=" my-2 mx-4 flex justify-center rounded border border-green-500 bg-green-400 p-2 px-5 py-10 text-sm font-semibold text-green hover:bg-green-600   "
   >
     <UserIcon/>
    LIVRAISON OFFERTE
DÈS 100€ D’ACHAT*
     </button>
     <button className=" my-2 mx-4 flex justify-center rounded border border-green-500 bg-gri-400 p-2 px-5 py-10 text-sm font-semibold text-green hover:bg-green-600   "
      Icon={UserIcon}
      >
      <UserIcon/>

     BESOIN D’AIDE ?
CONTACTEZ-NOUS
</button>
    </div>
)
}
