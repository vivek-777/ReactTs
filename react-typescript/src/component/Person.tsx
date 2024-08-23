type PersonProps = {
    name: {
        firstName: string
        lastName: string
    }
}

const Person = (props: PersonProps) => {
    return (
        <h1>{props.name.firstName} {props.name.lastName}</h1>
    )
}

export default Person;