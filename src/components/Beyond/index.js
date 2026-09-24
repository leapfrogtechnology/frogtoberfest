import React from 'react';
import Statement from './components/Statement';
import Reason from './components/Reason';
import mechCrossed from '../../assets/images/mech-crossed-v2.png';

export default function Beyond() {
  return (
    <section className="screen beyond screen-pad" id="beyond">
      <div className="wrap">
        <div className="beyond-inner">
          <div className="beyond-sticky">
            <div className="sec-head">
              <div>
                <p className="tag">Screen 01 &middot; Why This Year Is Different</p>
                <h2 className="h2">
                  Beyond
                  <br />
                  Contributing
                </h2>
              </div>
            </div>

            <div className="beyond-figure">
              <picture>
                <img src={mechCrossed} alt="Frog Mecha, arms crossed" loading="lazy" decoding="async" />
              </picture>
            </div>
          </div>

          <div className="beyond-copy">
            <p className="lede lg">
              For years, Frogtoberfest was about making contributions. This year, it&rsquo;s about creating something of
              your own.
            </p>

            <div className="statement-list">
              <Statement num="01">
                You&rsquo;ll have about a month to build an open source, AI-powered product of your choice.
              </Statement>
              <Statement num="02">
                The catch? Your product has to earn the term &ldquo;AI-powered.&rdquo; It should decide, use tools or
                external systems, hold context, or take action to complete a&nbsp;task.
              </Statement>
              <Statement num="03">
                No fixed problem statement. No prescribed domain. Just a meaningful problem worth solving &ndash; and
                the freedom to explore it your way.
              </Statement>
              <Statement num="04">
                We&rsquo;re not counting commits. We&rsquo;re looking for thoughtful ideas, strong engineering,
                meaningful open-source contributions, and real-world impact.
              </Statement>
            </div>

            <p className="tag tag-lg">
              Commit to Something Real
            </p>
            <div className="reasons">
              <Reason num="01" title="A Month of Code">
                Four real weeks to actually think, build, and ship something for the Nepali community.
              </Reason>
              <Reason num="02" title="Grow as a Builder">
                Build your AI capability with hands-on experimentation, not just textbook knowledge.
              </Reason>
              <Reason num="03" title="Win It" hi>
                The standout project takes home a grand prize, with recognitions for Top 5.
              </Reason>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
