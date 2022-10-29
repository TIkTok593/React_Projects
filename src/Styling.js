import Header from './Header'
function Styling(props) {
    const styling = {
        padding: "20px",
        border: "1px solid gray",
        background: "#fff",
        margin: "20px 0"
    }
    return ( 
        <Header style={styling}>
            {props.children}
        </Header>
    )
}

export default Styling;