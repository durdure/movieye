import React from 'react'
import './playpage.css'


const PlayPage = () => {
  return (
    <section>
      <div></div>
      <div className='comment-list'>
        <div className='main-ctrls'>
          <button className='delete-all-btn ctrl-btns'>
          Delete all comments
          </button>
          <div className='comment-bar hidden'>
            <input className='comment-input' />
            <button className='close-new-btn secondary-ctrl-btns'>
              Close
            </button>
            <button className='add-new-btn ctrl-btns"'>
              Add
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlayPage