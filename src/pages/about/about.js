import "./about.scss";

function About() {
  document.title = "5Things | About";

  return (
    <section className="about">
      <h1>About 5Things</h1>
      <p className="about__text">
        5Things is based on the 5-4-3-2-1 grounding exercise, also known as the
        five senses technique.
      </p>
      <p className="about__text">
        Taking a moment to engage with the world around you can help get you out
        of your head and reduce feelings of panic, stress, and anxiety.
      </p>
      <p className="about__text">
        According to{" "}
        <a href="https://www.inclusivepsych.com/post/grounding-exercises-for-anxiety-trauma">
          an article by Dr. Sophia Aguirre, Ph.D.
        </a>
        , techniques like this "may help distract you from what you’re
        experiencing and refocus on what’s happening in the present moment."
      </p>
      <p className="about__text">
        5Things is <em>not</em> a replacement for psychiatric care, but with
        frequent practice you may find it helps you achieve a calmer state.
      </p>
      <h1>Resources</h1>
      <p className="about__text">
        If you're in crisis or need someone to talk to, check out{" "}
        <a href="https://www.canada.ca/en/public-health/services/mental-health-services/mental-health-get-help.html">
          this list of mental health resources and hotlines in Canada.
        </a>
      </p>
    </section>
  );
}

export default About;
