import React from 'react';
import './CheeseListPage.css'
import CheeseCard from '../../components/CheeseCard/CheeseCard'
import { Card, Container } from 'semantic-ui-react';

const CheeseListPage = (props) => {
  return ( 
    <>
      <h1>Cheese List</h1>
      <Container>
      <Card.Group itemsPerRow={4}>
        {props.cheeses.map(cheese =>
            <CheeseCard 
              key={cheese._id}
              cheese={cheese}
              handleDeleteCheese={props.handleDeleteCheese}
              user={props.user}
            />
        )}
      </Card.Group>
      </Container>
    </>
   );
}
 
export default CheeseListPage;