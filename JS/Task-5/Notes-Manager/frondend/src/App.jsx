import { useState, useEffect } from "react";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  // Load Notes from Local Storage
  useEffect(() => {
    try {
      const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
      setNotes(savedNotes);
    } catch (error) {
      console.log("Error Loading Notes:", error);
    }
  }, []);

  // Save Notes to Local Storage
  useEffect(() => {
    try {
      localStorage.setItem("notes", JSON.stringify(notes));
    } catch (error) {
      console.log("Error Saving Notes:", error);
    }
  }, [notes]);

  // Add / Update Note
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("Please fill all fields");
      return;
    }

    if (editId) {
      const updatedNotes = notes.map((note) =>
        note.id === editId ? { ...note, title, content } : note,
      );

      setNotes(updatedNotes);
      setEditId(null);
    } else {
      const newNote = {
        id: Date.now(),
        title,
        content,
      };

      setNotes([...notes, newNote]);
    }

    setTitle("");
    setContent("");
  };

  // Edit Note
  const handleEdit = (note) => {
    setEditId(note.id);
    setTitle(note.title);
    setContent(note.content);
  };

  // Delete Note
  const handleDelete = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);

    setNotes(updatedNotes);
  };

  // Search Notes
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Notes Manager</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />
        <br />

        <textarea
          placeholder="Enter Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">{editId ? "Update Note" : "Add Note"}</button>
      </form>

      <br />

      <input
        type="text"
        placeholder="Search Notes"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <hr />

      {filteredNotes.length === 0 ? (
        <p>No Notes Found</p>
      ) : (
        filteredNotes.map((note) => (
          <div
            key={note.id}
            style={{
              border: "1px solid black",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3>{note.title}</h3>
            <p>{note.content}</p>

            <button onClick={() => handleEdit(note)}>Edit</button>

            <button onClick={() => handleDelete(note.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default App;
