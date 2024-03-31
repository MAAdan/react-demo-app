export default function TabButton({ children, onSelect, isSelected, ...props}) {
    return (
        <li>
            {/* The onClick property that performs the action on this button is defined in Examples.jsx file and forwarded as part of the props parameter */}
            <button className={isSelected ? 'active' : undefined} {...props}>{children}</button>
        </li>
    );
}