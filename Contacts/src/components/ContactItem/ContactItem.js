import './ContactItem.css';

function ContactItem(props) {
    // console.log(props);
    // console.log(props[0].name);
    // let contacts = [];
    // let objs = JSON.parse(props);
    // console.log(objs);
    // contacts.push(props);

    // // Array.from(contacts);
    // console.log(contacts);
    return (

        <div className='promidiv'>
            <img src={props.url} alt={props.name}></img>
            <p>{props.name}</p>
            <p>{props.pop}</p>
        </div>
    );
}

export default ContactItem;