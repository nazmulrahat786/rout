import React from 'react';

const Card = ({price}) => {
    const {name, prices,info, features} = price;
    return (
        // <div className='border-2  flex justify-center  flex-col  border-red-500 hover:bg-green-500 hover:duration-500  bg-black rounded-lg p-6 m-4'>
        //    <div className='mb-4'>
        //    <h1 className='text-xl'>{name}</h1>
        //    <h1 className='text-3xl font-extrabold'>{prices}</h1>
        //    <p className='text-sm'>{info}</p>
        //    </div>
        //    <div>
        //       <h1 className='text-2xl'>Features</h1>
        //       <ul className='list-disc text-sm'> 

        //         {
        //             features.map((feature, index) => <li key={index}>{feature}</li>)
        //         }
        //       </ul>
        //    </div>
        //   <div>
        //   <button className="btn btn-wide my-3">Wide</button>
        //   </div>
            
        // </div>
        <div className="card w-96 bg-green-700 shadow-sm">
        <div className="card-body">
          <span className="badge badge-xs badge-warning">Most Popular</span>
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold">{name}</h2>
            <span className="text-xl">{prices}</span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
          {
              features.map((feature, index) =>     <li key={index}> 
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>{feature}</span>
            </li>
                
               )
               }
              
       
          
          </ul>
          <div className="mt-6">
            <button className="btn btn-primary btn-block">Subscribe</button>
          </div>
        </div>
      </div>
    );
};

export default Card;