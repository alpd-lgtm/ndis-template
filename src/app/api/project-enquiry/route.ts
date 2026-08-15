import { Resend } from "resend";

type EnquiryBody = {
  business?: string;
  email?: string;
  phone?: string;
  currentWebsite?: string;
  budget?: string;
  message?: string;
  carePlan?: boolean;
  companyFax?: string;
  websiteType?: string;
  selectedTemplate?: {
    name?: string;
    type?: string;
  } | null;
};

function clean(value: unknown, maxLength: number) {
  return String(value ?? "").trim().slice(0, maxLength);
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");
      return Response.json(
        { error: "Email service is not configured yet." },
        { status: 500 },
      );
    }

    const body = (await request.json()) as EnquiryBody;

    // Simple honeypot: bots often fill hidden fields.
    if (clean(body.companyFax, 100)) {
      return Response.json({ success: true });
    }

    const business = clean(body.business, 120);
    const email = clean(body.email, 254);
    const phone = clean(body.phone, 50);
    const currentWebsite = clean(body.currentWebsite, 300);
    const budget = clean(body.budget, 80);
    const message = clean(body.message, 1000);
    const websiteType = clean(body.websiteType, 80) || "Ready-Made Website";
    const templateName = clean(body.selectedTemplate?.name, 120) || "NDIS Care Services";
    const templateType = clean(body.selectedTemplate?.type, 120) || "Care & Support Website Design";
    const carePlan = Boolean(body.carePlan);

    if (!business || !email) {
      return Response.json(
        { error: "Business name and email are required." },
        { status: 400 },
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const resend = new Resend(apiKey);

    const text = [
      "NEW AXIS STUDIO TEMPLATE ENQUIRY",
      "",
      `Selected design: ${templateName}`,
      `Design type: ${templateType}`,
      `Website type: ${websiteType}`,
      "",
      `Business: ${business}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Existing website: ${currentWebsite || "Not provided"}`,
      `Approximate budget: ${budget || "Not provided"}`,
      `Website Care Plan: ${carePlan ? "Interested" : "Not selected"}`,
      "",
      "Project details:",
      message || "Not provided",
      "",
      "Submitted from the NDIS Care Services Axis Studio demo.",
    ].join("\n");

    const { error } = await resend.emails.send({
      from: "Axis Studio Website <enquiries@send.axistudio.studio>",
      to: ["contact@axistudio.studio"],
      replyTo: email,
      subject: `NDIS Care Services enquiry — ${business}`,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { error: "We couldn't send your enquiry. Please try again." },
        { status: 500 },
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Project enquiry error:", error);
    return Response.json(
      { error: "Something went wrong while sending your enquiry." },
      { status: 500 },
    );
  }
}
