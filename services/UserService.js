import RequestHandler from './RequestHandler'
import { API_URLS } from '../utils/api-url'

class UserService {
    create(data) {
        return RequestHandler.post(API_URLS.user.create, data)
    }
    login(data) {
        return RequestHandler.post(API_URLS.user.authenticate, data)
    }
    completeRegistration(data) {
        return RequestHandler.post(API_URLS.user.completeRegistration, data)
    }
    authenticate(data) {
        return RequestHandler.post(API_URLS.user.authenticate, data)
    }
    getUser(data) {
        return RequestHandler.post(API_URLS.user.all, data)
    }
    getAccounts() {
        return RequestHandler.get(API_URLS.user.getAccounts)
    }
    updateStatus(id, data) {
        return RequestHandler.put(API_URLS.user.updateWithdrawal, id, data)
    }
    getPendingWithdrawal() {
        return RequestHandler.get(API_URLS.user.getPendingWithdrawal)
    }
}

export const UserServices = new UserService()
