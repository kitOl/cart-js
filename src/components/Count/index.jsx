import "./style.scss";

const Count = ({ count, id, changeValue, increase, decrease }) => {
  return (
    <div className="count">
      <div className="count__box">
        <input
          onChange={(e) => {
            changeValue(id, +e.target.value);
          }}
          type="number"
          className="count__input"
          min="1"
          max="100"
          value={count}
        />
      </div>
      <div className="count__controls">
        <button
          type="button"
          className="count__up"
          onClick={() => {
            increase(id);
          }}
        >
          <img src="./img/icons/arrow-up.svg" alt="Увеличить" />
        </button>

        <button
          type="button"
          className="count__down"
          onClick={() => {
            decrease(id);
          }}
        >
          <img src="./img/icons/arrow-dwn.svg" alt="Уменьшить" />
        </button>
      </div>
    </div>
  );
};

export default Count;
