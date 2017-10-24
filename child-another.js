process.on("message", function(m) {
  if (m.cmd === "double") {
    console.log("hs: I was able to double", m.number);
    process.send({ answer: m.number * 2 });
  } else if (m.cmd == "done") {
    process.exit();
  }
});
