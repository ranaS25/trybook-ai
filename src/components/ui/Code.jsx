import React from 'react'

const Code = ({ code}) => {
  return (
    <pre className="p-4 border rounded border-border-light dark:border-borderColor bg-codeBackground-light dark:bg-codeBackground text-text-light dark:text-text text-wrap break-words">
      <code>
        { code}
      </code>
    </pre>
  )
}

export default Code