const userName = 'Magzhan';

const App = () => {
  return (
    // using <> instead of <div> to return several tags with no additional wrapper
    <>
      <h1 className="title">To Do List</h1>
      <p style={{ color: 'red', fontWeight: 700 }}>Hi, {userName}!</p>
      <p>{1 + 1}</p>
      <p>{userName.toUpperCase()}</p>
      <p>{new Date().toLocaleDateString()}</p>
      {/* comment */}
      <hr />
      <label htmlFor="email"></label>
      <input id="email" type="email" required />
    </>
  );
};

export default App;
