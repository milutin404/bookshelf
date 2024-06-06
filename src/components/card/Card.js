import './style.css';

function Card(props) {

    return (
        <div
            className='bookCover'
        >
            <h1>{props.bookData.title}</h1>
            <h3>{props.bookData.author_name ? props.bookData.author_name[0] : 'unknown'}</h3>
        </div>
    );
}

export default Card;
