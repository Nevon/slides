import React from 'react'

export default ({children, width = 100}) => <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
  <code style={{width}}>
    <pre>{children}</pre>
  </code>
</div>
