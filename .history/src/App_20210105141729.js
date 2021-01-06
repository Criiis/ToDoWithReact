



function App() {
  let cars = [
    {
      "item": "item1",
      "status": "uncomplete",
      "registration": new Date('2021-02-03'),
    },
    {
      "item": "item2",
      "status": "complete",
      "registration": new Date('2021-03-03')
    }
  ];
  console.log(cars);

  return (
    <>
    <h1>hello world!</h1>
    </>
  );
}

export default App;
