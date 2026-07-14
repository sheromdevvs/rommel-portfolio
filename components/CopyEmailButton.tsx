"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Copies the email to the clipboard instead of firing a mailto: — more reliable
 * than mailto, which silently does nothing when no mail client is configured.
 * Confirms with a toast so the click never feels like a dead end.
 */
export default function CopyEmailButton({
  email,
  label,
  className,
}: {
  email: string;
  label: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // The async clipboard API needs a secure context; fall back for the rest.
      const ta = document.createElement("textarea");
      ta.value = email;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2400);
  }

  return (
    <>
      <button type="button" onClick={copy} className={className}>
        {copied ? (
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        ) : (
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="12" height="12" rx="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        )}
        {copied ? "Copied!" : label}
      </button>

      {copied && (
        <div
          role="status"
          aria-live="polite"
          className="toast pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4"
        >
          <div className="flex items-center gap-2.5 rounded-xl bg-[var(--color-ink)] px-4 py-3 text-sm font-semibold text-white shadow-[var(--shadow-pop)]">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-accent)]">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
            Email copied — {email}
          </div>
        </div>
      )}
    </>
  );
}
