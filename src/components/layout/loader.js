import React from 'react'
import loader from './loading.gif'

function Loader() {
  return (
    <div>
      <img
        src={loader}
        style={{ width: '200px', margin: 'auto', display: 'block' }}
        alt="Loading..."
      />
    </div>
  )
}

export default Loader;
