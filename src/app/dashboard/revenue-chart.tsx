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
        <div className='bg-amber-400 w-full md:col-span-4'>
            <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl `}>
                Recent Revenue
            </h2>



            <div className='rounded-xl bg-gray-50 p-4'>
                <div className=' sm:grid-cols-13 mt-0 grid gird-cols-12 items-end gap-2 rounded-md bg-orange-600  p-4 md:gap-4 '>
                    <div className='mb-6 hidden flex-col justify-between text-sm text-red-400 sm:flex'
                    style={{height:`${chartHeight}px`}}
                    >

                        {yAxisLabels.map((label) => (
                            <p key={label}>{label}</p>
                        ))}

                    </div>
                    {revenue.map((month) => (
                        <div key={month.month} className='flex flex-col items-center gap-2'>
                            <div className='w-full rounded-md bg-blue-600' 
                            style={{height: `${(chartHeight/topLabel) * month.revenue}px` ,
                            }}></div>
                            <p>{month.month}</p>
                        </div>
                    ))}



                </div>
                <div className='flex items-center pb-2 pt-6'>
                        <CalendarIcon className="h-5 w-5 text-gray-500" />
                        <h3 className='ml-2 text-sm text-gray-500'>Last 12 month</h3>
                </div>

            </div>
        </div>
    )
    
}