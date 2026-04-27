"use server";

export type ContactState = {
  ok: boolean;
  message?: string;
  errors?: Partial<Record<keyof ContactInput, string>>;
};

interface ContactInput {
  name: string;
  company: string;
  branche: string;
  phone: string;
  email: string;
  message: string;
  privacy: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const data: ContactInput = {
    name: String(formData.get("name") ?? "").trim(),
    company: String(formData.get("company") ?? "").trim(),
    branche: String(formData.get("branche") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
    privacy: String(formData.get("privacy") ?? ""),
  };

  const errors: ContactState["errors"] = {};
  if (data.name.length < 2) errors.name = "Bitte gib deinen Namen an.";
  if (!EMAIL_RE.test(data.email)) errors.email = "Bitte gültige E-Mail-Adresse angeben.";
  if (data.message.length < 10) errors.message = "Bitte schreibe uns ein paar Worte mehr (min. 10 Zeichen).";
  if (data.privacy !== "on") errors.privacy = "Bitte stimme der Datenverarbeitung zu.";

  if (Object.keys(errors).length > 0) {
    return {
      ok: false,
      message: "Bitte überprüfe die markierten Felder.",
      errors,
    };
  }

  // TODO: integrate Resend / Postmark / SMTP when RESEND_API_KEY is available
  // For now: log to server console; the success state is shown to the user.
  console.log("[contact] new submission", {
    timestamp: new Date().toISOString(),
    ...data,
  });

  // Simulate slight latency for UX
  await new Promise((r) => setTimeout(r, 600));

  return {
    ok: true,
    message:
      "Danke für deine Nachricht! Wir melden uns innerhalb von 24 Stunden bei dir.",
  };
}
