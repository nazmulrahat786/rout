import React, { use } from 'react';
import Card from '../../Card/Card';

const PriceingOption = ({priceingpromise}) => {
   const priceingData = use(priceingpromise);

    return (
        <div>
            <h1 className='text-3xl text-center m-2'>Get Our MemberShip</h1>




           <div className='grid grid-cols-3 gap-4'> 
           {
                priceingData.map(price=> <Card key={price.id} price={price} ></Card>)
            }

           </div>




        </div>
    );
};

export default PriceingOption;