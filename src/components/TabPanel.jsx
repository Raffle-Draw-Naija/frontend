import { Dropdown, Card } from 'antd';
import { CategoryServices } from '../../services/CategoryService';
import { useEffect, useState } from 'react';
import sam from "../assets/sam.jpg"
import more from "../assets/more.png"
import { NavLink } from 'react-router-dom';


const TabPanel = ({ id }) => {

    const [winningTags, setWinningTags] = useState()
    useEffect(() => {
        async function getWinningTags() {
            const res = await CategoryServices.getWinningTags(id);
            setWinningTags(res.data.data)
        }
        getWinningTags(id)
    }, []);
    const items = [
        {
            key: '1',
            label: (

                <NavLink
                    to="/winning-tag/edit/3"
                    className="nav-link"
                    end
                >
                    Edit
                </NavLink>
            ),
        }];



    return (
        <div className="d-flex flex-wrap align-item-center">
            {winningTags && winningTags.map((winningTag) => (
                <div key={winningTag.id}>
                    <Card bordered={true} style={{ width: 300 }}>
                        <img src={sam} alt="" />
                        <div className="d-flex">
                            <div>
                                <header className='my-3 bold'>
                                    {winningTag.name}
                                </header>
                                <p>
                                    Current Price:  {winningTag.stake_price}
                                </p>
                            </div>
                            <div className=''>
                                <Dropdown
                                    menu={{
                                        items,
                                    }}
                                    placement="bottomRight"
                                >
                                    <img src={more} alt="" style={{ "height": "50px", "cursor": "pointer" }} />
                                </Dropdown>
                            </div>
                        </div>
                    </Card>

                </div>


            ))}
        </div>
    )
}

export default TabPanel