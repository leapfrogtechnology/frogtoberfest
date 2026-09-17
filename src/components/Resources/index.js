import React from 'react';
import { Link } from 'react-router-dom';
import Faq from './components/Faq';

export default function Resources() {
  return (
    <section className="screen resources screen-pad" id="resources">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="tag">Screen 04 &middot; Field Manual</p>
            <h2 className="h2">FAQs</h2>
          </div>
          <span className="sec-head-right">FAQ &middot; 11 Entries</span>
        </div>

        <div className="faq-grid">
          <Faq q="Is this a virtual or in-person event?">
            <p>The challenge will take place virtually, so you can build your project from wherever you are.</p>
            <p>
              However, the Demo Day will be held in-person at Leapfrog&rsquo;s Nepal office, where the top 5 teams
              will pitch and showcase their products.
            </p>
          </Faq>
          <Faq q="Who&rsquo;s eligible?">
            <p>
              Open to anyone based in Nepal only, since this challenge has always been about fostering the Nepali open
              source community.
            </p>
          </Faq>
          <Faq q="Do I need a team, or can I go solo?">
            <p>Join solo or as a team of 5 members maximum.</p>
            <p>
              Some of the best products are built by one person chasing an idea alone, while others come together as a
              team. Both are welcome, and neither gets special treatment in judging.
            </p>
          </Faq>
          <Faq q="What do I need to register?">
            <p>Your team, idea, and a public repo. Registration runs September 16&ndash;29.</p>
          </Faq>
          <Faq q="I don&rsquo;t have a concrete idea right now. What do I submit?">
            <p>Frogtoberfest is all about exploring and experimenting. This is a platform for you to get started.</p>
            <p>
              You can submit a vague idea or concept along with your repo, and build it throughout the challenge
              duration.
            </p>
          </Faq>
          <Faq q="Does my project need to be built from scratch?">
            <p>
              How you build it is up to you, but there&rsquo;s a hard rule on what you <em>build it with</em>. Since
              it&rsquo;s <strong>open-source</strong> and meant to <strong>open</strong> from end-to-end, only
              open-source or open-weight AI qualifies (e.g. Llama, Mistral, Qwen, DeepSeek, self-hosted or via a hosted
              provider).
            </p>
            <p>
              Proprietary APIs like OpenAI, Claude, or Gemini are discouraged, even for small auxiliary calls. Document
              what you used, name the model, and disclose exactly where in your code its output gets consumed.
            </p>
          </Faq>
          <Faq q="Will Leapfrog provide funding, credits, or API keys?">
            <p>
              For starters, Leapfrog will host a virtual kickoff session with a webinar on How to Build with AI to help
              you navigate through the challenge.
            </p>
            <p>
              However, financial support or API keys will <strong>not</strong> be provided.
            </p>
          </Faq>
          <Faq q="What actually counts as an &ldquo;open source, AI-powered product&rdquo;?">
            <p>
              The AI has to do real work inside your product, not just talk to the user. A baseline check would be: if
              you deleted the AI call from your codebase, would the product still do its job? If yes, it doesn&rsquo;t
              qualify.
            </p>
            <p>
              If no, AI is processing, deciding, or acting on something the rest of your system depends on, you&rsquo;re
              in.
            </p>
            <p>
              For more details, check out the{' '}
              <Link to="/guidelines" style={{ textDecoration: 'underline' }}>
                Guidelines
              </Link>{' '}
              page.
            </p>
          </Faq>
          <Faq q="What if I don&rsquo;t finish by Week 4?">
            <p>
              Submit what you have, and document what&rsquo;s missing. Evaluation weighs impact and quality, not just
              completeness, but without a public repo, a working demo, and documentation, there&rsquo;s nothing for
              judges to evaluate.
            </p>
          </Faq>
          <Faq q="How many teams make it to the final demo?">
            <p>
              Five (5). Every entry gets run through the eligibility gate and quick screen, but the top 5 move on to
              present live on October 30.{' '}
              <strong>
                At least one (1) member from the team should be physically present in Kathmandu valley for this.
              </strong>
            </p>
          </Faq>
          <Faq q="I have a question. What should I do?">
            <p>
              Email{' '}
              <a href="mailto:events@lftechnology.com" style={{ textDecoration: 'underline' }}>
                events@lftechnology.com
              </a>
            </p>
          </Faq>
        </div>
      </div>
    </section>
  );
}
