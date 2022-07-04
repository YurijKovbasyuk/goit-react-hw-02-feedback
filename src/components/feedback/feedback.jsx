import css from 'components/feedback/feedback.module.css';
import Button from 'helpers/button';
import Statistcs from 'components/statistcs/statistcs';

const Feedback = () => {
  return (
    <div>
      <p className={css}>Please leave feedback</p>
      <Button></Button>
      <Statistcs></Statistcs>
    </div>
  );
};

export default Feedback;
