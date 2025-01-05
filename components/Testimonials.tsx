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
          title: "Senior Offsite Consultant, GreatSoft",
        },
        {
          quote:`
            "I haven't known Num-Nums (Wicus) for long time ,but I can safely say he is one of the most dedicated, goal driven, supportive 
            and positive people I have ever met (this is both professionally and outside of work). Let alone being friendly and 
            always willing to help in any way possible. Good at giving advice too, I mean both on a personal level and professional 
            level. If one would need a wingman, I'd recommend Num-Nums."`,
          name: "Ash Morrison",
          title: "Senior Offsite Consultant, GreatSoft",
        },
        {
          quote:
          `"Wicus joined our team and made an immediate and significant impact from day one. His ability to quickly understand and address 
          complex client issues is exceptional. In less than a year on the support team, Wicus has consistently stood out, earning high 
          praise from the clients he has assisted. His dedication not only strengthens the support team but also enhances our brand's 
          reputation, ensuring we remain ahead of the curve and maintain a positive image in the market. Wicus’s eagerness to learn and his 
          strong ambitions to transition into development are truly commendable. I am confident that his contributions will continue to have a 
          lasting positive impact on the GreatSoft Team."`,
          name: "Adrian Dunbar",
          title: "Head of Development and Director, GreatSoft Europe",
        },
      ];
  return (
      <div className="h-[60rem] rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
        />
      </div>
  )
}

export default Testimonials