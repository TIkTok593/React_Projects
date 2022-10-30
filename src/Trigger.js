function Trigger() {
    const handleClick = () => {
        // document.body.querySelector('h2').style.color = 'blue'
        // console.log(document.body.querySelector('h2').style.color)
        // console.log('hello')
        // console.log()
        let currColor = document.body.querySelector('h2').style.color
        document.body.querySelector('h2').style.color = currColor === 'red' ? 'blue' : 'red'
    }
    return (
        <h2
            style={{color: 'red'}}
            onClick={handleClick}>
            Hello
        </h2>
    );
}

export default Trigger;