import React from 'react'
import Code from 'components/Code'

const exampleCode = `const foo = 'bar';`

export default () => <section>
  <section>
    <h1>Example slide</h1>
  </section>

  <section>
    <h2>Multiple slides</h2>
    <Code>{exampleCode}</Code>
  </section>
</section>
