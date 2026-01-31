const API_URL = "http://localhost:5000/api/tasks";
const taskList = document.getElementById("taskList");
const form = document.getElementById("taskForm");
const filter = document.getElementById("filterStatus");
const addBtn = form.querySelector("button[type='submit']");

loadTasks();


filter.addEventListener("change", loadTasks);

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();

  if (!title) {
    alert("Title is required!");
    return;
  }

  addBtn.disabled = true;
  addBtn.textContent = "Adding...";

  try {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });
    form.reset();
    loadTasks();
  } catch (error) {
    alert("Failed to add task, try again!");
  }

  addBtn.disabled = false;
  addBtn.textContent = "Add Task";
});


async function loadTasks() {
  const filterValue = filter.value;
  const res = await fetch(API_URL);
  let tasks = await res.json();

  if (filterValue !== "all") {
    tasks = tasks.filter((task) => task.status === filterValue);
  }

  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <b>${task.title}</b><br/>
      ${task.description || ""}<br/>
      Status: ${task.status}<br/><br/>

      <button class="complete-btn" onclick="markComplete('${task._id}')">Complete</button>
      <button class="edit-btn" onclick="editTask('${task._id}', '${escapeQuotes(task.title)}', '${escapeQuotes(task.description || "")}')">Edit</button>
      <button class="delete-btn" onclick="deleteTask('${task._id}')">Delete</button>
    `;



    taskList.appendChild(li);
  });
}

function escapeQuotes(text) {
  return text.replace(/'/g, "\\'").replace(/"/g, '\\"');
}

async function markComplete(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: "Completed" }),
  });
  loadTasks();
}


async function editTask(id, oldTitle, oldDesc) {
  const newTitle = prompt("Edit Title:", oldTitle);
  if (!newTitle) return alert("Title cannot be empty.");

  const newDesc = prompt("Edit Description:", oldDesc);

  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: newTitle, description: newDesc }),
  });
  loadTasks();
}

async function deleteTask(id) {
  if (!confirm("Are you sure you want to delete this task?")) return;

  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  loadTasks();
}
