import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
        question: "How can I install CastleApp on my Android device? To install CastleApp on your Android device, follow these simple steps tailored for Android platforms:",
        answer: 
          ` Open your device's browser and visit www.castleapp.vip to download the CastleAPK file. Simply tap the download button on the website.
           Locate the downloaded APK file in your device's downloads folder, which may vary depending on your download settings.
            Tap on the CastleAPK file to start the installation process. If a warning message pops up, go to your settings and enable the option to install apps from unknown sources.
            Tap Install to kick off the setup process and patiently wait for it to complete.
            Once installed, launch the app and start using it immediately!`,
      },
      {
        question: "How can I update Castle?",
        answer:
          "When Castle alerts you about a new version, you can typically update directly by clicking on the update prompt. If that method doesn't work, you can manually download the latest APK from www.castleapp.vip using your phone's browser and install it. Remember to retain the old version until the new one is fully installed to prevent any loss of downloaded content..",
      },
      {
        question: "Why isn't Castle available on the Google Play Store?",
        answer:
          "Castle isn't featured on the Play Store due to Google's strict content policies. Nevertheless, the Castle App is secure, and you can install and utilize it without any concerns.",
      },
      {
        question: "Is Castle Apk a safe application to Use?",
        answer:
          "Yes, Castle Apk Download is a 100% safe and secure application and its developers made it secure from all types of viruses, malware, and bug issues.",
      },
    {
      question: "Can I download content from Castle for offline viewing?",
      answer:
        "Absolutely, you can download movies, web series, and TV shows from Castle for offline viewing.",
    },
    {
      question: "Is Castle Apk Download 2025 available on Playstore?",
      answer: "No, users have to download the latest version of Castle 2024 from Google.",
    },
    {
      question: "Is Castle Apk 2025 a paid Application?",
      answer: "No, Castle is not a paid application also its all features are free to use for all users.",
    },
    {
      question: "Does users can use the Castle App as a Converter?",
      answer:
        "Yes, users of Castle can use this app as a converter and have the facility to convert videos or songs into MP3s.",
    },
    {
      question: "Can Users use Castle Apk in a dark Mode?",
      answer: "Yes, users can use the Castle app in dark mode and can save their mobile battery.",
    },
    {
      question: "Is Castle Apk 2025 supports various Platforms?",
      answer:
        "Yes, the Castle App supports various platforms and its users can free download videos and songs from supported platforms.",
    },
    {
      question: "Do users of both Android and iOS devices use Castle 2024?",
      answer: "No, the Castle App is basically designed for users of only Android devices.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#1c1c1c] p-6 md:p-12 mt-10">
      <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-12">FAQ</h1>
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
              <AccordionContent className="px-6 py-4 text-gray-400">{faq.answer.split('\n').map((line, lineIndex) => (
                    <li key={lineIndex}>{line.trim()}</li>
                  ))}
</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}