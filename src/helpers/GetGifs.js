
    const GetGifs = async(category) =>{
        // encodeUTI nos permite entregar un buen nombre de url sin espacios ni teclas especiales
        const url= `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=15&api_key=m3K489VPhSC1VbTJ36WGOuoUAbur5D3S`;
        const resp = await fetch( url );
        const {data} = await resp.json();

        const gifs = data.map( img => {
           return{
               id: img.id,
               title: img.title,
               url: img.images?.downsized_medium.url,
           }
         }

       )

       return gifs;
    }


export default GetGifs
