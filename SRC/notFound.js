export function NotFound() {
  return (
    <>
      <div className="not-found-data">
        <h1>OOps... Not founds</h1>
        <img src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png" />
      </div>
    </>
  );
}

export function Shimmer() {
  return (
    <>
      <div>
        <h1 className="dish-heading">Dish Menu</h1>
      </div>
      <div className="shimmer-cards-list container">
        {Array(15)
          .fill("")
          .map((val) => {
            return <div className="shimmer-card"></div>;
          })}
      </div>
    </>
  );
}
