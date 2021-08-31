export function expectElementBySelector(selector){
  expect(this.querySelector(selector)).toBeTruthy();
}
export function expectElementsByClassName(className){
  let elements = document.getElementsByClassName(className);
  expect(elements[0]).toBeTruthy();
}