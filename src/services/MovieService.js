
// export async function getAllMovies() {
//     try{
//         const response = await fetch('http://localhost:3001/api/movies/all');
//         return await response.json();
//     }catch(error) {
//         return [];
//     }


// }

// export async function getAllMovies() {
//     try{
//         const response = await fetch('http://localhost:3001/api/movies/');
//         //const response = await fetch('/api/movie/all');
//         return await response.json();
//     }catch(error) {
//         return [];
//     }
    
// }


// export async function createMovie(data) {
//     const response = await fetch('http://localhost:3001/api/movie', {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({movie: data})
//       })
//     return await response.json();
// }

export async function getAllMovies() {

    try{
        //const response = await fetch('/api/users');
         const response = await fetch('http://localhost:4000/api/movie/all');
        //const response = await fetch('/api/movie/all');
        return await response.json();
    }catch(error) {
        return [];
    }
    
}

//---- ยังไม่เสร็จ ----
export async function createMovie(data) {
    const response = await fetch(`http://localhost:4000/api/movie/insert`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({...data})
      })
    return await response.json();
}



