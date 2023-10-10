export default function Home() {
  return (
    <div className='bg-slate-400 py-10 px-10 grid gap-10 min-h-screen'>
      {/* 체크아웃 */}
      <div className='bg-white p-6 rounded-3xl shadow-xl'>
        <span className='font-semibold text-2xl'>상품 선택</span>

        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className='flex justify-between my-2 odd:bg-blue-50 even:bg-slate-100'>
              <span className='text-gray-500'>회색 의자</span>
              <span className='font-semibold'>100,000원</span>
            </div>
          ))}
        </ul>
        <ul>
          {['a', 'b', 'c', ''].map((c, i) => (
            <li className='empty:bg-red-50 py-2' key={i}>
              {c}
            </li>
          ))}
        </ul>

        <div className='flex justify-between mt-2 pt-2 border-t-2 border-dashed '>
          <span>총 금액</span>
          <span className='font-semibold'>200,000원</span>
        </div>
        <div></div>

        <button className='mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-1/2 mx-auto hover:bg-blue-700 active:bg-slate-700'>결제하기</button>
      </div>

      {/* profile */}
      <div className='bg-white overflow-hidden rounded-3xl shadow-xl'>
        <div className='bg-blue-500 p-6 pb-14'>
          <span className='text-white text-2xl font-semibold'>프로필</span>
        </div>
        <div className='rounded-3xl p-6 bg-white relative -top-5'>
          <div className='flex relative -top-16 items-end justify-between'>
            <div className='flex flex-col items-center'>
              <span className='text-sm text-gray-500'>주문수</span>
              <span className='font-medium'>340</span>
            </div>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdvWgnzOQOnkYba1z6a2lQ1UxQQw2a6Am3JA&usqp=CAU'
              alt='mimoji'
              className='w-24 h-24 rounded-full shadow-xl'
            />
            <div className='flex flex-col items-center'>
              <span className='text-sm text-gray-500'>소비</span>
              <span className='font-medium'>$340</span>
            </div>
          </div>
          <div className='relative  flex flex-col items-center -mt-10 -mb-5'>
            <span className='text-lg font-medium'>민수</span>
            <span className='text-sm text-gray-500'>대한민국</span>
          </div>
        </div>
      </div>

      {/* 의자 */}
      <div className='bg-white p-6 rounded-3xl shadow-xl'>
        <div className='flex mb-5 justify-between items-center'>
          <span>⬅️</span>
          <div className='space-x-3'>
            <span>⭐️ 4.9</span>
            <span className='shadow-xl p-2 rounded-md'>💖</span>
          </div>
        </div>
        <img src='https://i.ibb.co/5963kz8/chair.jpg' alt='chair' />
        <div className='flex flex-col'>
          <span className='font-medium text-xl'>Swoon Lounge</span>
          <span className='text-xs text-gray-500'>Chair</span>
          <div className='mt-3 mb-5 flex justify-between items-center'>
            <div className='space-x-2'>
              <button className='w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition' />
              <button className='w-5 h-5 rounded-full bg-slate-500 focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition' />
              <button className='w-5 h-5 rounded-full bg-amber-800 focus:ring-2 focus:ring-offset-2 focus:ring-amber-800 transition' />
            </div>
            <div className='flex items-center space-x-5'>
              <button className=' rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500'>-</button>
              <span>1</span>
              <button className=' rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500'>+</button>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <span className='font-medium text-2xl'>$450</span>
            <button className='bg-blue-500 py-2 px-8 text-center text-xs text-white rounded-lg'>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}