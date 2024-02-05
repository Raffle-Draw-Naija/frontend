export const API_URLS = {
    user: {
        create: 'user/create',
        completeRegistration: 'complete-registration',
        authenticate: 'login',
        all: 'user/user-information',
        add: 'user/add-fund',
        getAccounts: 'admin/bank-accounts',
        getPendingWithdrawal: 'admin/pending-withdrawal',
        updateWithdrawal: 'admin/update/pending-withdrawal',
        getAgents: 'get-agents',
        getAgentTransactions: 'admin/agent/transactions',
    },
    categories: {
        all: 'categories',
    },
    winningTags: {
        all: 'admin/winning-tags',
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
        stateARaffle: 'admin/start-a-raffle',
        all: 'admin/get-all-draw',
        stop: 'admin/stop-raffle-draw',
    },
    stakes: {
        all: 'admin/customer/stakes',
        dashboard: 'admin/dashboard',
        searchByDate: 'admin/customer/search-by-date',
        agentRaffle: 'admin/agent-raffles',
    },
}
