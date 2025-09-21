export const WHATSAPP_TEXT = encodeURIComponent(
  "Hey, I am interested in the Amazon service and here is product"
);

// Without a phone number, this opens WhatsApp with the message and lets the user pick the chat.
// Provide a phone number like 'https://wa.me/<NUMBER>?text=...'
export const WHATSAPP_LINK = `https://wa.me/?text=${WHATSAPP_TEXT}`;

export const waLinkWith = (text: string) =>
  `https://wa.me/?text=${encodeURIComponent(text)}`;
