# 🍅 토마토 마켓 ㅋ

## Tailwind CSS :wind

> 모디파이어 개 많으니까 잘 알아보고 써라 유용하당 ㅋ

### group_modifier

```tsx
<div className='bg-white overflow-hidden rounded-3xl shadow-xl **group**'>
        <div className='bg-blue-500 p-6 pb-14'>
          <span className='text-white text-2xl font-semibold'>프로필</span>
        </div>
        <div className='rounded-3xl p-6 bg-white relative -top-5'>
          <div className='flex relative -top-16 items-end justify-between'>
            <div className='flex flex-col items-center'>
              <span className='text-sm text-gray-500'>주문수</span>
              <span className='font-medium'>340</span>
            </div>

            {/* 아바타 */}
            <div
              className='w-24 h-24 rounded-full shadow-xl **group-hover:bg-red-300 transition-colors'**
            />

```
