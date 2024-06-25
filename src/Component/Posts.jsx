import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function Posts() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setItems(data))
    }, []);

    return (
        <>
            <Container className='posts'>
                <h1 className='fs-2 text-center mt-5 mb-5'>Posts API</h1>
                <div className='d-flex flex-wrap justify-content-center'>
                    {items.map(item => (
                        <Card style={{ width: '25rem', margin: '1rem' }} key={item.id} id='p_card' className='p1_card'>
                            <Card.Body>
                                <div className='d-flex justify-content-center'>
                                    <img src={require('../Image/images.png')} alt="" className='img-fluid pb-2 ' />
                                </div>
                                <Card.Title className='text-center'><label className='fw-bold me-2'>Id:</label>{item.id}</Card.Title>
                                <Card.Text><label className='fw-bold me-2 fs-5'>Title:</label>{item.title}</Card.Text>
                                <Card.Text><label className='fw-bold me-2 fs-5'>Body:</label>{item.body}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Container>
        </>
    )
}

export default Posts;
