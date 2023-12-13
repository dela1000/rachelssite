type ContactProps = {
  text: string;
};

const Contact = ({ text }: ContactProps) => {
  return (
    <a href={`mailto:rawhitener@gmail.com?subject=Hi Rachel! I want to ask you about writing`} target="_blank" rel="noreferrer">
      {text}
    </a>
  );
};

export default Contact;
