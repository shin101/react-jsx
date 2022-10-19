const App = () => (
  <div>
    <Person 
    name="June" 
    age={11} 
    hobbies = {['snorkling', 'drawing', 'drinking']} />

    <Person name="Jun" 
    age={50} 
    hobbies = {['running', 'talking']} />

    <Person name="John" age={3}  hobbies = {['eating', 'watching netflix']} />

  </div> 
)

ReactDOM.render(<App />, document.getElementById("root"))

