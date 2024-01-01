
import CompaniesTable from '../../ui/company/table'
import { lusitana } from '@/app/ui/fonts';
import { Button } from '@/app/ui/button'
import Link from 'next/link'

export default async function Page() {
    return <div>
        <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Companies
        </h1>
        <Link key='add-company'
            href='/dashboard/companies/add-company'> Add Company</Link>
        <CompaniesTable companies={[]} />
    </div>;

  }