import css from './statistcs.module.css';

const Statistcs = () => {
  return (
    <div>
      <p className={css}>Statistcs</p>
      <ul>
        <li>Good:</li>
        <li>Neutral:</li>
        <li>Bad:</li>
      </ul>
    </div>
  );
};
export default Statistcs;
