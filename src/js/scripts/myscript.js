export default () => {
  
  console.log("Hello World!");

  // testing polyfills with NodeList forEach
  document.querySelectorAll('h2').forEach((d) => {
    console.log(d.innerText);
  })
}