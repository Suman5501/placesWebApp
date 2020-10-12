import React , { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle} from 'reactstrap';
class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key = {dish.id} className = "col-12 col-md-5 mt-1">
                    <Card tag = "li">
                        <CardImg src = {dish.image} alt = {dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className = "container">
                <div className = "row">
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;