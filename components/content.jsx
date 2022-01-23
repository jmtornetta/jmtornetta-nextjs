export default function Content (props) {return(
    //Each page will pass html as props into this Content skeleton
    <main>
        <h1>{props.title}</h1>
        {props.children}
    </main>
)}