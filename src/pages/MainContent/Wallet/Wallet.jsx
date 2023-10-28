import React from 'react'
import { Table, TableItem, TableItemContainer, TableRow } from '../../../components/table/Table'
import { WalletHistory, items } from './walletHistory'
import { Input } from 'antd';
import { AiOutlineSearch } from 'react-icons/ai';
import { DatePicker, Space } from 'antd';
import { Button, Dropdown, message, Tooltip } from 'antd';
import { IoFilterOutline } from 'react-icons/io5'

const { RangePicker } = DatePicker;

const headerData = [
    'Name',
    'Amount',
    'Status',
    'Ticket ID',
    'Date'
];

export default function Wallet() {
    const handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
    };

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    return (
        <div className='w-full min-h-screen'>
            <div className="flex flex-col w-full gap-6">
                <h1 className='font-bold text-lg'>Wallet</h1>
                <div className="grid grid-cols-1 space-y-4 md:grid-cols-7 w-full items-center">
                    <h2 className='col-span-2 font-extrabold text-xl'>Wallet History</h2>

                    <div className="col-span-5 grid grid-cols-2 sm:grid-cols-4 space-y-2 sm:space-x-6 items-center">
                        <div className='col-span-1'>
                            <Input size="large" placeholder="Search" prefix={<AiOutlineSearch />} />
                        </div>

                        <div className='col-span-2'>
                            <Space direction="vertical" size={12} >
                                <RangePicker size='large' />
                            </Space>
                        </div>

                        <div className='col-span-1 w-full'>
                            <Dropdown menu={menuProps}>
                                <Button size='large'>
                                    <Space>
                                        <IoFilterOutline />
                                        Filter
                                    </Space>
                                </Button>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
            <Table headerData={headerData}>
                {WalletHistory.map(({ name, amount, status, ticketId, date }) => (
                    <TableRow>
                        <TableItem text={name} />
                        <TableItemContainer>
                            &#8358; {amount}
                        </TableItemContainer>
                        <TableItemContainer>
                            {status === 'Successful' ?
                                <span className="badge badge-success">{status}</span> :
                                <span className="badge badge-warning">{status}</span>
                            }
                        </TableItemContainer>
                        <TableItem text={ticketId} />
                        <TableItem text={date} />
                    </TableRow>
                ))}
            </Table>

        </div>
    )
}
