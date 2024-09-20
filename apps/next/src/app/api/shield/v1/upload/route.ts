import { NextRequest, NextResponse } from "next/server";

import { createServiceHandlerClient } from "utils/http.utils";



export async function POST(request: NextRequest) {
  const supabase = createServiceHandlerClient();

  try {
    const formData = await request.formData();
    const rawFiles = formData.getAll("files") as File[];

    if (!rawFiles.length) {
      return NextResponse.json({ message: "Invalid request, no files to upload." }, { status: 400 });
    }

    const files = rawFiles.map(file => ({ name: file.name, data: file }));
    const path = `uploads/${Date.now()}`;

    const outcomes = await Promise.all(files.map(async (file) => {
      const { data, error } = await supabase.storage
        .from('test')
        .upload(`${path}/${file.name}`, file.data);

      return { success: !error, data, error };
    }));

    const succeeds = outcomes.filter(res => res.success).length;
    const result = `${succeeds} / ${files.length} files uploaded successfully.`;
    const data = { result, files: outcomes };

    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}