
type StyleProps = {
    style: React.CSSProperties
}

const Style = (props: StyleProps) => {
    return ( <div style={props.style}>Style Div</div>)
}

export default Style;