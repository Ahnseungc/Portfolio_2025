import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { getVelogPosts } from "@/lib/velog";

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const posts = await getVelogPosts();
    revalidatePath("/");
    return NextResponse.json({ ok: true, count: posts.length, synced: new Date().toISOString() });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
