import RequestHandler from './RequestHandler'
import { API_URLS } from '../utils/api-url'

class CustomerService {
    getTransactions() {
        return RequestHandler.get(API_URLS.transactions.all)
    }
    getCustomers() {
        return RequestHandler.get(API_URLS.customer.all)
    }
}

export const CustomerServices = new CustomerService()
