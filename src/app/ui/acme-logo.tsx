import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';


export default function AcmeLogo() {
  return (
   <div className={`${lusitana.className} flex flex-row items-center text-white bg-green-400 `}>
    <GlobeAltIcon className='h-12 w-12  rotate-3'/>
    <p className='text-3xl'>Acme</p>

   </div>
  );
}
