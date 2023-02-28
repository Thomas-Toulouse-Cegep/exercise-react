export function HandleSubmit(event) {
    event.preventDefault();
    alert(`The name you entered was: ${this.props.name}`);
}
