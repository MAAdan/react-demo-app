// By using "...props" all the properties passed from the jsx implementing this component are merged into one object called props
export default function Section({title, children, ...props}) {
    return (
        // By using {...props} all the properties passed as parameters are spread into jsx properties just like they were defined on the component implementation. e.g. 
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}