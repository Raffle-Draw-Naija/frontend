import { FiHome } from 'react-icons/fi'
import { BsTicketPerforated } from 'react-icons/bs'
import { BsClipboardMinus } from 'react-icons/bs'
import { RiSettingsLine } from 'react-icons/ri'

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
        route: '/settings',
        Icon: RiSettingsLine,
        label: 'Settings',
    },
]

export default routes
