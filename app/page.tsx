'use client'

import { useMemo, useState } from 'react'

type NavItem = { label: string; icon: string; badge?: string }

const nav: NavItem[] = [
  { label: 'Overview', icon: '⌂' },
  { label: 'Inbox', icon: '▣', badge: '7' },
  { label: 'Commitments', icon: '↗' },
  { label: 'PromiseGraph', icon: '◎' },
  { label: 'Transactions', icon: '⇄' },
  { label: 'Evidence', icon: '□' },
  { label: 'Investigations', icon: '⌕', badge: '3' },
]

const secondary = [
  { label: 'Customers', icon: '♙' },
  { label: 'Reports', icon: '▤' },
  { label: 'Policies', icon: '◫' },
]

const activities = [
  ['09:42', 'Promise detected', 'Ava Chen committed to “send revised contract”', 'violet'],
  ['09:31', 'Payment matched', 'Razorpay txn linked to ACME renewal', 'green'],
  ['09:18', 'Evidence added', 'Delivery receipt uploaded by Maya Singh', 'blue'],
  ['08:56', 'Risk surfaced', 'Invoice #INV-0291 is 6 days overdue', 'amber'],
]

const commitments = [
  { name: 'Revised MSA for ACME Corp', owner: 'Ava Chen', due: 'Today, 4:00 PM', risk: 'At risk', score: 92, color: 'violet' },
  { name: 'Onboarding session · Northstar', owner: 'Maya Singh', due: 'Tomorrow', risk: 'On track', score: 64, color: 'blue' },
  { name: 'Refund for duplicate charge', owner: 'Finance bot', due: 'Sep 08', risk: 'On track', score: 28, color: 'green' },
]

export default function Home() {
  const [active, setActive] = useState('Overview')
  const [query, setQuery] = useState('')
  const [timeframe, setTimeframe] = useState('This week')
  const [showToast, setShowToast] = useState(false)

  const visibleCommitments = useMemo(() => commitments.filter((item) => item.name.toLowerCase().includes(query.toLowerCase())), [query])

  function selectNav(label: string) {
    setActive(label)
    setShowToast(true)
    window.setTimeout(() => setShowToast(false), 1800)
  }

  return (
    <div className="commit-app">
      <aside className="sidebar">
        <div className="brand"><div className="brand-mark">C</div><span>COMMIT</span><span className="brand-beta">BETA</span></div>
        <div className="workspace"><div className="workspace-avatar">AC</div><div><b>Acme Corporation</b><small>Operations workspace</small></div><span className="chevron">⌄</span></div>
        <div className="nav-section"><small className="section-label">WORKSPACE</small>{nav.map((item) => <button key={item.label} onClick={() => selectNav(item.label)} className={`nav-item ${active === item.label ? 'active' : ''}`}><span className="nav-icon">{item.icon}</span><span>{item.label}</span>{item.badge && <em>{item.badge}</em>}</button>)}</div>
        <div className="nav-section"><small className="section-label">MANAGE</small>{secondary.map((item) => <button key={item.label} onClick={() => selectNav(item.label)} className={`nav-item ${active === item.label ? 'active' : ''}`}><span className="nav-icon">{item.icon}</span><span>{item.label}</span></button>)}</div>
        <div className="sidebar-bottom"><div className="agent-card"><div className="agent-orb">✦</div><div><b>Agent Guard</b><small>Monitoring 24 workflows</small></div><span className="status-dot" /></div><button className="nav-item" onClick={() => selectNav('Settings')}><span className="nav-icon">⚙</span><span>Settings</span></button><div className="user-row"><div className="avatar">JD</div><div><b>Jordan Davis</b><small>Admin</small></div><span>•••</span></div></div>
      </aside>

      <main className="main-content">
        <header className="topbar"><div className="breadcrumbs"><span>Workspace</span><i>/</i><b>{active}</b></div><div className="top-actions"><label className="search"><span>⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search anything" /><kbd>⌘ K</kbd></label><button className="icon-button">?</button><button className="icon-button notification">◌<i /></button><div className="top-avatar">JD</div></div></header>
        <div className="content-wrap">
          <div className="page-heading"><div><div className="eyebrow"><span className="pulse" /> LIVE SIGNALS <span className="muted">· Last synced just now</span></div><h1>Good morning, Jordan</h1><p>Here’s what’s happening across your commitments and cash flow.</p></div><div className="heading-actions"><button className="ghost-button">Export <span>↧</span></button><select value={timeframe} onChange={(e) => setTimeframe(e.target.value)}><option>This week</option><option>Last 30 days</option><option>This quarter</option></select></div></div>

          <section className="metric-grid"><Metric label="Commitment health" value="87%" change="+4.2%" sub="vs. last week" tone="violet" graphic="bars" /><Metric label="Cash collected" value="₹24.8L" change="+12.8%" sub="vs. last week" tone="green" graphic="line" /><Metric label="Open commitments" value="42" change="8 due soon" sub="next 7 days" tone="amber" graphic="ring" /><Metric label="Evidence coverage" value="94.6%" change="+2.1%" sub="vs. last week" tone="blue" graphic="bars" /></section>

          <div className="dashboard-grid"><section className="panel promise-panel"><div className="panel-header"><div><h2>PromiseGraph</h2><p>How commitments move through your business</p></div><button className="more">•••</button></div><div className="graph"><div className="graph-labels"><span>COMMITTED</span><span>IN MOTION</span><span>RESOLVED</span></div><div className="graph-lines"><div className="graph-line line-one"><span className="node node-lg">42</span><span className="connector c1" /><span className="node node-md">31</span><span className="connector c2" /><span className="node node-sm">18</span></div><div className="graph-line line-two"><span className="node node-md blue-node">28</span><span className="connector c3" /><span className="node node-sm blue-node">22</span><span className="connector c4" /><span className="node node-xs blue-node">11</span></div><div className="graph-line line-three"><span className="node node-sm green-node">16</span><span className="connector c5" /><span className="node node-xs green-node">14</span><span className="connector c6" /><span className="node node-xs green-node">9</span></div></div><div className="graph-legend"><span><i className="dot violet-bg" /> Financial</span><span><i className="dot blue-bg" /> Delivery</span><span><i className="dot green-bg" /> Customer</span><span className="graph-total">97 total signals</span></div></div></section>

            <section className="panel health-panel"><div className="panel-header"><div><h2>Business health</h2><p>Composite signal across your workspace</p></div><button className="more">•••</button></div><div className="health-score"><div className="score-ring"><div><strong>87</strong><small>/100</small></div></div><div><span className="health-status"><i /> Healthy</span><p>Trending upward<br /><b>+4.2%</b> this week</p></div></div><div className="health-bars"><HealthBar label="Commitment delivery" value={91} color="violet" /><HealthBar label="Payment reliability" value={84} color="green" /><HealthBar label="Evidence quality" value={94} color="blue" /></div></section></div>

          <div className="lower-grid"><section className="panel commitments-panel"><div className="panel-header"><div><h2>Commitments needing attention</h2><p>Prioritized by impact and risk</p></div><button className="link-button" onClick={() => selectNav('Commitments')}>View all <span>→</span></button></div><div className="table-head"><span>COMMITMENT</span><span>OWNER</span><span>DUE</span><span>HEALTH</span></div>{visibleCommitments.length ? visibleCommitments.map((item) => <div className="commitment-row" key={item.name}><div className="commitment-name"><span className={`mini-icon ${item.color}`}>↗</span><div><b>{item.name}</b><small>Updated 18 min ago</small></div></div><span>{item.owner}</span><span>{item.due}</span><span className={`risk ${item.risk === 'At risk' ? 'risk-high' : 'risk-ok'}`}><i />{item.risk}</span></div>) : <div className="empty-state">No commitments match “{query}”.</div>}</section>
            <section className="panel activity-panel"><div className="panel-header"><div><h2>Recent activity</h2><p>Signals from the last 24 hours</p></div><button className="more">•••</button></div><div className="activity-list">{activities.map(([time, title, text, color]) => <div className="activity" key={time}><span className={`activity-icon ${color}`}>✦</span><div><b>{title}</b><p>{text}</p></div><time>{time}</time></div>)}</div><button className="activity-link" onClick={() => selectNav('Inbox')}>Open activity inbox <span>→</span></button></section></div>

          <section className="insight-banner"><div className="insight-icon">✦</div><div><b>COMMIT insight</b><p>3 commitments are likely to slip without follow-up in the next 48 hours. <button onClick={() => selectNav('Investigations')}>Review recommendations <span>→</span></button></p></div><button className="dismiss" onClick={(e) => e.currentTarget.parentElement?.remove()}>×</button></section>
          <footer><span>COMMIT AI <b>•</b> Intelligence you can act on.</span><span>System status <i className="status-dot" /> All systems operational</span></footer>
        </div>
        {showToast && <div className="toast">Opened {active}<span>×</span></div>}
      </main>
    </div>
  )
}

function Metric({ label, value, change, sub, tone, graphic }: { label: string; value: string; change: string; sub: string; tone: string; graphic: string }) { return <div className="metric-card"><div><span className="metric-label">{label}</span><strong>{value}</strong><span className={`metric-change ${tone}`}>{change} <small>{sub}</small></span></div><div className={`metric-graphic ${graphic} ${tone}`}>{graphic === 'ring' ? <div className="metric-ring"><span>8</span></div> : <><i /><i /><i /><i /><i /></>}</div></div> }
function HealthBar({ label, value, color }: { label: string; value: number; color: string }) { return <div className="health-bar"><div><span>{label}</span><b>{value}%</b></div><div className="bar-track"><i className={color} style={{ width: `${value}%` }} /></div></div> }
