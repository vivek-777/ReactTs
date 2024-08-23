type PersonListProps = {
    name: {
        firstName: string
        lastName: string
    }[]
}

const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {props.name.map((name) => {
                return <h1 key={name.firstName}>{name.firstName} {name.lastName}</h1>
            })}
        </div>
    )
};

export default PersonList;