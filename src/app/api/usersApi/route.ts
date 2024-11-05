import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "message get" });
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
