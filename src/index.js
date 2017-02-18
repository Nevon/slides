import React from 'react'
import { render } from 'react-dom'
import Reveal from 'reveal.js'
import 'reveal.js/css/reveal.css'
import 'reveal.js/css/theme/night.css'
import 'index.css'

import ExampleSlide from 'slides/ExampleSlide'

function Slides () {
  return <div className='slides'>
    <ExampleSlide />
  </div>
}

render(
  <Slides />,
  document.getElementById('root'),
  () => Reveal.initialize({
    controls: false,
    progress: false,
    history: true,
    transitionSpeed: 'fast'
  })
)
