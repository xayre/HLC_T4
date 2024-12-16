function changeTheme(theme) {
    const body = document.body;
    const header = document.querySelector("header");
    const button = document.button;

    body.setAttribute("data-theme", theme);
    header.setAttribute("data-theme", theme);
    button.setAttribute("data-theme", theme);
}

function addNote() {
    const noteInput = document.getElementById("note-input");
    const notesContainer = document.getElementById("notes-container");
    const noNotesMessage = document.getElementById("no-notes");

    const noteText = noteInput.value.trim();

    if (noteText === "") {
        alert("Por favor, escribe una nota antes de añadir.😡");
        return;
    }

    const note = document.createElement("div");
    note.className = "note";
    note.innerHTML = `
        <span>${noteText}</span>
        <button class="delete-note" onclick="deleteNote(this)">Borrar</button>
    `;

    notesContainer.appendChild(note);

    noteInput.value = "";
    noNotesMessage.style.display = "none";
}

function deleteNote(button) {
    const note = button.parentElement;
    note.remove();

    const notesContainer = document.getElementById("notes-container");

    if (notesContainer.children.length === 0) {
        document.getElementById("no-notes").style.display = "block";
    }
}

function clearAllNotes() {
    if (confirm("¿Estás seguro de que deseas borrar todas las notas?😢")) {
        const notesContainer = document.getElementById("notes-container");
        notesContainer.innerHTML = '<p id="no-notes" style="font-style: italic; color: #555;">Todavía no hay notas</p>';
    }
}