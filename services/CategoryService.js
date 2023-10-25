import RequestHandler from './RequestHandler'
import { API_URLS } from '../utils/api-url'

class CategoryService {
    getCategories() {
        return RequestHandler.get(API_URLS.categories.all)
    }
    getWinningTags(id) {
        return RequestHandler.single(API_URLS.winningTags.all, id)
    }
    getSingleWinningTags(id) {
        return RequestHandler.single(API_URLS.winningTags.single, id)
    }
    updateWinningTags(id, data) {
        return RequestHandler.put(API_URLS.winningTags.updateTag, id, data)
    }
    create(data) {
        return RequestHandler.post(API_URLS.user.create, data)
    }
    addFund(data) {
        return RequestHandler.post(API_URLS.user.add, data)
    }
    completeRegistration(data) {
        return RequestHandler.post(API_URLS.user.completeRegistration, data)
    }
    authenticate(data) {
        return RequestHandler.post(API_URLS.user.authenticate, data)
    }
}

export const CategoryServices = new CategoryService()
