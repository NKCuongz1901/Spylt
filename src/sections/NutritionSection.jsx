import { useGSAP } from "@gsap/react"
import { nutrientLists } from "../constants"
import { SplitText } from "gsap/all"
import gsap from "gsap"


function NutritionSection() {


    useGSAP(() => {
        const titleSplit = SplitText.create(".nutrition-title", {type: 'chars'})

       const tl = gsap.timeline({
        scrollTrigger:{
            trigger: ".nutrition-section",
            start: "30% center",
        }
       })

       tl.from(titleSplit.chars,{
        yPercent: 100,
        stagger: 0.01,
        ease: 'power2.out',
       })

       const textScroll = gsap.timeline({
        scrollTrigger:{
            trigger: ".nutrition-text-scroll",
            start: "top 80%",
        }
       })
       textScroll.to(".nutrition-text-scroll",{
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        opacity: 1,
        ease: 'power1.inOut',
        duration: 1,
       })
    })
  return (
    <section className="nutrition-section z-10">
        <img src="/images\slider-dip.png" alt="nutrition-img" className="w-full object-cover" />

        <img src="/images\big-img.png" alt="nutrition-img" className="big-img" />

        <div className="flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0">
            <div className="relative inline-block md:translate-y-10">
                <div className="general-title flex flex-col justify-center relative gap-24">
                    <div className="overflow-hidden place-self-start">
                        <h1 className="nutrition-title">It still does</h1>
                    </div>
                    <div style={{clipPath: "polygon(0% 0%, 0% 0, 0% 100%, 0% 100%)"}} className="nutrition-text-scroll place-self-start" >
                        <div className="bg-yellow-brown pb-5 md:pt-0 pt-3 md:px-5 px-3 inline-block">
                            <h2 className="text-milk-yellow">BODY GOOD</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="nutrition-box">
                <div className="list-wrapper">
                    {nutrientLists.map((nutrient, index) => (
                        <div key={index} className="relative flex-1 col-center">
                            <div>
                                <p className="md:text-lg font-paragraph">{nutrient.label}</p>
                                <p className="md:text-lg font-paragraph mt-2">up to</p>
                                <p className="md:text-2xl text-4xl font-bold">{nutrient.amount}</p>
                            </div>

                            { index !== nutrientLists.length - 1 && <div className="spacer-border"></div> }

                            
                        </div>
                    ))

                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default NutritionSection