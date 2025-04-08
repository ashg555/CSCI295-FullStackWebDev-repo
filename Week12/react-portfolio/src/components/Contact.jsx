function Contact() {
  return <section id="Contact">
    <h2>Contact Me</h2>
    <div class="container">

      <form name="contactForm" onsubmit="return validateForm()" method="post">

        <div id="text">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" autocomplete="name" placeholder="Your name.." />

          <label for="email">Name</label>
          <input type="text" id="email" name="email" autocomplete="email" placeholder="Your email.." />

          <label for="subject">Message</label>
          <textarea id="subject" name="subject" placeholder="Write a message.."></textarea>
        </div>

        <div id="submitdiv">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  </section>
}

export default Contact