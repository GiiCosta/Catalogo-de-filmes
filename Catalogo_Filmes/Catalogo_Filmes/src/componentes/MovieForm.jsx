import { useState } from 'react'

const MovieForm = (handelSubmit) => {
  const [title, setTitle] = useState ("");
  const [category, setCategory] = useState ("");
  const [year, setYear] = useState ("");
  const [note, setNote] = useState ("");
  const [image, setImage] = useState ("");
  const [synopsis, setSynopsis] = useState ("");

  const submitForm = (e) =>{
    e.preventDefaul();

    const movie = { 
      title,
      category,
      year,
      note,
      image,
      synopsis
    };
    handelSubmit(movie)
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <h2>Cadastro de Filmes</h2>

          <label>
            <span>Título do filme</span>
            <input type="text" value={title || ""} onChange={(e) => setTitle(e.target.value)}/>
          </label>

          <label>
            <span>Categoria</span>
            <input type="text" value={category || ""} onChange={(e) => setCategory(e.target.value)}/>
          </label>

          <label>
            <span>Ano de lançamento</span>
            <input type="text" value={year || ""} onChange={(e) => setYear(e.target.value)}/>
          </label>
          
          <label>
            <span>Nota</span>
            <input type="text" value={note || ""} onChange={(e) => setNote(e.target.value)}/>
          </label>

          <label>
            <span>URL da imagem/poster,</span>
            <input type="text" value={image || ""} onChange={(e) => setImage(e.target.value)}/>
          </label>

          <label>
            <span>Sinopse</span>
            <input type="text" value={synopsis || ""} onChange={(e) => setSynopsis(e.target.value)}/>
          </label>

          <input type="button" value="Cadastrar" />
          
      </form>
    </div>
  )
}

export default MovieForm
