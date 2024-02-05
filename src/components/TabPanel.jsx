import { Card } from 'antd';
import { CategoryServices } from '../../services/CategoryService';
import { useEffect, useState } from 'react';
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

    return (
        <div className="d-flex flex-wrap align-item-center">
            {winningTags && winningTags.map((winningTag) => (
                <div key={winningTag.id}>
                    <Card bordered={true} style={{ width: 300 }}>
                        <img src={winningTag.image} alt="" />
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
                                <NavLink to={`/winning-tag/edit/${winningTag.win_tag_ref}`}>
                                    Edit
                                </NavLink>
                            </div>
                        </div>
                    </Card>

                </div>


            ))}
        </div>
    )
}

export default TabPanel