import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Api1() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => setItems(data.results));
    }, []);

    const getStatusColor = (status) => {
        switch (status) {
            case 'Alive':
                return 'green';
            case 'Dead':
                return 'red';
            case 'unknown':
            default:
                return 'gray';
        }
    };

    return (
        <>
            <Container>
                <h1 className='fs-2 text-center'>Rick And Morty Characters</h1>
                <div className='d-flex flex-wrap justify-content-center'>
                    <Row>
                        {items.map((item) => (
                            <Col key={item.id} lg={6} md={6} className='gx-3 gy-3'>
                                <div className="box d-flex">
                                    <div className="b_image">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className="b_text">
                                        <h3 className='fw-bold fs-2 ms-2'>{item.name}</h3>
                                        <p className='ms-3 fw-bold'>
                                            <label className='me-2'>Status:</label>
                                            <span style={{ color: getStatusColor(item.status) }}>
                                                {item.status}
                                            </span>
                                        </p>
                                        <h5 className='ms-3 mb-3'>{item.gender}</h5>
                                        <p className='ms-3 box_loc'>
                                            <label className='me-2'>Location:</label>
                                            {item.location.name}
                                        </p>
                                        <p className='ms-3 box_ore'>
                                            <label className='me-2'>Origin:</label>
                                            {item.origin.name}
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </>
    );
}

export default Api1;
