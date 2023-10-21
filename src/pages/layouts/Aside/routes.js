import { FiHome } from 'react-icons/fi'
import { BsTicketPerforated } from 'react-icons/bs'
import { BsClipboardMinus } from 'react-icons/bs'
import { IoWalletOutline } from 'react-icons/io5'

const routes = [
    {
        route: '/dashboard',
        Icon: FiHome,
        label: 'Dashboard',
    },
    {
        route: '/raffle-stakes',
        Icon: BsTicketPerforated,
        label: 'Raffle Stakes',
    },
    {
        route: '/stake-price',
        Icon: BsClipboardMinus,
        label: 'Stake Price',
    },
    {
        route: '/wallet',
        Icon: IoWalletOutline,
        label: 'Wallet',
    },
]

export default routes
