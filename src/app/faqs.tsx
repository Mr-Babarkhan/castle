import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "Is Snaptube Apk a safe application to Use?",
      answer:
        "Yes, Snaptube Apk Download is a 100% safe and secure application and its developers made it secure from all types of viruses, malware, and bug issues.",
    },
    {
      question: "Is Snaptube Apk Download 2024 available on Playstore?",
      answer: "No, users have to download the latest version of Snaptube 2024 from Google.",
    },
    {
      question: "Is Snaptube Apk 2024 a paid Application?",
      answer: "No, Snaptube is not a paid application also its all features are free to use for all users.",
    },
    {
      question: "Does users can use the Snaptube App as a Converter?",
      answer:
        "Yes, users of Snaptube can use this app as a converter and have the facility to convert videos or songs into MP3s.",
    },
    {
      question: "Can Users use Snaptube Apk in a dark Mode?",
      answer: "Yes, users can use the Snaptube app in dark mode and can save their mobile battery.",
    },
    {
      question: "Is Snaptube Apk 2024 supports various Platforms?",
      answer:
        "Yes, the Snaptube App supports various platforms and its users can free download videos and songs from supported platforms.",
    },
    {
      question: "Do users of both Android and iOS devices use Snaptube 2024?",
      answer: "No, the Snaptube App is basically designed for users of only Android devices.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#1c1c1c] p-6 md:p-12 mt-32">
      <h1 className="text-[#FFEB3B] text-4xl md:text-5xl font-bold text-center mb-12">FAQ</h1>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-none bg-[#2a2a2a] rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 text-white hover:no-underline hover:bg-[#333333] [&[data-state=open]]:bg-[#333333]">
                <div className="flex gap-4 text-left">
                  <span className="text-[#FFEB3B]">{index + 1}</span>
                  {faq.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-400">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}