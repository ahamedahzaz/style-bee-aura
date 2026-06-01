import { useState } from "react";
import { supabase } from "../supabase";

function AdminDashboard() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!name || !category || !description || !image) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const fileName = `${Date.now()}-${image.name}`;

      const { error: uploadError } = await supabase.storage
        .from("products")
        .upload(fileName, image);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from("products")
        .getPublicUrl(fileName);

      const imageUrl = data.publicUrl;

      const { error: dbError } = await supabase
        .from("products")
        .insert([
          {
            name,
            category,
            description,
            image: imageUrl,
          },
        ]);

      if (dbError) throw dbError;

      alert("Product uploaded successfully!");

      setName("");
      setCategory("");
      setDescription("");
      setImage(null);
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#111",
        color: "white",
        padding: "40px",
      }}
    >
      <h1>Style Bee Aura Admin Dashboard</h1>

      <div
        style={{
          marginTop: "30px",
          background: "#222",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h2>Add New Product</h2>

        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "10px",
          }}
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "10px",
          }}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "10px",
            height: "120px",
          }}
        />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "10px",
          }}
        />

        <button
          onClick={handleUpload}
          disabled={loading}
          style={{
            marginTop: "15px",
            padding: "12px 25px",
            cursor: "pointer",
          }}
        >
          {loading ? "Uploading..." : "Upload Product"}
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;