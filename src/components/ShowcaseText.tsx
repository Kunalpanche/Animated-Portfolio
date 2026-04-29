import TextAnimation from './uilayouts/scroll-text';

export function ShowcaseText() {
  return (
    <section className="bg-black text-primary border-t border-white/10 relative z-10 w-full overflow-hidden py-24 md:py-32">
      <div className='h-[40vh] flex flex-col justify-center items-center text-center px-4'>
        <TextAnimation
          text='Creative ideas start here.'
          variants={{
            hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
            visible: {
              filter: 'blur(0px)',
              opacity: 1,
              y: 0,
              transition: { ease: 'linear' },
            },
          }}
          classname='text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-normal tracking-tight text-white max-w-4xl mx-auto'
        />
      </div>

      <div className='h-[60vh] flex flex-col justify-center items-start text-left px-8 md:px-16 lg:px-32 relative'>
        <TextAnimation
          as='p'
          letterAnime={true}
          text="Let's team up and turn ideas into reality ✨"
          classname='text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-serif italic text-gray-500 max-w-2xl lowercase leading-[1.1]'
          variants={{
            hidden: { filter: 'blur(4px)', opacity: 0, y: 20 },
            visible: {
              filter: 'blur(0px)',
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.2,
              },
            },
          }}
        />
      </div>

      <div className='h-[60vh] flex flex-col justify-center items-end text-right px-8 md:px-16 lg:px-32'>
        <TextAnimation
          text='Turning concepts into reality'
          direction='right'
          classname='text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-normal tracking-tighter text-white max-w-2xl ml-auto leading-[1.1]'
        />
      </div>

      <div className='h-[60vh] flex justify-center items-center text-center px-4'>
        <TextAnimation
          text='Dream big, work hard & achieve greatness'
          direction='down'
          lineAnime={true}
          classname='text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-mono uppercase tracking-widest text-primary/70 max-w-4xl mx-auto'
        />
      </div>
    </section>
  );
}
