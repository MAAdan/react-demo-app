import './Header.css';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max) {
    return Math.floor(Math.floor(Math.random() * (max + 1)));
}

export default function Header() {
    const descrption = reactDescriptions[getRandomInt(2)];

    return (
        <header>
            <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {descrption} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}
