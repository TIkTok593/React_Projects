const str1 = 'Just'
function X(props) {
    return (
        <div>
            <h2>askldjflasdkjf {props.toggle.toString()}</h2>
            <h3>askdjflasdj {props.math}</h3>
            <em>dsakfjlas {props.str}</em>
        </div>
    )
}
function Example () {
    return (
        <X
            toggle={!false}
            math={(10 * 20 / 5)}
            str={str1 + ' aonther ' + 'string'}
        />
    )
}

export default Example;