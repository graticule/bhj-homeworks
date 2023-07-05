const editor = document.getElementById('editor');
const button = document.getElementById('clear');

editor.value = localStorage.getItem('editor-text') ?? '';

function saveText() {
    localStorage['editor-text'] = editor.value;
}

editor.addEventListener('input', saveText)

button.addEventListener('click', (e) => {
    editor.value = '';
    saveText();
})