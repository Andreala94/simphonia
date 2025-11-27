import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../Css/Post.css';
import ServiziOfferti from './ServiziOfferti.jsx';


function Post() {
    return (
        <>
            <div>
                <h2 className='text-center mt-5 mb-4'>Scopri le nostre offerte!</h2>
             </div>

            <div className='offerte' >
                <Card>
                    <Card.Img variant="top" src="https://www.draft.it/cms/wp-content/uploads/nuovologotim.jpg" />
                    <Card.Body>
                        <Card.Title>Offerte Tim</Card.Title>
                        <Card.Text>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, veniam!
                        </Card.Text>
                        <Button variant="primary">Acquista</Button>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img variant="top" src="https://www.5gitaly.eu/wp-content/uploads/2024/03/Cover-Vodafone.jpg" />
                    <Card.Body>
                        <Card.Title>Offerte Vodafone</Card.Title>
                        <Card.Text>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, veniam!
                        </Card.Text>
                        <Button variant="primary">Acquista</Button>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img variant="top" src="https://dnewpydm90vfx.cloudfront.net/wp-content/uploads/2021/01/ho-mobile-furto-dati.jpg" />
                    <Card.Body>
                        <Card.Title>Offerte ho</Card.Title>
                        <Card.Text>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, veniam!
                        </Card.Text>
                        <Button variant="primary">Acquista</Button>
                    </Card.Body>
                </Card>

                <Card>
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
            <div>
                <h2 className='text-center mt-5 mb-4'>Ecco i nostri servizi!</h2>
                <ServiziOfferti />
            </div>
           <div>
              <h3 className='text-center mt-5 mb-4'>E non è tutto...</h3>
              <h3 className='text-center mt-5 mb-4'>Vienici a trovare nel nostro punto vendita a Martina Franca in via Leone XIII</h3>
           </div>

        </>
    );
}



export default Post;