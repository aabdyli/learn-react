import React, { useState, useLayoutEffect } from 'react';

let styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px'
  }
}

function Loading(props) {
  const [text, setText] = useState(props.text)
  
  useLayoutEffect(() => {
    let stopper = `${props.text}...`
    let interval = window.setInterval(() => {
      if (text === stopper)
        setText(props.text)
      else
        setText(text + '.')
    }, props.refresh)
    return () => window.clearInterval(interval)
  }, [text, props])
  
  return (
    (
      <p style={styles.content}>
        {text}
      </p>
    )
  )
}

export default Loading;