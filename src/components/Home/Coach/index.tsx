import React from 'react';
import { coach } from '../../../images/img';
import { CoachImgBorder, CoachPhDesc, CoachSpanName, Coachcard } from './styles';

interface CoachListProps {
    
}

const CoachList: React.FC<CoachListProps> = () => {
    const coahces = [
        {name:'Pulvinar aliquam', desc:'Arcu elit massa amet turpis vel consequat pellentesque sit. '},
        {name:'Pretium odio', desc:'Bibendum aliquam volutpat nisl a duis in nisi. In sed commodo lorem morbi quis. '},
        {name:'Aliquet consectetur', desc:'Id sapien sed nibh fermentum massa posuere ipsum. Diam in.'},
        {name:'Blandit augue', desc:'Scelerisque accumsan pretium justo, vitae elit. Dolor semper morbi sit auctor vel diam eros.'},
        {name:'Lorem lacus', desc:'Adipiscing amet, viverra dignissim egestas. Sed nibh egestas venenatis faucibus. '},
        {name:'Sed erat', desc:'Quis ullamcorper pretium lacus risus tellus dolor etiam. '},
    ]
    return (
        <div className='mt-36'>
            <div className='flex justify-between items-center'>
                <h3 className='font-bold text-4xl text-[#333333]'>Тренерский состав</h3>
                <div>
                    <button className='bg-[#8D86C9] p-3 mr-4'><svg className='w-4 h-4 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg></button>
                    <button className='bg-[#8D86C9] p-3'><svg className='w-4 h-4 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></button>
                </div>
            </div>
            <ul className='mt-36 flex'>
                {coahces.map(x =>
                <li key={x.name} className={Coachcard}>
                <img className={CoachImgBorder} src={coach} alt="" />
                <span className={CoachSpanName}>{x.name}</span>
                <p className={CoachPhDesc}>{x.desc}</p>
                </li>)}
            </ul>
        </div>
    );
};

export default CoachList;