namespace Scraper {
  const fs = require("fs").promises;
  const jsdom = require("jsdom");
  const { JSDOM } = jsdom;

  // これを実装していく
  class Node {}

  // メイン関数
  const main = async () => {
    const text = await fs.readFile("dotinstall-lessons.html", "utf-8");
    const dom = new JSDOM(text);
    const body = dom.window.document.body;
    console.log(body.tagName);
  };

  main();
}
