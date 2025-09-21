export const WHATSAPP_TEXT = encodeURIComponent(
  "Hey, I am interested in AmazonX services - The X factor in Amazon selling success. Please share more details about your services."
);

// Phone number: 9640715714
export const WHATSAPP_LINK = `https://wa.me/919640715714?text=${WHATSAPP_TEXT}`;

export const waLinkWith = (text: string) =>
  `https://wa.me/919640715714?text=${encodeURIComponent(text)}`;
