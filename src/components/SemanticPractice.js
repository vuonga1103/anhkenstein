import React from "react";

export default function SemanticPractice() {
  function showDetails(e) {
    // this is how you access value of attribute data-animal-type
    console.log(e.target.dataset.animalType);
  }

  function changeBgColor(e) {
    const genre = e.target.dataset.genre;
    let bgColor;

    switch (genre) {
      case "fiction":
        bgColor = "violet";
        break;
      case "sci-fi":
        bgColor = "red";
        break;
      case "bio":
        bgColor = "yellow";
        break;
      default:
        break;
    }

    let hasBgColor = e.target.style.backgroundColor !== "transparent";
    e.target.style.backgroundColor = hasBgColor ? "transparent" : bgColor;
  }

  function changeCarrotsSowingTime() {
    const veges = document.querySelector("#vegetable-seeds").children;
    for (let veg of veges) {
      let isCarrot = veg.innerText === "Carrots";
      if (isCarrot) veg.dataset.sowingTime = "October_to_December";
    }
  }

  function changeOwnersName() {
    let restaurant = document.querySelector("#restaurantId li");
    restaurant.dataset.ownerName = "Manson";
  }

  return (
    <>
      <header>
        <hgroup>
          <h1>Lessons on Web Development</h1>
          <h2>A website devoted to learning how to create web apps.</h2>
        </hgroup>
        <nav>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact Info</a>
            </li>
          </ul>
        </nav>
      </header>
      {/* Techy’s Cuisine is undergoing a change of owners. You are required to change the restaurant owner’s name from Richard to Mason, using JavaScript. */}
      <ul id="restaurantId">
        <li
          data-type="veg"
          data-distance="2miles"
          data-identifier="10318"
          data-owner-name="Richard"
        >
          Techy's Cuisine
        </li>
      </ul>
      <button onClick={changeOwnersName}>Change Owner's Name</button>
      <ul onClick={changeBgColor}>
        <li data-genre="fiction" data-author="fanny">
          Fiction Book
        </li>
        <li data-genre="sci-fi" data-author="sunny">
          Sci Fi Book
        </li>
        <li data-genre="bio" data-author="bobby">
          Bio Book
        </li>
      </ul>
      {/* Your task is to change the sowing time for carrots from March_to_June to October_to_December */}
      <ul id="vegetable-seeds">
        <li data-spacing="10cm" data-sowing-time="March_to_June">
          Carrots
        </li>
        <li data-spacing="30cm" data-sowing-time="February_to_March">
          Celery
        </li>
        <li data-spacing="3cm" data-sowing-time="March_to_September">
          Radishes
        </li>
      </ul>
      <button onClick={changeCarrotsSowingTime}>Change Sowing Time</button>
      <article>
        <hgroup>
          <h1>Usage of Semantic Elements in HTML5</h1>
          <h2>
            A comprehensive guide to showing context for the material of your
            website
          </h2>
          <time>
            <h3>
              <time datetime="2019-06-10">June 10, 2019</time>
            </h3>
          </time>
        </hgroup>

        <section>
          <h4>
            <code>header</code>
          </h4>
          <p>
            For material that is uniform throughout your web page, make use of
            header elements.
          </p>
          <p>
            Headers can also include the navigation components for your site.
          </p>
        </section>

        <section>
          {" "}
          <h4>
            <code>footer</code>
          </h4>
          <p>
            <s>Utilize</s> <ins>Used</ins> the footer element to place content
            called "footer" such as author/copyright information or data.
          </p>
        </section>

        <section>
          <h4>
            <code>nav</code>
          </h4>
          <p>
            Using the nav elements, we can store{" "}
            <q>the site's navigation-related objects.</q>
          </p>
          <p>
            Navigational <code>anchor</code> tags are often wrapped in an
            unordered list element.
          </p>
        </section>
      </article>
      <big> The Realm of HTML5! </big>
      <p>
        <abbr title="HyperText Markup Language">HTML5</abbr> was first released
        in public-facing form on 22 January 2008, with a major update and "W3C
        Recommendation" status in October 2014. This website is all about{" "}
        <abbr title="HyperText Markup Language">HTML</abbr>.
        <strong> HTML5 is really useful in web development </strong>
      </p>
      <dfn>HTML</dfn> is the standard markup language for creating web pages.
      Besides that, <em> HTML is fun! </em>
      <p>
        I <del> like </del> <ins> love </ins> front end web development.{" "}
      </p>
      <p>
        The HTML <code>button</code> tag defines a clickable button.
      </p>
      <p>
        The CSS <code>background-color</code> property defines the background
        color of an element.
      </p>
      Be sure to revise <mark> Chapter 2 </mark> before moving onto the CSS
      content.
      <p>
        In my younger and more vulnerable years my father gave me some advice
        that I've been turning over in my mind ever since.
        <q>Whenever you feel like criticizing any one,</q> he told me,
        <q>
          just remember that all the people in this world haven't had the
          advantages that you've had.
        </q>
      </p>
      <p>
        Reserving judgements is a matter of <i>infinite</i> hope.
      </p>
      <p>
        There was something unique about Gatsby:
        <pre>
          {" "}
          He smiled understandingly-much more than understandingly. It was one
          of those rare smiles with a quality of eternal reassurance in it, that
          you may come across four or five times in life. It faced--or seemed to
          face--the whole eternal world for an instant, and then concentrated on
          you with an irresistible prejudice in your favor. It understood you
          just as far as you wanted to be understood, believed in you as you
          would like to believe in yourself, and assured you that it had
          precisely the impression of you that, at your best, you hoped to
          convey.{" "}
        </pre>
      </p>
      <p>
        “And as I sat there brooding on the old, unknown world, I thought of
        Gatsby’s wonder when he first picked out the green light at the end of
        Daisy’s dock. He had come a long way to this blue lawn, and his dream
        must have seemed so close that he could hardly fail to grasp it. He did
        not know that it was already behind him, somewhere back in that vast
        obscurity beyond the city, where the dark fields of the republic rolled
        on under the night.
        <u>Gatsby believed in the green light,</u> the orgastic future that year
        by year recedes before us. It eluded us then, but that's no
        matter—to-morrow we will run faster, stretch out our arms farther. . .
        And one fine morning——
      </p>
      <p title="very important part">
        <em>
          {" "}
          So we beat on, boats against the current, borne back ceaselessly into
          the past.{" "}
        </em>
      </p>
      <p>
        <q>Life starts all over again when it gets crisp in the fall.</q>― F.
        Scott Fitzgerald, The Great Gatsby
      </p>
      <ol>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ol>
      <hr />
      <h1>Species</h1>
      <p>Click on a species to see what type it is:</p>
      <ul onClick={showDetails}>
        <li id="owl" data-animal-type="bird">
          Owl
        </li>
        <li id="salmon" data-animal-type="fish">
          Salmon
        </li>
        <li id="tarantula" data-animal-type="spider">
          Tarantula
        </li>
      </ul>
      <footer>
        <p>&copy; Educative.io 2020</p>
      </footer>
    </>
  );
}
