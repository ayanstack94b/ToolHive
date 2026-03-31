import React, { use } from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ dataPromise }) => {
    // console.log('promise', dataPromise);
    const cardsData = use(dataPromise)
    return (
        <div className='md:container md:mx-auto'>
            
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-10/12 mx-auto space-y-4 p-3">
                {
                    cardsData.map((card, i) => <ProductCard
                        key={i}
                        card={card}
                    ></ProductCard>)
                }
               </div>
            
        </div>
    );
};

export default ProductList;