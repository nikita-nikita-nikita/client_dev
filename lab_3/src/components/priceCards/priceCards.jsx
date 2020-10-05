import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import "./priceCards.scss";

const PriceCards = () => (
    <Card>
        <div className="head text">
            POPULAR
        </div>
        <Image src='https://cdn.vox-cdn.com/thumbor/NBAk9HTZ9NheDTqn3z_3tLrbVMY=/0x0:1863x1242/1200x800/filters:focal(783x472:1081x770)/cdn.vox-cdn.com/uploads/chorus_image/image/65206643/IMG_0118.0.jpeg' wrapped ui={false} />
        <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
                <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
                Matthew is a musician living in Nashville.
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
                <Icon name='user' />
                22 Friends
        </Card.Content>
    </Card>
);

export default PriceCards;
