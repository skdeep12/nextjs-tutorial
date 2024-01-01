
import { PrismaClient } from '@prisma/client'
import { Company, Sector } from './definitions';


const prisma = new PrismaClient()

export async function fetchCompanies() {
    // Add noStore() here prevent the response from being cached.
    // This is equivalent to in fetch(..., {cache: 'no-store'}).
    console.log("fetching companies")
    try {
      // Artificially delay a response for demo purposes.
      // Don't do this in production :)
  
      // console.log('Fetching revenue data...');
      // await new Promise((resolve) => setTimeout(resolve, 3000));
  
      const companies = await prisma.company.findMany();
  
      // console.log('Data fetch completed after 3 seconds.');
  
      return companies;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch company data.');
    }
}
  
export async function createCompany(company: Company) {
    try {
        // Artificially delay a response for demo purposes.
        // Don't do this in production :)
    
        // console.log('Fetching revenue data...');
        // await new Promise((resolve) => setTimeout(resolve, 3000));
        const sector = await fetchOrCreateSector(company.sector)
        const createdCompany = await prisma.company.create({
            data: {
                name: company.name,
                sectorId: company.sectorId,
        }});
    
        // console.log('Data fetch completed after 3 seconds.');
    
        return createdCompany;
      } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to  create company.');
      }
}

export async function fetchOrCreateSector(sectorInput?: Sector) {
    if (sectorInput === undefined) {
        return
    }
    try {
        const sector = await prisma.sector.upsert({
            where: { name: sectorInput.name },
            update: {},
            create: {
              name: sectorInput.name,
            },
        })
        return sector
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to get sector');
    }
}