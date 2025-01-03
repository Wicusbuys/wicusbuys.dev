import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const Testimonials = () => {
    const testimonials = [
        {
          quote:`
            \"I have had the pleasure of working with Wicus for +/- a year at GreatSoft, and in that time, I have been 
            consistently impressed by his dedication, expertise, and collaborative spirit. Wicus brings a unique 
            blend of creativity and strategic thinking to every project, always striving to deliver high-quality results. 
            His ability to tackle complex challenges with a positive attitude and innovative approach has been invaluable to our 
            team. Keep up the good work!\"
            `,
          name: "Zander Van Schalkwyk",
          title: "Senior Offsite Consultant",
        },
        {
          quote:`
            "I haven't known Num-Nums (Wicus) for long time ,but I can safely say he is one of the most dedicated, goal driven, supportive 
            and positive people I have ever met (this is both professionally and outside of work). Let alone being friendly and 
            always willing to help in any way possible. Good at giving advice too, I mean both on a personal level and professional 
            level. If one would need a wingman, I'd recommend Num-Nums."`,
          name: "Ash Morrison",
          title: "Senior Offsite Consultant",
        },
        {
          quote: "All that we see or seem is but a dream within a dream.",
          name: "Edgar Allan Poe",
          title: "A Dream Within a Dream",
        },
        {
          quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
          name: "Jane Austen",
          title: "Pride and Prejudice",
        },
        {
          quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
          name: "Herman Melville",
          title: "Moby-Dick",
        },
      ];
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  )
}

export default Testimonials