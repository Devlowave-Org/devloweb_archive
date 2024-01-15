export default function changeText(event, key, setState){
    setState(prev => ({...prev, [key]: event.target.value}))
}