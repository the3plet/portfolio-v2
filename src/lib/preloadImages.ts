export function preloadImages(imageUrls:string[]):Promise<void>{
    return Promise.all(
        imageUrls.map((src)=>new Promise((resolve,reject)=>{
            const img = new Image();
            img.src=src
            img.onload=resolve
            img.onerror=reject
        }))
    ).then(()=>undefined)
}