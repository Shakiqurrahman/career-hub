import React from 'react';
import './JobCategory.css'

const JobCategory = () => {

    const categoryList = [
        {
            id : 1,
            img : '/src/assets/Icons/accounts 1.png',
            title : 'Account & Finance',
            available : '300 Jobs Available'
        },
        {
            id : 2,
            img : '/src/assets/Icons/business 1.png',
            title : 'Creative Design',
            available : '100+ Jobs Available'
        },
        {
            id : 3,
            img : '/src/assets/Icons/social-media 1.png',
            title : 'Marketing & Sales',
            available : '150 Jobs Available'
        },
        {
            id : 4,
            img : '/src/assets/Icons/chip 1.png',
            title : 'Engineering Job',
            available : '224 Jobs Available'
        },
    ]

    return (
        <section className='category container'>
            <h1 className='heading'>Job Category List</h1>
            <p className='sub-heading'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="job-list">
                {
                    categoryList.map((data) => (
                        <div key={data.id} className='job-box'>
                            <img src={data.img} className='img' alt="job image" />
                            <h3>{data.title}</h3>
                            <p>{data.available}</p>
                        </div>

                    ))
                }
            </div>
        </section>
    );
};

export default JobCategory;