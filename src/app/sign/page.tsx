export default function Page() {
  return (
    <>
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
    </>
  );
}
