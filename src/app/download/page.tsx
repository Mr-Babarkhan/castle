"use client"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function DownloadPage() {
  const handleDownload = () => {
    // Create an anchor element
    const link = document.createElement('a');
    link.href = 'https://castleapps.co.uk/Files/CastleTV_v1.0.8_1227_10_55_official%20(1).apk'; // Path to your APK in public folder
    link.download = 'https://castleapps.co.uk/Files/CastleTV_v1.0.8_1227_10_55_official%20(1).apk'; // Suggested name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Downloading Castle App</h1>

        <div className="flex justify-center mb-12">
          <Button
            size="lg"
            onClick={handleDownload}
            className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-6 text-lg w-full max-w-2xl"
          >
            <Download className="mr-2 h-6 w-6" />
            DOWNLOAD Castle APP LATEST NEW VERSION 2025
          </Button>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-8">Downloading And Installation Process</h2>

        <div className="space-y-8 text-lg text-gray-700">
          <p>
            Do you want to use the{" "}
            <a href="https://castleapps.co.uk/Files/CastleTV_v1.0.8_1227_10_55_official%20(1).apk" className="text-blue-600 hover:underline">
              Castle App
            </a>
            ? But worried about its downloading and installation Process? If yes then you don&apos;t have to worry about it
            because in a few lines, we will explain to you a very simple and easy way to download and install Castle
            App on your Android cell phone.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">1&gt;Download the Castle App.</h3>
              <p>
                The first step is to download a Castle App from any trusted website or can also safely and freely
                download it from our this website.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2&gt;Enable Unknown Sources.</h3>
              <p>
                After downloading an Apk file of the Castle App, now you have to do one thing is that you have to go
                to your Android cell phone&apos;s Settings&gt;Security&gt;Permissions, and here the option of &quot;Enable Unknown
                Sources&quot; is present you have to just turn on this option.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">3&gt;Install the Castle App.</h3>
              <p>
                After allowing the unknown sources in your cell phone, just open the downloaded APK file of{" "}
                <a href="https://castleapps.co.uk/Files/CastleTV_v1.0.8_1227_10_55_official%20(1).apk" className="text-blue-600 hover:underline">
                  Castle Apk
                </a>{" "}
                and here the option of Install available. You have to just click on the install button, and after 4 to 5
                seconds Castle App will be installed on your cell phone and you can enjoy all its interesting and useful
                features free of cost.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
