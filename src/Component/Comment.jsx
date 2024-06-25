import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function Comment(props) {

    const [Items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    return (
        <>
            <Container className='comment'>
                <h1 className='fs-2 text-center mt-5 mb-5'>Comment API</h1>
                <div className='d-flex flex-wrap justify-content-center'>
                    {Items.map(items => (
                        <Card style={{ width: '25rem', margin: '1rem' }} key={items.id} className='c1_card' id='c_card'>
                            <Card.Body>
                                <div className='d-flex justify-content-center'>
                                    <img src={require('../Image/images.png')} alt="" className='img-fluid pb-2' />
                                </div>
                                <Card.Title className='text-center'><label className='fw-bold me-2'>Id:</label>{items.id}</Card.Title>
                                <Card.Text><label className='fw-bold me-2 fs-5'>Name:</label>{items.name}</Card.Text>
                                <Card.Text><label className='fw-bold me-2 fs-5'>Email:</label>{items.email}</Card.Text>
                                <Card.Text><label className='fw-bold me-2 fs-5'>Body:</label>{items.body}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Container>
        </>
    )
}

export default Comment