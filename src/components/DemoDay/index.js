import React from 'react';

const WINNER = {
  name: 'Zyven',
  team: 'Team of 4',
  repo: 'https://github.com/VirajSawad1021/Zyven',
  demo: 'https://drive.google.com/drive/folders/17Z5dbSa2UQmzx8eyQ6716iMhUfkipIRD'
};

const FINALISTS = [
  {
    name: 'Atlas',
    team: 'Team of 4',
    repo: 'https://github.com/ghostuf/Atlas',
    demo: 'https://www.youtube.com/watch?v=Sz50TpRbgHI'
  },
  {
    name: 'ResearchForge',
    team: 'Team of 3',
    repo: 'https://github.com/loaferct/ResearchForge',
    demo: 'https://www.youtube.com/watch?v=bPLNDaEsZp0'
  },
  {
    name: 'Simblip',
    team: 'Team of 5',
    repo: 'https://github.com/RohanS358/simblip_ai',
    demo: 'https://drive.google.com/drive/folders/17MjVkoVp-7nJ-cK5UJHrFZ78Bv4oO-H9?usp=sharing'
  },
  {
    name: 'Oovi',
    team: 'Solo',
    repo: 'https://github.com/devsdenepal/Oovi',
    demo: 'https://drive.google.com/file/d/1VxurXwTc1uThPj-WImgsFr2tC714ZByo/view?usp=sharing'
  }
];

export default function DemoDay() {
  return (
    <section className="screen demoday screen-pad" id="finalists">
      <div className="blueprint-grid on-dark" aria-hidden="true"></div>
      <div className="wrap demoday-inner">
        <header className="results-head">
          <p className="tag">Screen 05 &middot; Final Transmission</p>
          <div className="results-title">
            <h2 className="h2">Finalists</h2>
            <p className="results-event">Five finalists. One grand prize.</p>
          </div>
        </header>

        <article className="winner">
          <span className="corner tl" aria-hidden="true"></span>
          <span className="corner br" aria-hidden="true"></span>
          <p className="winner-award">
            <span className="chip" aria-hidden="true"></span> Grand Prize &middot; Best AI Project
            <span className="winner-team">{WINNER.team}</span>
          </p>
          <div className="winner-body">
            <h3>{WINNER.name}</h3>
            <div className="winner-actions">
              <a className="btn btn-primary" href={WINNER.repo} target="_blank" rel="noopener noreferrer">
                Repo
                <span className="arrow" aria-hidden="true">&rarr;</span>
                <span className="sr-only">: {WINNER.name} (opens in a new tab)</span>
              </a>
              <a className="btn btn-outline" href={WINNER.demo} target="_blank" rel="noopener noreferrer">
                Demo
                <span className="arrow" aria-hidden="true">&rarr;</span>
                <span className="sr-only">: {WINNER.name} (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </article>

        <ul className="finalists">
          {FINALISTS.map(f => (
            <li key={f.name} className="finalist">
              <h3>{f.name}</h3>
              <span className="finalist-label">
                <span className="chip" aria-hidden="true"></span> Finalist &middot; {f.team}
              </span>
              <div className="finalist-links">
                <a className="btn btn-outline" href={f.repo} target="_blank" rel="noopener noreferrer">
                  Repo
                  <span className="arrow" aria-hidden="true">&rarr;</span>
                  <span className="sr-only">: {f.name} (opens in a new tab)</span>
                </a>
                <a className="btn btn-outline" href={f.demo} target="_blank" rel="noopener noreferrer">
                  Demo
                  <span className="arrow" aria-hidden="true">&rarr;</span>
                  <span className="sr-only">: {f.name} (opens in a new tab)</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
