export default function changeLink(event, key, setState){
    setState(prev => ({...prev, [key]:  event.target.value}))
}