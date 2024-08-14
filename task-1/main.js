"use strict";

const listElement = document.getElementById("list");

const playList = [
  { author: "LED ZEPPELIN", song: "STAIRWAY TO HEAVEN" },
  { author: "QUEEN", song: "BOHEMIAN RHAPSODY" },
  { author: "LYNYRD SKYNYRD", song: "FREE BIRD" },
  { author: "DEEP PURPLE", song: "SMOKE ON THE WATER" },
  { author: "JIMI HENDRIX", song: "ALL ALONG THE WATCHTOWER" },
  { author: "AC/DC", song: "BACK IN BLACK" },
  { author: "QUEEN", song: "WE WILL ROCK YOU" },
  { author: "METALLICA", song: "ENTER SANDMAN" },
];

function addListItem(idx) {
  const listItemElement = document.createElement("li");
  listItemElement.innerHTML = `${playList[idx].author} - ${playList[idx].song}`;
  listElement.append(listItemElement);
};

for (let i = 0; i < playList.length; i++) {
  addListItem(i);
};
