export function expectElementById(id){
  let element = document.getElementById(id);
  expect(element).toBeTruthy();
}
export function expectElementsByClassName(className){
  let elements = document.getElementsByClassName(className);
  expect(elements[0]).toBeTruthy();
}