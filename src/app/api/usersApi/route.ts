import { NextResponse } from "next/server";
import PostApi from "@/app/types/Practice";

export async function GET() {
  const practice: PostApi[] = Array.from({ length: 30 }).map((_, index) => {
    return {
      id: index + 1,
      title: `Post title ${index}`,
      body: `Post body ${index}`,
    };
  });
  return NextResponse.json({ practice });
}

export async function DELETE() {
  return NextResponse.json({ message: "message delete" });
}

export async function POST() {
  return NextResponse.json({ message: "message post" });
}

export async function PUT() {
  return NextResponse.json({ message: "message put" });
}
