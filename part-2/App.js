const App = () => (
  <div>
    {/* <Tweet /> */}
    <Tweet username="bob123" name="Bob" date="Dec 1, 2010" message1="my tweet!" message2="hi" message3='hey' />
  </div> 
)

ReactDOM.render(<App />, document.getElementById("root"))

// const App = () => (
//   <div>
//     <FirstComponent />
//     <NamedComponent name="Bob"/>
//   </div> 
// )

// ReactDOM.render(<App />, document.getElementById("root"))