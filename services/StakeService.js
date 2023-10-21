import RequestHandler from './RequestHandler'
import { API_URLS } from '../utils/api-url'
import { data } from 'autoprefixer'

class StakeService {
    startADraw(data) {
        return RequestHandler.post(API_URLS.draw.stateADraw, data)
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
}

export const StakeServices = new StakeService()
