import React from 'react'
import './landing.css'

export default function Landing({onEnter}){
  return (
    <div className="lp-root">
      <header className="lp-nav">
        <div className="lp-logo"><div className="lp-b">⚡</div><div className="lp-name">FinPilot</div></div>
        <div className="lp-cta">
          <button className="btnG">Sign in</button>
          <button className="btnP" onClick={onEnter}>Get started</button>
        </div>
      </header>
      <main className="lp-hero">
        <div className="lp-pill">Real Claude AI · Privacy-first</div>
        <h1>Control Your Money<br/><span className="accent">Intelligently.</span></h1>
        <p>An AI-powered financial operating system that tracks, predicts, and optimizes your money.</p>
        <div className="lp-actions"><button className="btnP" onClick={onEnter}>Launch FinPilot →</button><button className="btnG">Watch demo</button></div>
      </main>
      <section className="lp-feat">
        <div className="glass f"> <h3>Real Claude AI</h3><p>Genuine AI advisor powering insights.</p></div>
        <div className="glass f"> <h3>Bank-grade Security</h3><p>Read-only access and encryption.</p></div>
        <div className="glass f"> <h3>Smart Goal Saving</h3><p>Automated vaults with approval-first workflow.</p></div>
      </section>
      <footer className="lp-foot">© FinPilot — interactive preview</footer>
    </div>
  )
}
