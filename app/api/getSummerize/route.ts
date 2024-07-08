import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const API_KEY = process.env.NEXT_PUBLIC_RAPIDAPI_KEY;
const API_URL = process.env.NEXT_PUBLIC_RAPIDAPI_URL;
const API_HOST = process.env.NEXT_PUBLIC_RAPIDAPI_HOST;

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const urlParam = searchParams.get("url");

    const options = {
      method: "GET",
      url: API_URL,
      params: {
        url: urlParam,
        lang: "en",
        engine: "2",
      },
      headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": API_HOST,
      },
    };

    const response = await axios.request(options);
    return NextResponse.json(response.data.summary);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
