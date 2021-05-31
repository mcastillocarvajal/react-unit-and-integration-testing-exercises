

export const getImagen = async() => {

    try {

        const apiKey = 'HJChfNIP8b9OJ561FJoaEEEBnfba7x0z';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        return 'No existe'
    }
    
    
    
}



