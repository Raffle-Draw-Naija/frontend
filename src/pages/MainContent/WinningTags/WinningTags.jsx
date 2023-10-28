import { Tabs } from 'antd';
import { CategoryServices } from '../../../../services/CategoryService';
import TabPanel from '../../../components/TabPanel';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
const onChange = (key) => {
    console.log(key);
};

const WinningTags = () => {

    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
        const getDraws = async () => {
            const res = await CategoryServices.getCategories();
            if (res.data.Categories) setDataSource(res.data.Categories)
        }
        getDraws()
    }, []);

    const items = dataSource && dataSource.map(item => {
        const id = item.id
        return {
            label: `${item.name}`,
            key: id,
            children: (
                <div>
                    {/* {console.log(`children ${id}`)} */}

                    <TabPanel id={id} />
                </div>
            )
        };
    })
    return (
        <div>
            <div className="flex flex-grow-1 flex-1">
                <div></div>
                <div>
                    <NavLink className="btn btn-primary mb-4">
                        Create a New Winning Tag
                    </NavLink>
                </div>
            </div>
            <Tabs defaultActiveKey="2" items={items} onChange={onChange} />
        </div>
    )
}

export default WinningTags