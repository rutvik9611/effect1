import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function User() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setItems(data));
    }, []); // Dependency array ensures useEffect runs only once

    return (
        <>
            <Container className='user'>
                <h1 className='fs-2 text-center mt-5 mb-5'>User API</h1>
                <div className='d-flex flex-wrap justify-content-center'>
                    {items.map(item => (
                        <Card style={{ width: '18rem', margin: '1rem' }} key={item.id} className='u1_card' id='u_Card'>
                            <Card.Body>
                                <div className='d-flex justify-content-center'>
                                    <img src={require('../Image/images.png')} alt="" className='img-fluid pb-2' />
                                </div>
                                <Card.Title className='text-center'>
                                    <label className='fw-bold me-2'>Id:</label>{item.id}
                                </Card.Title>
                                <Card.Text>
                                    <label className='fw-bold me-2 fs-5'>Name:</label>{item.name}
                                </Card.Text>
                                <Card.Text>
                                    <label className='fw-bold me-2 fs-5'>Username:</label>{item.username}
                                </Card.Text>
                                <Card.Text>
                                    <label className='fw-bold me-2 fs-5'>Email:</label>{item.email}
                                </Card.Text>
                                <Card.Text>
                                    <label className='fw-bold me-2 fs-5'>Address:</label>
                                    {`${item.address.street}, ${item.address.suite}, ${item.address.city}, ${item.address.zipcode}`}
                                </Card.Text>
                                <Card.Text>
                                    <label className='fw-bold me-2 fs-5'>Phone:</label>{item.phone}
                                </Card.Text>
                                <Card.Text>
                                    <label className='fw-bold me-2 fs-5'>Website:</label>{item.website}
                                </Card.Text>
                                <Card.Text>
                                    <label className='fw-bold me-2 fs-5'>Company:</label>
                                    {`${item.company.name}, ${item.company.catchPhrase}, ${item.company.bs}`}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Container>
        </>
    );
}

export default User;
