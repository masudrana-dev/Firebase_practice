import React, { useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import './Gallery.css'
import Menu from './Menu'

const GalleryReact = () => {
    const [items, setItems] = useState(Menu);
    const filterITem = (catItem) => {
        const updateITems = Menu.filter((curElem) => {
            return curElem.catagory === catItem;
        })
        setItems(updateITems);
    }

    return (
        <>
            <div className="text-center mt-10 font-bold">
                <h1>Our Food Items</h1>
                <hr />
                <div className="container">
                    <div className="menu d-flex justify-content-around">
                        <button className='btn btn-warning' onClick={() => filterITem('breakfast')}>Breakfast</button>
                        <button className='btn btn-warning ' onClick={() => filterITem('lunch')}>Lunch</button>
                        <button className='btn btn-warning' onClick={() => filterITem('dinner')}>Dinner</button>
                        <button className='btn btn-warning' onClick={() => (setItems(Menu))}>All</button>

                    </div>
                </div>
            </div>

            <div classNameName="menu-card">
                {
                    items.map((elem) => {
                        const { name, image, price, description } = elem
                        return (
                            <Fade>
                                <div className='menu-card-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={image} />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Fade>
                        )
                    })
                }

            </div>

        </>
    );
};

export default GalleryReact;