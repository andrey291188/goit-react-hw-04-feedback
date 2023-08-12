
// import Notification from 'components/Notification/Notification.jsx';
import PropTypes from 'prop-types';
import css from './section.module.css';

const Section = ({ children }) => {
  
  return (
    <section>
      <h2 className={css.title_feedback}>Please leave feedback</h2>
      {children[0]}
      <h2 className={css.title_feedback}>Statistics</h2>
      {children[1]}
    </section>
  );
};

export default Section;

Section.propTypes = {
  children: PropTypes.node,
}