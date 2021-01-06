



function App() {
  let data = [
    {
      "item": "item1",
      "status": "uncomplete",
      "registration": new Date('2021-03-03'),
    },
    {
      "item": "item2",
      "status": "complete",
      "registration": new Date('2021-06-03')
    }
  ];
  console.log(data);

  localStorage.setItem('itemsToDo', data);


  return (
    <>
    <h1>hello world!</h1>
    </>
  );
}

export default App;
