import Student from "./Student/Student"

function App() {

  return (
    <>
      <Student name="João" age={20} isStudent={true}/>
      <Student name="Laura" age={20} isStudent={true}/>
      <Student name="José" age={21} isStudent={true}/>
      <Student name="Mother" age={48} isStudent={false}/>
      <Student />
    </>
  )
}

export default App
