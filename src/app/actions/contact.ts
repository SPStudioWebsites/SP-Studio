"use server";

import { Resend } from "resend";

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
    name:    String(formData.get("name")    ?? "").trim(),
    company: String(formData.get("company") ?? "").trim(),
    branche: String(formData.get("branche") ?? "").trim(),
    phone:   String(formData.get("phone")   ?? "").trim(),
    email:   String(formData.get("email")   ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
    privacy: String(formData.get("privacy") ?? ""),
  };

  const errors: ContactState["errors"] = {};
  if (data.name.length < 2)       errors.name    = "Bitte gib deinen Namen an.";
  if (!EMAIL_RE.test(data.email)) errors.email   = "Bitte gültige E-Mail-Adresse angeben.";
  if (data.message.length < 10)   errors.message = "Bitte schreibe uns ein paar Worte mehr (min. 10 Zeichen).";
  if (data.privacy !== "on")      errors.privacy = "Bitte stimme der Datenverarbeitung zu.";

  if (Object.keys(errors).length > 0) {
    return { ok: false, message: "Bitte überprüfe die markierten Felder.", errors };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY nicht gesetzt");
    return { ok: false, message: "Technischer Fehler — bitte ruf uns direkt an." };
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from:    "Kontaktformular <kontakt@schnell-sichtbar.de>",
    to:      "kontakt@schnell-sichtbar.de",
    replyTo: data.email,
    subject: `Neue Anfrage von ${data.name}${data.company ? ` (${data.company})` : ""}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
        <h2 style="margin-bottom:4px">Neue Anfrage über schnell-sichtbar.de</h2>
        <p style="color:#666;margin-top:0;font-size:13px">${new Date().toLocaleString("de-DE")}</p>
        <hr style="border:none;border-top:1px solid #e5e5e5;margin:20px 0"/>
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr><td style="padding:8px 0;color:#666;width:130px">Name</td><td style="padding:8px 0;font-weight:600">${data.name}</td></tr>
          ${data.company ? `<tr><td style="padding:8px 0;color:#666">Unternehmen</td><td style="padding:8px 0">${data.company}</td></tr>` : ""}
          <tr><td style="padding:8px 0;color:#666">E-Mail</td><td style="padding:8px 0"><a href="mailto:${data.email}" style="color:#ff2d8f">${data.email}</a></td></tr>
          ${data.phone ? `<tr><td style="padding:8px 0;color:#666">Telefon</td><td style="padding:8px 0"><a href="tel:${data.phone}" style="color:#ff2d8f">${data.phone}</a></td></tr>` : ""}
          ${data.branche ? `<tr><td style="padding:8px 0;color:#666">Branche</td><td style="padding:8px 0">${data.branche}</td></tr>` : ""}
        </table>
        <hr style="border:none;border-top:1px solid #e5e5e5;margin:20px 0"/>
        <p style="font-size:13px;color:#666;margin-bottom:8px">Nachricht</p>
        <p style="background:#f9f9f9;padding:16px;border-radius:8px;font-size:14px;line-height:1.6;white-space:pre-wrap">${data.message}</p>
        <hr style="border:none;border-top:1px solid #e5e5e5;margin:20px 0"/>
        <p style="font-size:12px;color:#999">Direkt antworten: einfach auf diese Mail antworten — geht direkt an ${data.email}</p>
      </div>
    `,
  });

  if (error) {
    console.error("[contact] Resend error", error);
    return { ok: false, message: "Beim Senden ist ein Fehler aufgetreten — bitte versuch es nochmal oder ruf uns an." };
  }

  return {
    ok: true,
    message: "Danke für deine Nachricht! Wir melden uns innerhalb von 24 Stunden bei dir.",
  };
}
