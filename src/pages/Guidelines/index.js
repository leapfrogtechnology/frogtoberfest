import React from 'react';
import Faq from '../../components/Resources/components/Faq';

export default function Guidelines() {
  return (
    <section className="screen guidelines screen-pad" id="guidelines">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="tag">Field Documentation</p>
            <h2 className="h2">Guidelines</h2>
          </div>
        </div>

        <div className="faq-grid">
          <Faq q="Who can join?">
            <p>
              Open to anyone based in Nepal only. Join solo or as a team of 5 members maximum. At least one (1)
              member from the team should be physically present in Kathmandu valley for the demo day, if selected.
            </p>
          </Faq>
          <Faq q="How do I register?">
            <p>
              Registration runs September 16&ndash;29. You can submit your team and idea details here. Your public
              GitHub repo will be used to keep track of submissions throughout the challenge.
            </p>
          </Faq>
          <Faq q="What can I build?">
            <p>
              It&rsquo;s in the theme&mdash;Build with AI. Participants must have an implementation of AI to solve a
              real problem. Essentially, AI does real work inside the solution: processing, transforming, or
              reasoning over data as part of the system&rsquo;s core logic&mdash;not just generating a response that
              gets shown to a user.
            </p>
            <p>The minimum requirements every submission must meet to be eligible for judging:</p>
            <ul>
              <li>
                <strong>Public GitHub Repository</strong> &ndash; source code is public and includes everything
                needed to run and understand the solution.
              </li>
              <li>
                <strong>Documentation</strong> &ndash; README, architecture overview, technology details, and
                limitations/future improvements are all present and complete.
              </li>
              <li>
                <strong>Working Demo</strong> &ndash; a functional demonstration of the solution and its key
                capabilities is provided.
              </li>
              <li>
                <strong>Demo Video / Presentation</strong> &ndash; a short demo showing the problem, solution,
                workflow, and value.
              </li>
              <li>
                <strong>Qualifies as &ldquo;Build with AI&rdquo;</strong> &ndash; AI processes, transforms, or
                reasons over data as part of core logic&mdash;not just generates a displayed response.
              </li>
              <li>
                <strong>AI Usage Disclosure</strong> &ndash; a short written statement naming the exact
                file/function where AI output is consumed programmatically.
              </li>
            </ul>
          </Faq>
          <Faq q="What actually qualifies as AI usage?">
            <p>
              Examples of ways AI can be meaningfully integrated into your project, where AI output is processed,
              consumed, or acted on by another part of the system.
            </p>
            <ul>
              <li>
                <strong>Structured extraction</strong> &ndash; AI reads unstructured input (docs, logs, tickets,
                images) and outputs structured data (JSON, fields) that code consumes downstream.
              </li>
              <li>
                <strong>Decision / routing logic</strong> &ndash; AI classifies or scores something and the system
                acts differently based on that output, not just shown to a user to decide.
              </li>
              <li>
                <strong>Tool / function calling</strong> &ndash; AI selects and invokes tools or APIs as part of
                completing a task, with results fed back in.
              </li>
              <li>
                <strong>Multi-step pipeline</strong> &ndash; output of one AI call becomes input to another step (AI
                or non-AI) chaining.
              </li>
              <li>
                <strong>RAG / retrieval-grounded reasoning</strong> &ndash; AI&rsquo;s answer is conditioned on data
                the system retrieved and assembled, not just its training knowledge.
              </li>
              <li>
                <strong>Data transformation at scale</strong> &ndash; AI processes a batch or stream of records and
                results are aggregated, diffed, scored, or computed on afterward.
              </li>
            </ul>
          </Faq>
          <Faq q="What doesn&rsquo;t qualify?">
            <p>
              Common approaches that do not meet the &ldquo;Build with AI&rdquo; bar, typically where AI only
              generates an output for a user without driving any further action in the system.
            </p>
            <ul>
              <li>
                <strong>Chat UI wrapped around a single system prompt</strong> &ndash; output goes straight to the
                user, nothing downstream consumes it.
              </li>
              <li>
                <strong>&ldquo;Ask AI&rdquo; button that shows the raw response</strong> &ndash; no processing
                happens after generation.
              </li>
              <li>
                <strong>AI used only for the project&rsquo;s README / marketing copy / demo script</strong> &ndash;
                AI wasn&rsquo;t part of the product, only the submission artifact.
              </li>
              <li>
                <strong>Prompt engineering with no code around it</strong> &ndash; if the repo is essentially a
                system prompt plus an API call, it doesn&rsquo;t clear the bar.
              </li>
              <li>
                <strong>AI bolted onto an already-complete non-AI product</strong> &ndash; if deleting the AI call
                leaves the product fully functional, it fails the core test.
              </li>
              <li>
                <strong>Building a reusable skill, prompt library, or tool definition, with nothing using it</strong>
                &ndash; a skill on its own is not consumed by anything. Wiring that skill into an agent or pipeline
                that actually invokes it to do something that counts.
              </li>
            </ul>
          </Faq>
          <Faq q="Which AI tools should I use?">
            <p>
              This challenge is built on open, self-hostable AI. The whole point is testing what you can do without
              a paid API key. Build your entire pipeline on approved open tooling, start to finish.
            </p>
            <h4>Use</h4>
            <ul>
              <li>Locally hosted or self-hosted inference like Ollama, LM Studio, vLLM</li>
              <li>
                Open-weight models like Llama, Mistral, Qwen, DeepSeek, and similar; run locally or through a hosted
                inference provider
              </li>
              <li>Open-source agent frameworks and orchestration tools built around the above</li>
            </ul>
            <h4>Skip</h4>
            <p>
              Proprietary hosted APIs such as OpenAI/ChatGPT, Anthropic/Claude, Google Gemini, Azure OpenAI, and
              similar closed, paid services.
            </p>
            <p>
              This isn&rsquo;t just about your core AI logic. It covers the whole pipeline, including smaller
              auxiliary calls like embeddings or a secondary classification step. Keep everything open, everywhere.
            </p>
          </Faq>
          <Faq q="How do I set myself apart?">
            <p>
              <a
                href="https://github.com/chaitanyagiri/munder-difflin"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'underline' }}
              >
                Munder Difflin
              </a>{' '}
              is a strong reference for what &ldquo;Build
              with AI&rdquo; should look like &mdash; even though it&rsquo;s not itself a hackathon submission, it
              demonstrates the pattern cleanly.
            </p>
            <p>
              It&rsquo;s a desktop app that turns terminal-based coding agents (Claude Code, Codex, Gemini CLI, and
              others) into a coordinated multi-agent &ldquo;office,&rdquo; orchestrated by a supervisor agent the
              docs call &ldquo;Michael.&rdquo;
            </p>
            <ul>
              <li>
                <strong>What it does:</strong> Each spawned agent CLI runs as a real terminal process. A central
                orchestrator agent reads incoming requests, routes work to the right agent, and escalates only the
                items that need a human &mdash; spend, destructive operations, scope changes.
              </li>
              <li>
                <strong>Where AI is used:</strong> AI agents don&rsquo;t just respond in a chat window &mdash; they
                read from and write to a shared &ldquo;hive&rdquo;: per-agent memory, a mailbox system, and a
                blackboard, all backed by plain files in a local git repo.
              </li>
              <li>
                <strong>What happens to the AI&rsquo;s output:</strong> Agent output is consumed programmatically at
                every step &mdash; messages get routed between agents&rsquo; inboxes/outboxes by the harness, memory
                gets mined into a shared searchable index for recall across sessions, and the orchestrator parses
                requests to decide routing, escalation, or autonomous resolution.
              </li>
              <li>
                <strong>Why it passes the Core Test:</strong> If you remove the AI agents, there&rsquo;s no product
                &mdash; the entire system exists to coordinate what the agents decide and do. The AI&rsquo;s
                decisions directly drive real actions: task routing, memory writes, escalation to a human, git
                operations.
              </li>
            </ul>
            <p>
              Use this as the bar, not the ceiling. Your project doesn&rsquo;t need to orchestrate multiple coding
              agents. It just needs to use AI the same way: consuming its output as real input to what the system
              does next, not just showing it to the user.
            </p>
            <p>
              This example is referenced purely as an architectural pattern on how agents coordinate, route, and act
              on data, and not as a stack to copy wholesale. Its own implementation wraps proprietary CLIs (Claude
              Code, Codex, Gemini), which would not itself qualify under this constraint. Participants should apply
              the same coordination pattern using an approved open-source model as the backing engine throughout.
            </p>
          </Faq>
          <Faq q="What does a strong entry look like?">
            <ul>
              <li>Uses open-source or open-weight AI as an important part of how the project works</li>
              <li>Solves a clear problem or creates a useful experience</li>
              <li>Shows substantial technical work completed by the team</li>
              <li>Makes its source, license, model, and key dependencies easy to verify</li>
              <li>Has a working demonstration and a clear explanation of what the team built</li>
            </ul>
          </Faq>
          <Faq q="You own what you build.">
            <p>
              Participants retain ownership of the ideas and projects they submit. Leapfrog Technology may adapt,
              extend, or otherwise make use of a submitted project beyond the challenge &mdash; including for
              internal adoption or productization &mdash; only with the explicit consent of the participant(s) who
              own it. No idea is used without that consent.
            </p>
            <h4>Independent Development Carve-Out</h4>
            <p>
              Leapfrog Technology and its employees may independently research, develop, or work on ideas, products,
              or approaches that are similar to, or overlap with, a submitted project&mdash;whether developed
              before, during, or after the challenge. Participation in Frogtoberfest does not grant participants any
              claim over, or right to restrict, work that Leapfrog develops independently, even where similarities
              exist. This carve-out applies regardless of whether Leapfrog had access to a participant&rsquo;s
              submission, provided the resulting work was not derived from that submission without the consent
              described above.
            </p>
          </Faq>
        </div>
      </div>
    </section>
  );
}
