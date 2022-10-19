const Tweet = props => { 
  return (
    <div>
      <p>Username : @{props.username}</p>
      <p>Name: {props.name} </p>
      <p>Tweet: {props.message1} </p>
      <p>Tweet: {props.message2} </p>
      <p>Tweet: {props.message3} </p>
    </div>
  )
}