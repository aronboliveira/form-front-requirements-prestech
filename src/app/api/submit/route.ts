import { DataService } from "@/server/model/services/sensitive/DataService";
import { NextResponse } from "next/server";

export async function POST() {
  // req: Request
  let status = 404;
  try {
    status = DataService.saveFormData();
    // (
    // await req.json()
    // );
    return NextResponse.json(
      { sucess: status.toString().startsWith("2") ? true : false },
      { status }
    );
  } catch (e) {
    console.error(
      `Error posting to endpoint: ${(e as Error).name}: ${(e as Error).message}`
    );
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
