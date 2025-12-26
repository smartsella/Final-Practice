const User = ({ data }) => {
  return (
    <div>
      {data.map((e, i) => (
        <div key={i}>
          <h1>{e.name}</h1>
          <h1>{e.age}</h1>
        </div>
      ))}
    </div>
  );
};

export default User;
