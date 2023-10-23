export const API_URLS = {
    user: {
        create: 'user/create',
        completeRegistration: 'complete-registration',
        authenticate: 'login',
        all: 'user/user-information',
        add: 'user/add-fund',
    },
    pending: {
        all: 'user/transaction/pending',
        cancel: 'user/transaction/pending/cancel',
        getTransaction: 'user/transaction/pending/get-transaction',
    },
    categories: {
        all: 'categories',
    },
    winningTags: {
        all: 'winning-tags',
        single: 'admin/category/winning-tags',
    },
    draw: {
        stateADraw: 'admin/start-a-draw',
        all: 'admin/get-all-draw',
        stop: 'admin/stop-raffle-draw',
    },
    stakes: {
        all: 'admin/customer/stakes',
        dashboard: 'admin/dashboard',
    },
}
