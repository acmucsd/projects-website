import { useState } from 'react';
import type { ReactNode } from 'react';
import s from './style.module.scss';
import FAQItem from './faq';

// list of questions and answers
const faqs: { question: ReactNode; answer: ReactNode }[] = [
  {
    question: 'Do I need to be on campus to participate in Summer Projects?',
    answer: 'No! Meetings throughout the summer are 100% remote!',
  },
  {
    question: 'Do I need to be on campus to participate in Fall/Winter/Spring Projects?',
    answer: 'Yes!',
  },
  {
    question: 'How long is the program?',
    answer: (
      <>
        <p><strong>Summer:</strong> Week of June 22, 2026 to Week 1 of Fall Quarter</p>
        <p><strong>Fall:</strong> Week 3 of Fall Quarter to Week 1 of Winter Quarter</p>
        <p><strong>Winter:</strong> Week 3 of Winter Quarter to Week 1 of Spring Quarter</p>
        <p><strong>Spring:</strong> Week 1 of Spring Quarter to Week 10 of Spring Quarter</p>
      </>
    ),
  },
  {
    question: 'What is the time commitment per week?',
    answer: '5-10 hours!',
  },
  {
    question: "What if I've never done a project before?",
    answer: (
      <>
        No worries! This is a super great <u>beginner-friendly</u> opportunity to apply your course level knowledge on a real project and level up your resume!
      </>
    ),
  },
  {
    question: (
      <>
        What do I <u>actually</u> do if I am accepted into ACM Projects?
      </>
    ),
    answer: (
      <ul>
        <li>Work with your team and mentors to come up with a project idea to complete by the end of the program</li>
        <li>Meet and complete deliverables every week</li>
        <li>Progress update meetings (stand-ups) with the Projects community every month</li>
        <li>Showcase your project in person during Week 1 of Fall Quarter</li>
        <li>Make new friends with likeminded interests!</li>
        <li>Make a project you can passionately speak about!</li>
      </ul>
    ),
  },
  {
    question: 'What do mentors do?',
    answer: (
      <ul>
        <li>Guide team through entire project timeline, including brainstorming, research, development, testing, and improvement</li>
        <li>Prepare and lead team meetings and delegate weekly tasks</li>
        <li>Ensure project can and will be completed by the end of the program</li>
      </ul>
    ),
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={s.faqSection} id="faq">
      <h2 className={s.heading}>FAQs</h2>
      <div className={s.faqList}>
        {faqs.map((faq, i) => (
          <FAQItem
            key={i}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === i}
            onClick={() => toggle(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
