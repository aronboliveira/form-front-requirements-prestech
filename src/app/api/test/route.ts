import { NextResponse } from "next/server";
export function POST(req: Request) {
  req.json().then(d => console.log(d));
  return NextResponse.json({ message: "Request received!" });
}
