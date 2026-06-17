const userName = 'Magzhan';
let isLoggedIn = false;

const App = () => {
  return (
    // using <> instead of <div> to return several tags with no additional wrapper
    <>
      <h1 className="title">To Do List</h1>
      {isLoggedIn && <p>Hi, {userName}!</p>}
      <p>{isLoggedIn ? `Hi, ${userName}!` : 'Please Log In!'}</p>
    </>
  );
};

export default App;
