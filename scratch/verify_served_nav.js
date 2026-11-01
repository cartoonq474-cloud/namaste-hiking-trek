fetch('http://localhost:8080/')
  .then(res => res.text())
  .then(html => {
    const start = html.indexOf('id="tab-everest"');
    console.log(html.substring(start, start + 650));
  });
