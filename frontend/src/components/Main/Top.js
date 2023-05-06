const Top = () => {
  return (
    <div
      id='main-img'
      className='flex flex-col items-center justify-center my-3 text-white opacity-90 rounded-md'
    >
      <div className='text-5xl '>
        {'Subscribe + Save 10% 0ff'.toUpperCase()}
      </div>
      <div className='mt-3'>
        <button
          className='border border-black rounded-sm bg-black bg-opacity-70 py-2 px-8 hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          type='button'
        >
          {'Shop Coffees'.toUpperCase()}
        </button>
      </div>
    </div>
  )
}
export default Top
