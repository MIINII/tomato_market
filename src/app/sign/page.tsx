export default function Page() {
  return (
    <>
      {/* 폼폼폼 */}
      <form className='flex flex-col space-y-2  p-5 '>
        <input type='text' required placeholder='이름' className='border p-1 peer border-gray-400 rounded-md  focus-within:bg-blue-100' />
        {/* <input
          type='password'
          required
          placeholder='비밀번호'
          className='border p-1 peer border-gray-400 rounded-md  focus-within:bg-blue-100 invalid:border-red-500 disabled:opacity-0 valid:border-2,border-teal-500'
        /> */}

        <span className='hidden peer-invalid:block peer-invalid:text-red-500'>빈칸을 채워주세요</span>
        <span className='hidden peer-valid:block peer-valid:text-teal-500'>멋진 이름이네요!</span>
        <span className='hidden peer-hover:block peer-hover:text-amber-500'>방가방가</span>
        <input type='submit' value='Login' className='bg-white' />
      </form>

      {/* 설문조사 */}
      <details className='select-none open:text-white open:bg-indigo-200'>
        <summary className='cursor-pointer'>머선 음식을 젤 좋아하니?</summary>
        <span className='selection:bg-indigo-500 selection:text-white'>핏쨔</span>
      </details>

      {/* 리스트 */}
      <div className='flex flex-col space-y-2 p-5'>
        <ul className='list-disc marker:text-teal-500'>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>

        <input
          type='file'
          className='file:cursor-pointer file:hover:text-blue-400 file:hover:bg-white file:hover:border-2 file:hover:border-blue-400 file:transition-colors file:border-0 file:rounded-xl  file:px-5 file:bg-blue-400 file:text-white '
        />
      </div>

      {/* letter */}
      <div>
        <p className='first-letter:text-7xl first-letter:hover:text-blue-700 first-line'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, libero nulla fugiat voluptatum expedita minus hic magni a provident blanditiis fuga at cupiditate velit
          aliquid sequi deleniti laboriosam praesentium qui!
        </p>
      </div>
    </>
  );
}
