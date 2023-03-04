import React, { useState } from 'react'
import Modal from '../Modal'

const ConfirmModal = ({ visible, closeModal, forceCloseModals }) => {
  if (!visible) return null

  return (
    <Modal closeModal={closeModal} className='w-fit h-fit px-6 py-4 dark:bg-background'>
      <div className='text-white'>
        <h2 className='capitalize text-red-400 font-bold'>are you sure?</h2>
        <p className='first-letter:capitalize'>this action will cancel uploading movie.</p>
      </div>
      <div className='flex gap-2 mt-4'>
        <button className='bg-red-400 text-white p-1 px-4 rounded capitalize' onClick={forceCloseModals}>
          confirm
        </button>
        <button className='bg-blue-400 text-white p-1 px-4 rounded capitalize' onClick={closeModal}>
          cancel
        </button>
      </div>
    </Modal>
  )
}

export default ConfirmModal
