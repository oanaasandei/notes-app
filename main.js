let submitBtn = document.getElementById("submit-note");
let newNoteInput = document.getElementById("new-note");

let notes = [];

const renderNotes = () => {
    let content = "";
    for(let i=0; i<notes.length; i++) {
        content += `<li>${notes[i]}</li>`;
    }
    document.getElementById("notes").innerHTML = content;
}

submitBtn.addEventListener("click", () => {
    let newNoteText = newNoteInput.value;
    newNoteInput.value = '';
    notes.push(newNoteText);
    renderNotes();
});

