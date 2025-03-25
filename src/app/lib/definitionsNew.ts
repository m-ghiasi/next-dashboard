export type User = {
    id: string;
    name: string;
    email: string;
    password: string
}
export type Customer = {
    id: string;
    name: string;
    email: string;
    image_url: string
}

export type Invoice = {
    id: string;
    customer_id:string;
    amount: number;
    date : string;
    status :'pending' | 'paid'
}

export type Revenue = {
    month: string; 
    revenue: number 
}

export type LatestInvoice = {
    id : string;
    name : string;
    image_url : string;
    email : string;
    amount : string
}

export type LatestInvoiceRow = Omit <LatestInvoice , 'amount'> &  {
    amount: number;
}


export type InvoicesTable = {
    id : string;
    name: string;
    email: string;
    image_url: string;
    date: string;
    amount : string;
    status: 'paid'| 'pending'
}
export type  FormattedCustomersTable = {
    id : string;
    name: string;
    email: string;
    image_url: string;
    total_invoices : number;
    total_pending: string;
    total_paid: string;
}

export type CustomerField = {
    id : string;
    customer_id : number;
    amount: number;
    status: 'pending' | 'paid'
}