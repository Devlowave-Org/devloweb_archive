export default function changeImage(event, key, setState){
    setState(prev => ({...prev, [key]:  URL.createObjectURL(event.target.files[0])}))
}