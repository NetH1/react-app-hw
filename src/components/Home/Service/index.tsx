import React from 'react';
import styles from './service.module.css'

interface ServiceProps {
    
}

const Service: React.FC<ServiceProps> = () => {
    const abonements = [
        {title:'Зимний сезон 2021-2022'},
        {title:'Абонементы'},
        {title:'Скидки'},
        {title:'Дополнительные услуги'}
    ]
    return (
        <div className='flex justify-around items-center mt-36'>
            <div>
                <h4 className='font-bold text-4xl text-[#333333]'>Цены и абонементы</h4>
                <ul className='mt-16'>
                    {abonements.map(x =>
                        <li className='bg-[#8D86C9] flex justify-between items-center flex-row py-3 px-7 mb-7' key={x.title}>
                            <span className='text-white text-xl'>{x.title}</span>
                            <button className=''><svg className='w-4 h-4 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg></button>
                        </li>
                    )}
                </ul>
            </div>
            <div>
                <div className='flex items-center justify-between'>
                    <h5 className='font-bold text-4xl text-[#333333]'>Услуги</h5>
                    <div>
                        <button className='bg-[#8D86C9] p-3 mr-4'><svg className='w-4 h-4 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg></button>
                        <button className='bg-[#8D86C9] p-3'><svg className='w-4 h-4 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></button>
                    </div>
                </div>
                <div className='border border-[#F7ECE1] py-7 px-6 mt-16'>
                    <div className={styles.cafe}>
                        <span className='font-bold text-white text-2xl'>Уютное кафе</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;