import React from 'react';
import './CheeseListPage.css'
import CheeseCard from '../../components/CheeseCard/CheeseCard'

const CheeseListPage = (props) => {
  return ( 
    <>
      <h1>Cheese List</h1>
      <div className='CheeseListPage-grid'>
        {props.cheeses.map(cheese =>
            <CheeseCard 
              key={cheese._id}
              cheese={cheese}
              handleDeleteCheese={props.handleDeleteCheese}
            />
        )}
      </div>
    </>
   );
}
 
export default CheeseListPage;