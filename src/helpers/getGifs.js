

//---- Obtenemos los gif del API ----
export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=srzSq8ZKJOgIY4RAGLvAHSebDS2IG1g5`; //encodeURI remplaza espacios por + o %

    const resp = await fetch(url); //buscamos en la api lo que tenemos en el URL
    
    const {data} = await resp.json(); //convertimos la respuesta en Json y lo destructuramos

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url  //con el signo ? decimos que si viene las imagenes las utilice
        }
    })

    return gifs;
}