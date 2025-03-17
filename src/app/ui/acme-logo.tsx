import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/font';


export default function AcmeLogo() {
  return (
   <div className={`${lusitana.className} flex flex-row items-center text-white  `}>
    <GlobeAltIcon className='h-12 w-12  rotate-3'/>
    <p className='text-3xl'>Acme</p>

   </div>
  );
}
