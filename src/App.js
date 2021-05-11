import "./App.css";
import mp3 from "./assets/1.mp3";
import React, { useState, useEffect } from "react";
import { Howl, Howler } from "howler";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [sound, setSound] = useState({});

  useEffect(() => {
    Howler.volume(1.0);
  }, []);

  const onClick = () => {
    console.log("clicks");
    setIsPlaying(true);
    let sound = new Howl({
      src: [mp3],
      autoplay: false,
      volume: 1,
    });
    setSound(sound);
  };

  const runOnScroll = () => {
    console.log("scrolling");
    setIsScrolling(true);
  };

  if (isPlaying) {
    window.addEventListener("scroll", runOnScroll, { passive: true });

    if (isScrolling) {
      sound.play();
    } else {
      sound.pause();
    }
  }

  function scrollStop(callback, refresh = 66) {
    if (!callback || typeof callback !== "function") return;
    let isScrolling;
    window.addEventListener(
      "scroll",
      function (event) {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(callback, refresh);
      },
      false
    );
  }

  scrollStop(function () {
    console.log("Scrolling has stopped.");
    setIsScrolling(false);
  });

  return (
    <div className="App" onClick={onClick}>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia odit
        illum nostrum earum quidem sed nisi molestiae veritatis cupiditate,
        asperiores eaque odio consequatur, accusamus neque. Dolorem, totam
        porro! Mollitia, odio reprehenderit dolore, delectus dignissimos optio
        perferendis harum obcaecati perspiciatis explicabo est quam consequatur
        aspernatur unde laborum maiores sint saepe inventore commodi nisi neque
        error facilis quidem nam! Officia, libero quos. Accusamus vero, dolorum
        debitis numquam molestiae eligendi assumenda explicabo distinctio ipsum?
        Eaque at minus veritatis esse, iure repellat amet voluptas praesentium
        eveniet non soluta cumque vero beatae possimus, veniam perspiciatis a
        unde autem doloribus. Recusandae maiores distinctio alias quisquam
        quo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        odit illum nostrum earum quidem sed nisi molestiae veritatis cupiditate,
        asperiores eaque odio consequatur, accusamus neque. Dolorem, totam
        porro! Mollitia, odio reprehenderit dolore, delectus dignissimos optio
        perferendis harum obcaecati perspiciatis explicabo est quam consequatur
        aspernatur unde laborum maiores sint saepe inventore commodi nisi neque
        error facilis quidem nam! Officia, libero quos. Accusamus vero, dolorum
        debitis numquam molestiae eligendi assumenda explicabo distinctio ipsum?
        Eaque at minus veritatis esse, iure repellat amet voluptas praesentium
        eveniet non soluta cumque vero beatae possimus, veniam perspiciatis a
        unde autem doloribus. Recusandae maiores distinctio alias quisquam
        quo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        odit illum nostrum earum quidem sed nisi molestiae veritatis cupiditate,
        asperiores eaque odio consequatur, accusamus neque. Dolorem, totam
        porro! Mollitia, odio reprehenderit dolore, delectus dignissimos optio
        perferendis harum obcaecati perspiciatis explicabo est quam consequatur
        aspernatur unde laborum maiores sint saepe inventore commodi nisi neque
        error facilis quidem nam! Officia, libero quos. Accusamus vero, dolorum
        debitis numquam molestiae eligendi assumenda explicabo distinctio ipsum?
        Eaque at minus veritatis esse, iure repellat amet voluptas praesentium
        eveniet non soluta cumque vero beatae possimus, veniam perspiciatis a
        unde autem doloribus. Recusandae maiores distinctio alias quisquam
        quo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        odit illum nostrum earum quidem sed nisi molestiae veritatis cupiditate,
        asperiores eaque odio consequatur, accusamus neque. Dolorem, totam
        porro! Mollitia, odio reprehenderit dolore, delectus dignissimos optio
        perferendis harum obcaecati perspiciatis explicabo est quam consequatur
        aspernatur unde laborum maiores sint saepe inventore commodi nisi neque
        error facilis quidem nam! Officia, libero quos. Accusamus vero, dolorum
        debitis numquam molestiae eligendi assumenda explicabo distinctio ipsum?
        Eaque at minus veritatis esse, iure repellat amet voluptas praesentium
        eveniet non soluta cumque vero beatae possimus, veniam perspiciatis a
        unde autem doloribus. Recusandae maiores distinctio alias quisquam
        quo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        odit illum nostrum earum quidem sed nisi molestiae veritatis cupiditate,
        asperiores eaque odio consequatur, accusamus neque. Dolorem, totam
        porro! Mollitia, odio reprehenderit dolore, delectus dignissimos optio
        perferendis harum obcaecati perspiciatis explicabo est quam consequatur
        aspernatur unde laborum maiores sint saepe inventore commodi nisi neque
        error facilis quidem nam! Officia, libero quos. Accusamus vero, dolorum
        debitis numquam molestiae eligendi assumenda explicabo distinctio ipsum?
        Eaque at minus veritatis esse, iure repellat amet voluptas praesentium
        eveniet non soluta cumque vero beatae possimus, veniam perspiciatis a
        unde autem doloribus. Recusandae maiores distinctio alias quisquam
        quo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        odit illum nostrum earum quidem sed nisi molestiae veritatis cupiditate,
        asperiores eaque odio consequatur, accusamus neque. Dolorem, totam
        porro! Mollitia, odio reprehenderit dolore, delectus dignissimos optio
        perferendis harum obcaecati perspiciatis explicabo est quam consequatur
        aspernatur unde laborum maiores sint saepe inventore commodi nisi neque
        error facilis quidem nam! Officia, libero quos. Accusamus vero, dolorum
        debitis numquam molestiae eligendi assumenda explicabo distinctio ipsum?
        Eaque at minus veritatis esse, iure repellat amet voluptas praesentium
        eveniet non soluta cumque vero beatae possimus, veniam perspiciatis a
        unde autem doloribus. Recusandae maiores distinctio alias quisquam
        quo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        odit illum nostrum earum quidem sed nisi molestiae veritatis cupiditate,
        asperiores eaque odio consequatur, accusamus neque. Dolorem, totam
        porro! Mollitia, odio reprehenderit dolore, delectus dignissimos optio
        perferendis harum obcaecati perspiciatis explicabo est quam consequatur
        aspernatur unde laborum maiores sint saepe inventore commodi nisi neque
        error facilis quidem nam! Officia, libero quos. Accusamus vero, dolorum
        debitis numquam molestiae eligendi assumenda explicabo distinctio ipsum?
        Eaque at minus veritatis esse, iure repellat amet voluptas praesentium
        eveniet non soluta cumque vero beatae possimus, veniam perspiciatis a
        unde autem doloribus. Recusandae maiores distinctio alias quisquam
        quo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        odit illum nostrum earum quidem sed nisi molestiae veritatis cupiditate,
        asperiores eaque odio consequatur, accusamus neque. Dolorem, totam
        porro! Mollitia, odio reprehenderit dolore, delectus dignissimos optio
        perferendis harum obcaecati perspiciatis explicabo est quam consequatur
        aspernatur unde laborum maiores sint saepe inventore commodi nisi neque
        error facilis quidem nam! Officia, libero quos. Accusamus vero, dolorum
        debitis numquam molestiae eligendi assumenda explicabo distinctio ipsum?
        Eaque at minus veritatis esse, iure repellat amet voluptas praesentium
        eveniet non soluta cumque vero beatae possimus, veniam perspiciatis a
        unde autem doloribus. Recusandae maiores distinctio alias quisquam
        quo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        odit illum nostrum earum quidem sed nisi molestiae veritatis cupiditate,
        asperiores eaque odio consequatur, accusamus neque. Dolorem, totam
        porro! Mollitia, odio reprehenderit dolore, delectus dignissimos optio
        perferendis harum obcaecati perspiciatis explicabo est quam consequatur
        aspernatur unde laborum maiores sint saepe inventore commodi nisi neque
        error facilis quidem nam! Officia, libero quos. Accusamus vero, dolorum
        debitis numquam molestiae eligendi assumenda explicabo distinctio ipsum?
        Eaque at minus veritatis esse, iure repellat amet voluptas praesentium
        eveniet non soluta cumque vero beatae possimus, veniam perspiciatis a
        unde autem doloribus. Recusandae maiores distinctio alias quisquam
        quo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        odit illum nostrum earum quidem sed nisi molestiae veritatis cupiditate,
        asperiores eaque odio consequatur, accusamus neque. Dolorem, totam
        porro! Mollitia, odio reprehenderit dolore, delectus dignissimos optio
        perferendis harum obcaecati perspiciatis explicabo est quam consequatur
        aspernatur unde laborum maiores sint saepe inventore commodi nisi neque
        error facilis quidem nam! Officia, libero quos. Accusamus vero, dolorum
        debitis numquam molestiae eligendi assumenda explicabo distinctio ipsum?
        Eaque at minus veritatis esse, iure repellat amet voluptas praesentium
        eveniet non soluta cumque vero beatae possimus, veniam perspiciatis a
        unde autem doloribus. Recusandae maiores distinctio alias quisquam
        quo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        odit illum nostrum earum quidem sed nisi molestiae veritatis cupiditate,
        asperiores eaque odio consequatur, accusamus neque. Dolorem, totam
        porro! Mollitia, odio reprehenderit dolore, delectus dignissimos optio
        perferendis harum obcaecati perspiciatis explicabo est quam consequatur
        aspernatur unde laborum maiores sint saepe inventore commodi nisi neque
        error facilis quidem nam! Officia, libero quos. Accusamus vero, dolorum
        debitis numquam molestiae eligendi assumenda explicabo distinctio ipsum?
        Eaque at minus veritatis esse, iure repellat amet voluptas praesentium
        eveniet non soluta cumque vero beatae possimus, veniam perspiciatis a
        unde autem doloribus. Recusandae maiores distinctio alias quisquam
        quo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        odit illum nostrum earum quidem sed nisi molestiae veritatis cupiditate,
        asperiores eaque odio consequatur, accusamus neque. Dolorem, totam
        porro! Mollitia, odio reprehenderit dolore, delectus dignissimos optio
        perferendis harum obcaecati perspiciatis explicabo est quam consequatur
        aspernatur unde laborum maiores sint saepe inventore commodi nisi neque
        error facilis quidem nam! Officia, libero quos. Accusamus vero, dolorum
        debitis numquam molestiae eligendi assumenda explicabo distinctio ipsum?
        Eaque at minus veritatis esse, iure repellat amet voluptas praesentium
        eveniet non soluta cumque vero beatae possimus, veniam perspiciatis a
        unde autem doloribus. Recusandae maiores distinctio alias quisquam quo?
      </div>
    </div>
  );
}

export default App;
