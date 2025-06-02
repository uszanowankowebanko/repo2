window.onload = async () => {
  await api()
}
const api = async () => {
  try {
    const response = await fetch('https://wojrxoqafknjrbtxaqfx.supabase.co/rest/v1/article?select=*', {
      headers: {
        apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvanJ4b3FhZmtuanJidHhhcWZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2NjYxMzgsImV4cCI6MjA2MzI0MjEzOH0.i7VW4Gi2fbesgXRflGr4cV6O6Z-N6pUbP6GjSY7OSLQ',
      },
    });
    if (!response.ok) {
      throw new Error("Blad")
    }

    let dane = await response.json()
    console.log(dane)
    for (let i = 0; i < dane.length; i++) {
      const p = document.createElement("p")
      p.innerHTML = `
          <p>tytul:${dane[i].title}</p></br>
          <p>autor:${dane[i].author}</p></br>
          <p>podtytul:${dane[i].subtitle}</p></br>
          <p>data utworzenia artykulu:${dane[i].created_at}</p></br>
          <p>zawartosc${dane[i].content}:</p>`
          document.getElementById("app").appendChild(p)
      p.style = "border:1px solid red"
    }
  } catch (error) {
    console.error(error.message)
  }

}

const dodawanie = async () => {
  let title = document.getElementById("title").value
  let subtitle = document.getElementById("subtitle").value
  let author = document.getElementById("author").value
  let content = document.getElementById("content").value
  let obiekt = {
    title: title,
    subtitle: subtitle,
    author: author,
    content: content,
    
  }
  console.log(obiekt)
  try {
    const response = await fetch('https://wojrxoqafknjrbtxaqfx.supabase.co/rest/v1/article', {
      method:"POST",
      headers: {
        apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvanJ4b3FhZmtuanJidHhhcWZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2NjYxMzgsImV4cCI6MjA2MzI0MjEzOH0.i7VW4Gi2fbesgXRflGr4cV6O6Z-N6pUbP6GjSY7OSLQ'
        , "Content-Type":"application/json"
      },
      body: JSON.stringify(obiekt)
    });
    if (!response.ok) {
      throw new Error("Blad")
    }
    console.log(response.json())

  } catch (error) {
    console.error(error.message)
  }

}

document.getElementById("dodaj").addEventListener("click", async (e) => await dodawanie()) 
