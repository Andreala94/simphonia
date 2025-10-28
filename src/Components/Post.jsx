import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../Css/Post.css';



function Post() {
    return (
        <>
            <div className=''>
                <Card >
                    <Card.Img variant="top" src="https://www.draft.it/cms/wp-content/uploads/nuovologotim.jpg" />
                    <Card.Body>
                        <Card.Title>Offerte Tim</Card.Title>
                        <Card.Text>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, veniam!
                        </Card.Text>
                        <Button variant="primary">Acquista</Button>
                    </Card.Body>
                </Card>

            </div>


        </>
    );
}



export default Post;