export default function ProdcutCard(props) {
    //app.jsx eken ena tika api ganne props kiyala
    console.log(props);

    return(
        <div>
            <h1>{props.name}</h1>
            <img src={props.image}/>
            <p>This is a {props.name}</p>
        </div>
    )
}