/* long version
export default function Greeting(props) {
    const { name } = props;
    return <h2> Hello there, {name}!</h2>
} */

// you can destructure props right in the export statement
export default function Greeting({ name, lastName, emoji}) {
    return <h2> {emoji || "⚪️"} {name || "N/a" } {lastName || "N/a"}!</h2>
}