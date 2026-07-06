'use client';

import s from './style.module.scss';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`${s.faqItem} ${isOpen ? s.open : ''}`}>
      <button className={s.question} onClick={onClick} aria-expanded={isOpen}>
        <span>{question}</span>
        <span className={`${s.chevron} ${isOpen ? s.chevronOpen : ''}`} />
      </button>
      <div className={s.answerWrapper} aria-hidden={!isOpen}>
        <div className={s.answer}>{answer}</div>
      </div>
    </div>
  );
};

export default FAQItem;
