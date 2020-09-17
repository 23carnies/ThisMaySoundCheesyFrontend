import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom' 


const CheeseCard = ({user, cheese, handleDeleteCheese}) => (
  <>
  <Card>
    <Image src='{cheese.image}' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{cheese.name ? cheese.name : cheese.category}</Card.Header>
      <Card.Meta>Category: {cheese.category}</Card.Meta>
      <Card.Description>
        Country: {cheese.country}<br/>
        Brand: {cheese.brand}<br/>
        Color: {cheese.color}<br/>
        Mould: {cheese.mould}<br/>
        Gas Holes: {cheese.gasHoles}<br/>
        Texture: {cheese.texture}<br/>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {cheese.addedBy.name}
      </a> <br/>
      <Link 
          to={{
              pathname: '/edit',
              state: {cheese}
          }}
      >
        <Button basic color='yellow'>Edit Cheese</Button>
      </Link>
      <Button basic color='red' onClick={() => handleDeleteCheese(cheese._id)}>Delete</Button>
    </Card.Content>
  </Card>
  </>
)

export default CheeseCard