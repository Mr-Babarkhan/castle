// app/api/download/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { url } = await request.json();

  try {
    const apiUrl = "https://facebook-reel-and-video-downloader.p.rapidapi.com/api/facebookVideo";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": "8362bc4560msh54f49d34e9a666dp13c0b8jsnd11a0bd15859", // Replace with your RapidAPI key
        "X-RapidAPI-Host": "facebook-reel-and-video-downloader.p.rapidapi.com",
      },
      body: JSON.stringify({ url }),
    };

    const response = await fetch(apiUrl, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch video");
    }

    // Fetch the video file
    const videoResponse = await fetch(data.videoUrl);
    if (!videoResponse.ok) {
      throw new Error("Failed to download video file");
    }

    // Return the video file
    return new NextResponse(videoResponse.body, {
      headers: {
        "Content-Disposition": `attachment; filename="video.mp4"`,
        "Content-Type": "video/mp4",
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to download video" }, { status: 500 });
  }
}