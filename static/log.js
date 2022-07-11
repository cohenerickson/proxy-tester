const logTemplates = {
  info: (message) => `<div class="p-1.5"><span class="p-1 bg-blue-700 rounded">Info</span><span> ${message}</span></div>`,
  pass: (message) => `<div class="p-1.5"><span class="p-1 bg-green-700 rounded">Pass</span><span> ${message}</span></div>`,
  fail: (message) => `<div class="p-1.5"><span class="p-1 bg-red-700 rounded">Fail</span><span> ${message}</span></div>`,
}

const stack = [];

export default function log (type, message) {
  if (stack.includes(message)) return;
  stack.push(message);
  let template = logTemplates[type](message);
  const container = document.createElement("div");
  container.innerHTML = template;
  const logContainer = document.getElementById("output");
  logContainer.appendChild(container.children[0]);
}
