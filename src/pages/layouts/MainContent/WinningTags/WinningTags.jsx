import { Tabs } from 'antd';
import { CategoryServices } from '../../../../../services/CategoryService';
import TabPanel from '../../../../components/TabPanel';
import { NavLink } from 'react-router-dom';
const onChange = (key) => {
    console.log(key);
};

const res = await CategoryServices.getCategories();


const items = res.data.Categories.map(item => {
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
const WinningTags = () => {
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