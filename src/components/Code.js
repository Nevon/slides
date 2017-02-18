import React from 'react'

export default ({children}) => <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
  <code>
    <pre>{children}</pre>
  </code>
</div>
