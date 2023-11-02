import RequestHandler from './RequestHandler'
import { API_URLS } from '../utils/api-url'

class StakeService {
    stateARaffle(data) {
        return RequestHandler.post(API_URLS.draw.stateARaffle, data)
    }
    searchStakeByDate(data) {
        return RequestHandler.post(API_URLS.stakes.searchByDate, data)
    }
    raffleDraws() {
        return RequestHandler.get(API_URLS.draw.all)
    }
    stopDraws(data) {
        return RequestHandler.publish(API_URLS.draw.stop, data)
    }
    getAllStakes() {
        return RequestHandler.get(API_URLS.stakes.all)
    }
    dashboard() {
        return RequestHandler.get(API_URLS.stakes.dashboard)
    }
}

export const StakeServices = new StakeService()
