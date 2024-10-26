import React from 'react';

import { listings } from '@/api/data/listings.js';
import ListingList from '@/components/ListingList.jsx';

const HomePage = () => {
  return (
    <div className={'container py-4'}>
      <ListingList listings={listings} />
    </div>
  );
};

export default HomePage;