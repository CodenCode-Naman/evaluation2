// require companyService
const companyServices = require('../../src/services/companyServices.js');
// require HTtpError
const HttpError = require('../../src/utils/HTTPError');
// require model
const { companies } = require('../../src/database/models');

describe('companyServices', () => {
    describe('function getCompaniesBySector', () => {
        it('should return an array of companies filtered by sector', async () => {
            const returnValue = [
                {
                    "company_id": "46e1d061-e39d-4d5c-8e0e-3fa5d45d9efc",
                    "company_name": "Apple",
                    "ceo": "Dr. Christina Batz",
                    "score": 26.17,
                    "rank": 1
                }];
            jest.spyOn(companies, 'findAll').mockResolvedValue(returnValue);
            const companiesBySector = await companyServices.getCompaniesBySector('Software');
            expect(companiesBySector).toEqual(returnValue);
        });
        it('should throw an error when sector doesn\'t exists', async () => {
            const err = new HttpError('Sector not found', 404);
            jest.spyOn(companies, 'findAll').mockResolvedValue(null);
            const mockId = 11;
            await expect(companyServices.getCompaniesBySector(null)).rejects.toThrow(err);
        });
    });
    describe('function updateCompany', () => {
        it('should return an updated company', async () => {
            const returnValue = {
                "id": 2,
                "company_id": "46e1d061-e39d-4d5c-8e0e-3fa5d45d9efc",
                "company_name": "Google",
                "ceo": "Naman Bhatia",
                "score": 26.17
            };
            const mockBody = {
                "company_description": "Google is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware. It is considered one of the Big Four technology companies, alongside Amazon, Apple, and Facebook.",
                "ceo": "Raman Gupta"
            };
            jest.spyOn(companies, 'update').mockResolvedValue(1);
            jest.spyOn(companies, 'findOne').mockResolvedValue(returnValue);
            const updatedCompany = await companyServices.updateCompany(2, mockBody);
            expect(updatedCompany).toEqual(returnValue);
        });
    });
    describe('function getAllCompanies', () => {
        it('should return an array of all companies', async () => {
            const returnValue = [
                {
                    "id": 1,
                    "company_id": "46e1d061-e39d-4d5c-8e0e-3fa5d45d9efc",
                    "company_name": "Google",
                    "ceo": "Mark Christensen",
                    "score": 26.17
                },
                {
                    "id": 2,
                    "company_id": "46e1d061-e39d-4d5c-8e0e-3fa5d45d9efc",
                    "company_name": "BMW",
                    "ceo": "Naman Bhatia",
                    "score": 26.17
                }
            ];
            jest.spyOn(companies, 'findAll').mockResolvedValue(returnValue);
            const allCompanies = await companyServices.getAllCompanies();
            expect(allCompanies).toEqual(returnValue);
        });
    });
}); 