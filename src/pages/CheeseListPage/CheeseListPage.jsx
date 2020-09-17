import React from 'react';
import './CheeseListPage.css'
import CheeseCard from '../../components/CheeseCard/CheeseCard'

const CheeseListPage = (props) => {
  return ( 
    <>
      <h1>Cheese List</h1>
      <div>
        {props.cheeses.map(cheese =>
            <CheeseCard 
              key={cheese._id}
              cheese={cheese}
              handleDeleteCheese={props.handleDeleteCheese}
              user={props.user}
            />
        )}
      </div>
    </>
   );
}
 
export default CheeseListPage;