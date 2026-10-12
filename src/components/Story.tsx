import { wedding } from "@/lib/wedding";
import { Reveal } from "./Reveal";
import { Card, Divider } from "./ui";

export function Story() {
  return (
    <section className="section" id="kisah">
      <div className="wrap">
        <Reveal>
          <Card>
            <header className="sec-head">
              <p className="eyebrow">{wedding.storyEyebrow}</p>
              <h2>{wedding.storyTitle}</h2>
              <Divider />
            </header>
            <p className="lede">{wedding.lede}</p>
            <div className="chapters">
              {wedding.chapters.map((chapter, index) => (
                <article className="chapter" key={chapter.n} style={{ transitionDelay: `${index * 90}ms` }}>
                  <p className="num">{chapter.n}</p>
                  <h3>{chapter.title}</h3>
                  <p>{chapter.body}</p>
                </article>
              ))}
            </div>
            <Divider />
            <p className="quote">{wedding.quote}</p>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
