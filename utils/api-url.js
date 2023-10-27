export const API_URLS = {
    user: {
        create: 'user/create',
        completeRegistration: 'complete-registration',
        authenticate: 'login',
        all: 'user/user-information',
        add: 'user/add-fund',
    },
    categories: {
        all: 'categories',
    },
    winningTags: {
        all: 'winning-tags',
        single: 'admin/category/winning-tags',
        updateTag: 'admin/update/winning-tags',
    },
    customer: {
        all: 'admin/customers',
    },
    transactions: {
        all: 'admin/customer/transactions',
    },
    draw: {
        stateADraw: 'admin/start-a-draw',
        all: 'admin/get-all-draw',
        stop: 'admin/stop-raffle-draw',
    },
    stakes: {
        all: 'admin/customer/stakes',
        dashboard: 'admin/dashboard',
        searchByDate: 'admin/customer/search-by-date',
    },
}
