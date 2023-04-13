import React from 'react';
import TennisCard from './components/Home/Cards';
import SportClub from './components/Home/Club';
import CoachList from './components/Home/Coach';
import Service from './components/Home/Service';

interface HomePageProps {
    
}

export const HomePage: React.FC<HomePageProps> = () => {
    return (
        <div className='container mx-auto'>
            <TennisCard />
            <SportClub />
            <CoachList />
            <Service />
        </div>
    );
};

