import React from 'react';
import { club } from '../../../images/img';

interface SportClubProps {
    
}

const SportClub: React.FC<SportClubProps> = () => {
    const clublist = [
        {title:' Euismod diam, vel venenatis bibendum sodales sem hendrerit vulputate sagittis. '},
        {title: 'Nisl senectus sed malesuada donec. Interdum malesuada bibendum imperdiet elementum auctor vitae in. '},
        {title:'Quam purus ornare dictum pharetra. Sed viverra tellus sollicitudin urna, sagittis. '},
        {title:'Scelerisque urna senectus commodo, nam. Donec nibh tempus imperdiet nisi, tincidunt mus egestas nisl nullam.'}
    ]
    return (
        <div className='flex items-center mt-36'>
            <div>
                <img src={club} alt="" />
            </div>
            <div className='text-[#333333] bg-[#F7ECE1] py-11 px-10'>
                <h6 className='font-bold text-4xl'>Спортивный клуб</h6>
                <p className='text-sm'>Imperdiet lorem ipsum, pulvinar aliquet sit ultricies in sit turpis. 
                    Ultricies erat pretium risus quam tincidunt non viverra porttitor. 
                    Sollicitudin enim nunc in nisi donec vel. Blandit mauris vitae amet aliquet ultrices mauris pellentesque. 
                    Non ipsum commodo, sit mi sit netus aenean nisl. Donec sit pellentesque enim, vestibulum. 
                Condimentum hac adipiscing purus in augue nisi. Convallis ut nisi.
                </p>
                <ul>
                <span className='font-semibold text-xl'>Ornare orci ut dictum nulla fames.</span> 
                {clublist.map(x =>
                    <li className='text-sm' key={x.title}>
                        {x.title}
                    </li>)}
                </ul>
            </div>
        </div>
    );
};

export default SportClub;