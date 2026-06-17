const userName = 'Magzhan';

const App = () => {
  return (
    // using <> instead of <div> to return several tags with no additional wrapper
    <>
      <h1>To Do List</h1>
      <p>Hi, {userName}!</p>
    </>
  );
};

export default App;
