import React from 'react'
import './git.css'
import gitStats from './git.png'

const GitStats = () => {
  return (
    <div id='stats'>
      <div className="git-stats-container">
    <h1>Git <span>Stat's</span></h1>
 

    <div className='git-full'>
        <img src={gitStats} alt="git" />
    </div>
    <div className='git-grid'>
        <img src="https://camo.githubusercontent.com/5f08bbfaf986ff4ce19865fa13abbcfb4d0a7cef9198476eb00182f19e4a6d1f/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d616268697368656b6e313230382673686f775f69636f6e733d74727565266c6f63616c653d656e" alt="stats" />
    </div>
    <div className='git-grid'>
        <img src="https://camo.githubusercontent.com/3e501e84fa26a55d680f528b4bc1f0566e286a112c0aee010aee92bb7e19494d/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d616268697368656b6e313230382673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374" alt="language" />
    </div>
</div>
    </div>
  )
}

export default GitStats