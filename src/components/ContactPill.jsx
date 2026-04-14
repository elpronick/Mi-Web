function ContactPill({ label, value, href }) {
  return (
    <a className="contact-pill" href={href}>
      <span>{label}</span>
      <strong>{value}</strong>
    </a>
  );
}

export default ContactPill;
