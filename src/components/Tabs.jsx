export default function Tabs({ children, buttons, ButtonsContainer="menu" }) {
    //Passing a custom defined element as a parameter provides the posibility of using different wrapping components, e.g. built in elements like menu, div or custom ones like Section
    //const ButtonsContainer = buttonsContainer;
    
    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    );
}