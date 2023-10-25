import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({ user: userSlice })
const persistConfig = {
    key: 'root',
    storage,
    version: 1,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
})

export default store
