import { DatePicker, Button, Select, Input } from 'antd';
import { FiSearch } from 'react-icons/fi';
const SearchByDate = ({ search_item, winningTags, onInputChange, handleWinningTagsChange, handleChange, onSubmit, onChangeEndDate, onChangeStartDate }) => {

    return (
        <div className='mt-4 d-flex mb-3'>
            <Input
                value={search_item || ''}
                onChange={onInputChange}
                placeholder='Search...'
                className='mr-3'
            />
            <DatePicker onChange={onChangeStartDate} className='mr-3' />
            <DatePicker onChange={onChangeEndDate} className='mr-3' />
            <Select
                defaultValue="Search By"
                style={{
                    width: 120,
                }}
                onChange={handleChange}
                className='mr-3'
                options={[
                    {
                        value: 'winners',
                        label: 'Winners',
                    },
                    {
                        value: 'losers',
                        label: 'Losers',
                    }
                ]}
            />
            <Select
                defaultValue="Search By"
                style={{
                    width: 120,
                }}
                onChange={handleWinningTagsChange}
                className='mr-3'
                options={winningTags}
            />
            <Button type="primary" onClick={onSubmit} className='d-flex align-items-center'>
                <FiSearch className='mr-2' />
                <span>
                    Search
                </span>
            </Button>
        </div>
    )
}

export default SearchByDate