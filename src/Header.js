function Header(props) {
    return (
        <h1 style={props.style}>
            {props.children}
        </h1>
    );
}

export default Header;