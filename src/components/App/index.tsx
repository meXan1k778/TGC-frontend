import React from 'react';
import FeaturesBanner from '../FeaturesBanner';
import Header from '../Header';
import MainBanner from '../MainBanner';
import RecentWinners from '../RecentWinners';
import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';
import Description from '../Description';
import Tournament from '../Tournament';

function App() {
  return (
    <div>
     <Header />
     <MainBanner />
     <RecentWinners />
     <FeaturesBanner textRight banner={banner1} title='Top 4 Games'
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sem lacinia commodo ac egestas dapibus neque. Orci pulvinar mauris viverra auctor egestas cras amet. '
     />
     <FeaturesBanner banner={banner2} title='Payment in 24h'
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sem lacinia commodo ac egestas dapibus neque. Orci pulvinar mauris viverra auctor egestas cras amet. '
     />
     <Tournament />
     <Description />
    </div>
  );
}

export default App;
