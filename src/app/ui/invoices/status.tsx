import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function InvoiceStatus({status}:{status:string}){

    return(
        <span
        className={
            clsx('inline-flex items-center rounded-b-full px-2 py-1 text-xs',
                { 'bg-gray-100 text-gray-500': status==='pending '  ,
                 'bg-gree-500 text-white' :status==='paid' 
            })
        }>
            {status==='pending' ? (
                <div>Pending 
                    <CheckIcon className='ml-1 w-4 text-gray-500'/>
                </div>
            ): null}
            {status=== 'paid'? (
                <div>
                    Paid <ClockIcon className='ml-1 w-4 text-white'/>
                    
                </div>
            ): null}
        </span>
    )

}