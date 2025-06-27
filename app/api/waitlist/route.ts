import { NextRequest, NextResponse } from "next/server";
import Airtable from "airtable";

// Configure Airtable
const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID!);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Validate required fields
    const { email } = formData;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Create record in Airtable
    const record = await base(process.env.AIRTABLE_TABLE_NAME!).create([
      {
        fields: {
          email: email,
        },
      },
    ]);

    return NextResponse.json(
      {
        success: true,
        message: "Successfully added to waitlist!",
        recordId: record[0].id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Airtable submission error:", error);

    return NextResponse.json(
      {
        error: "Failed to submit to waitlist. Please try again.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
