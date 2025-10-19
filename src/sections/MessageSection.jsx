import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'

function MessageSection() {

    useGSAP(() => {
        const splitFirstMessage = SplitText.create(
            ".first-message",
            {type: 'words'}
        )
        const splitSecondMessage = SplitText.create(
            ".second-message",
            {type: 'words'}
        )
        const paragraphSplit = SplitText.create(
            ".message-content",
            {type: 'words, lines'},
            {linesClass: 'paragraph-line'}
        )
        gsap.to(splitFirstMessage.words,{
            color: '#faeade',
            ease: 'power1.in',
            stagger: 1,
            scrollTrigger:{
                trigger: '.message-content',
                start: 'top center',
                end: '30% center',
                scrub: true,
            }
        })
        gsap.to(splitSecondMessage.words,{
            color: '#faeade',
            ease: 'power1.in',
            stagger: 1,
            scrollTrigger:{
                trigger: '.second-message',
                start: 'top center',
                end: 'bottom center',
                scrub: true,
            }
        })

        const reveal = gsap.timeline({
            delay: 1,
            scrollTrigger:{
                trigger: '.msg-text-scroll',
                start: 'top 60%',
                end: "top 60%",
            }
        })
        reveal.to('.msg-text-scroll',{
           clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
           ease: 'circ.inOut'
        })

        const paragraphReveal = gsap.timeline({
            scrollTrigger: {
                trigger: 'p',
                start: 'top center',
            }
        })

        paragraphReveal.from(paragraphSplit.words,{
            yPercent: 300,
            rotate: 3,
            ease: 'power1.inOut',
            duration: 1,
            stagger: 0.02,
        })


    })
  return (
    <section className='message-content'>
        <div className='container mx-auto flex-center py-28 relative'>
            <div className='w-full h-full'>
                <div className='msg-wrapper'>
                    <h1 className='first-message'>STIR UP YOUR FEARLESS PAST AND</h1>

                    <div style={{clipPath: "polygon(0% 0%, 0% 0, 0% 100%, 0% 100%)"}} className='msg-text-scroll'>
                        <div className='bg-light-brown md:pb-5 pb-3 px-5 '>
                            <h2 className='text-red-brown'>FUEL UP</h2>
                        </div>
                    </div>

                    <h1 className='second-message'>YOUR FUTURE WITH EVERY GULP OF PERFECT Protein</h1>
                </div>

                <div className='flex-center md:mt-20 mt-10'>
                    <div className='max-w-md px-10 flex-center overflow-hidden'>
                        <p>Rev up your rebel spirit and feed the adventure of life with SPYLT, where you are one chug away from epic nostalgia and fearless fun.</p>
                    </div>
                   
                </div>

            </div>
        </div>
    </section>
  )
}

export default MessageSection