import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../Css/Post.css';


function Post() {
    return (
        <>           


            <div className='offerte' >
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.draft.it/cms/wp-content/uploads/nuovologotim.jpg" />
                    <Card.Body>
                        <Card.Title>Offerte Tim</Card.Title>
                        <Card.Text>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, veniam!
                        </Card.Text>
                        <Button variant="primary">Acquista</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.5gitaly.eu/wp-content/uploads/2024/03/Cover-Vodafone.jpg" />
                    <Card.Body>
                        <Card.Title>Offerte Vodafone</Card.Title>
                        <Card.Text>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, veniam!
                        </Card.Text>
                        <Button variant="primary">Acquista</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://dnewpydm90vfx.cloudfront.net/wp-content/uploads/2021/01/ho-mobile-furto-dati.jpg" />
                    <Card.Body>
                        <Card.Title>Offerte ho</Card.Title>
                        <Card.Text>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, veniam!
                        </Card.Text>
                        <Button variant="primary">Acquista</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.gazzettadinapoli.it/wp-content/uploads/2024/05/ILIAD-NAMING-LIGUORI-1080x535-1.png" />
                    <Card.Body>
                        <Card.Title>Offerte iliad</Card.Title>
                        <Card.Text>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, veniam!
                        </Card.Text>
                        <Button variant="primary">Acquista</Button>
                    </Card.Body>
                </Card>

            </div>

            {/*
                <Container>
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://www.draft.it/cms/wp-content/uploads/nuovologotim.jpg" />
                                <Card.Body>
                                    <Card.Title>Offerte Tim</Card.Title>
                                    <Card.Text>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, veniam!
                                    </Card.Text>
                                    <Button variant="primary">Acquista</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://www.draft.it/cms/wp-content/uploads/nuovologotim.jpg" />
                                <Card.Body>
                                    <Card.Title>Offerte Tim</Card.Title>
                                    <Card.Text>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, veniam!
                                    </Card.Text>
                                    <Button variant="primary">Acquista</Button>
                                </Card.Body>
                            </Card>
                           </Col> 
                    </Row>

                </Container>
        */}
        </>
    );
}



export default Post;