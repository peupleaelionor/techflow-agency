import { Testimonial } from "@/data/insightsData";
import { Quote } from "lucide-react";

interface TestimonialBlockProps {
  testimonial: Testimonial;
}

export default function TestimonialBlock({ testimonial }: TestimonialBlockProps) {
  return (
    <div className="my-12 p-8 bg-gray-50 dark:bg-gray-900 border-l-4 border-[#CCFF00]">
      <div className="flex items-start gap-4">
        <Quote className="text-[#CCFF00] flex-shrink-0 mt-1" size={24} />
        <div className="flex-grow">
          <p className="text-lg font-mono italic text-gray-800 dark:text-gray-200 mb-4">
            "{testimonial.quote}"
          </p>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-gray-900 dark:text-white">{testimonial.author}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {testimonial.role} • {testimonial.company}
              </p>
            </div>
            <div className="text-right">
              <p className="font-bold text-[#CCFF00] text-lg">{testimonial.metric}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
