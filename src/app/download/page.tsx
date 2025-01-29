"use client"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function DownloadPage() {
    const handleDownload = () => {
        // Create an anchor element
        const link = document.createElement('a');
        link.href = '/snaptube.apk'; // Path to your APK in public folder
        link.download = 'snaptube.apk'; // Suggested name for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Downloading Snaptube App</h1>

        <div className="flex justify-center mb-12">
          <Button
            size="lg"
            onClick={handleDownload}
            className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-6 text-lg w-full max-w-2xl"
          >
            <Download className="mr-2 h-6 w-6" />
            DOWNLOAD SNAPTUBE APP LATEST NEW VERSION 2025
          </Button>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-8">Downloading And Installation Process</h2>

        <div className="space-y-8 text-lg text-gray-700">
          <p>
            Do you want to use the{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Snaptube App
            </a>
            ? But worried about its downloading and installation Process?If yes then you don't have to worry about it
            because in a few lines, we will explain to you a very simple and easy way to download and install Snaptube
            App on your Android cell phone.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">1&gt;Downalod the Snaptube App.</h3>
              <p>
                The first step is to download a Snaptube App from any trusted website or can also safely and free
                download it from our this website.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2&gt;Enable Unknown Sources.</h3>
              <p>
                After downloading an Apk file of the Snaptube App, now you have to do one thing is that you have to go
                to your Android cell phone's Settings&gt;Security&gt;Permissions, and here the option of "Enable Unknown
                Sources" is present you have to just on this option.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">3&gt;Install the Snaptube App.</h3>
              <p>
                After allowing the unknown sources in your cell phone, just open the downloaded APK file of{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Snaptube Apk
                </a>{" "}
                and here the option of Install available you have to just click on the install button, and after 4 to 5
                seconds Snaptube App will installed in your cell phone and you can enjoy all its interesting and useful
                features free of cost.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

