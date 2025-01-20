import { NextResponse } from "next/server";
export function POST(req: Request) {
  console.log(req);
  return NextResponse.json({ message: "Request received!" });
}
