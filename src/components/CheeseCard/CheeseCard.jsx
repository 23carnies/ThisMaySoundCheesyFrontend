import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


const CheeseCard = ({user, cheese, handleDeleteCheese}) => (
  <>
  <Card>
    <Image src={cheese.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{cheese.name ? cheese.name : cheese.category}</Card.Header>
      <Card.Meta>{cheese.category}</Card.Meta>
      <Card.Description>
        {cheese.country}
        {cheese.brand}
        {cheese.color}
        {cheese.mould}
        {cheese.gasHoles}
        {cheese.texture}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {cheese.addedBy}
      </a>
    </Card.Content>
  </Card>
  </>
)

export default CheeseCard