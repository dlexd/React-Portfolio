import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <style>{`
        body {
          background-color: #000000;
        }
        .mockup-code {
          display: flex;
          height: 100vh;
        }
        .mockup-code-content {
          max-width: 600px;
          padding: 2rem;
          background-color: transparent;
        }
      `}</style>
      <div className="mockup-code">
        <div className="mockup-code-content">
          <pre data-prefix="$"><code>npm run contactinfo</code></pre> 
          <pre data-prefix=">"><code>loading...</code></pre> 
          <pre data-prefix=">" className="text-success"><code>Email: Derrekle@gmail.com</code></pre> 
          <pre data-prefix=">" className="text-success"><code>Github: Github.com/dlexd</code></pre>
        </div>
      </div>
    </section>
  );
}

export default Contact;
