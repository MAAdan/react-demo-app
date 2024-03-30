import './CoreConcept.css';

export default function CoreConcept({image, title, descrption}) {
    return (
        <li>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{descrption}</p>
        </li>
    );
}