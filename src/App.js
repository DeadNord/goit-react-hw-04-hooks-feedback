// import React from 'react';
import { useState, useMemo } from 'react';

import FeedbackOptions from './components/feedback/controls/FeedbackOptions';
import Section from './components/feedback/section/Section';
import Statistics from './components/feedback/statistics/Statistics';
import Notification from './components/feedback/notification/Notification';

function Feedback() {
  const [counterGood, setCounterGood] = useState(0);
  const [counterNeutral, setCounterNeutral] = useState(0);
  const [counterBad, setCounterBad] = useState(0);

  const handleCounterGoodInc = () => {
    setCounterGood(state => state + 1);
  };

  const handleCounterNeutralInc = () => {
    setCounterNeutral(state => state + 1);
  };

  const handleCounterBadInc = () => {
    setCounterBad(state => state + 1);
  };

  const counterTotal = useMemo(() => {
    const total = counterGood + counterNeutral + counterBad;
    const positivePerc = Math.round((counterGood / total) * 100);
    return { total, positivePerc };
  }, [counterGood, counterNeutral, counterBad]);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          handleCounterGoodInc={handleCounterGoodInc}
          handleCounterNeutralInc={handleCounterNeutralInc}
          handleCounterBadInc={handleCounterBadInc}
        />
      </Section>
      <Section title="Statistics">
        {counterTotal.total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={counterGood}
            neutral={counterNeutral}
            bad={counterBad}
            total={counterTotal.total}
            positivePercentage={counterTotal.positivePerc}
          />
        )}
      </Section>
    </>
  );
}
// }
export default Feedback;
