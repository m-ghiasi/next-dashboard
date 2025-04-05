import { generateYAxis } from '@/app/lib/utils';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { Revenue } from '@/app/lib/definitionsNew';



export default async function  RevenueChart({revenue} : {
    revenue : Revenue[] 
}) {

    const chartHeight = 350 ;

    const {yAxisLabels , topLabel} = generateYAxis(revenue);

    if (!revenue || revenue.length === 0) {
        return  <p className='mt-4 text-gray-400'>No data available.</p>
    }

    return (
        
    )
    
}