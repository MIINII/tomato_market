# 🍅 토마토 마켓 ㅋ

## Tailwind CSS :wind

> 모디파이어 개 많으니까 잘 알아보고 써라 유용하당 ㅋ

### group_modifier

```tsx
...
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
      <div className='w-24 h-24 rounded-full shadow-xl **group-hover:bg-red-300 transition-colors'** />
    </div>

  </div>
  
</div>

...
```

```tsx
// peer modifier
...

<span className='hidden peer-invalid:block peer-invalid:text-red-500'>빈칸을 채워주세요</span>
<span className='hidden peer-valid:block peer-valid:text-teal-500'>멋진 이름이네요!</span>
<span className='hidden peer-hover:block peer-hover:text-amber-500'>방가방가</span>

...
```
