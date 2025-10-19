import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // Get pagination parameters from URL
    const { searchParams } = new URL(request.url);
    const offset = parseInt(searchParams.get("offset") || "0");
    const limit = parseInt(searchParams.get("limit") || "10");

    const response = await fetch(
      "https://sttrafficplatformassets.blob.core.windows.net/traffic-assets/lots.json"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch items from external API");
    }

    const data = await response.json();

    // Apply pagination
    const paginatedData = data.slice(offset, offset + limit);

    return NextResponse.json(paginatedData);
  } catch (error) {
    console.error("Error fetching items:", error);
    return NextResponse.json(
      { error: "Failed to fetch items" },
      { status: 500 }
    );
  }
}
