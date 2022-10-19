const Person = (props) => { 
  return (
    <div>
      <p>Learn some information about this person</p>
      <p>Name {props.name} </p>
      <p>Age {props.age>=18? "please go vote": "you must be 18"} </p>

      <ul>{props.hobbies.map(h => <li>{h}</li>)}</ul>
    </div>
  )
}