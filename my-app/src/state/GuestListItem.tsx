interface clearProps{
    item:string 
}
export const GuestListItem:React.FC<clearProps>=({item})=>{
    return <div><li><h1>{console.log('yes')}{item}</h1></li> </div>

}