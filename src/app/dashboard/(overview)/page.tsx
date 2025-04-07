import Card from "../cards";
import RevenueChart from "../revenue-chart";
import LatestInvoices from "../latest-invoices";
import { Suspense } from "react";
import { lusitana } from "../../ui/fonts";

import { RevenueChartSkeleton } from "@/app/ui/skeletons";
import { LatestInvoicesSkeleton } from "@/app/ui/skeletons";
import { CardSkeleton } from "@/app/ui/skeletons";
import CardWrapper from "../cards";
// import { revenue } from "@/app/lib/placeholder";

export default async function Page() {
  
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 bg-pink-300">
        <Suspense fallback ={<CardSkeleton/>}>
          <CardWrapper/>


        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>

        <Suspense fallback={<LatestInvoicesSkeleton/>}>
          <LatestInvoices  />
        </Suspense>
      </div>
    </main>
  );
}
