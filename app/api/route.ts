import { NextApiRequest } from "next";
import { NextResponse } from 'next/server'
import { Company } from '@/app/repository/definitions'
import { createCompany } from "../repository/company";

interface CompanyNextApiRequest extends NextApiRequest {
  body: {
    name: string;
    sector: number;
  };
}

export async function GET(request: CompanyNextApiRequest) {
  var company: Company = { id: 0, name: request.body.name, sectorId: request.body.sector }
  try {
      const result = await createCompany(company)
  } catch (error) {
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
  
 
}