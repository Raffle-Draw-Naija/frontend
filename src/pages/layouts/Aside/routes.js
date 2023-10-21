import { FiHome } from 'react-icons/fi'
import { BsTicketPerforated, BsClipboardMinus } from 'react-icons/bs'
import { IoWalletOutline } from 'react-icons/io5'
import { RiSettingsLine } from 'react-icons/ri'

const routes = [
    {
        route: '/dashboard',
        Icon: FiHome,
        label: 'Dashboard',
    },
    {
        route: '/raffle-draws',
        Icon: RiSettingsLine,
        label: 'Active Raffle Draws',
    },
    {
        route: '/raffle-stakes',
        Icon: BsTicketPerforated,
        label: 'Raffle Stakes',
    },
    {
        route: '/winning-tags',
        Icon: RiSettingsLine,
        label: 'Winning Tags',
    },
    {
        route: '/stake-price',
        Icon: BsClipboardMinus,
        label: 'Stake Price',
    },
    {
        route: '/bank-accounts',
        Icon: RiSettingsLine,
        label: 'Bank Accounts',
    },
    {
        route: '/wallet',
        Icon: IoWalletOutline,
        label: 'Wallet',
    },
    {
        route: '/settings',
        Icon: RiSettingsLine,
        label: 'Settings',
    },
]

export default routes
